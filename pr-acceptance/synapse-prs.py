import requests
import re
import sqlite3
from datetime import datetime
import os

pagecount = 1

def getpage(url, page):
    global pagecount
    url = url + str(page)
    print(url)
    resp = requests.get(url, auth=("benparsons", os.environ['GH_ACCESS_TOKEN']))

    for link in resp.links.values():
        if link['rel'] == 'last':
            pagecount = re.search('page=(.+?)', link['url']).group(1)


    return resp.json()

def getpulls():
    json = list()
    urlbase = 'https://api.github.com/repos/matrix-org/synapse/pulls?state=all&page='
    json.extend(getpage(urlbase, 1))

    for page in range(2, int(pagecount) + 1):
        json.extend(getpage(urlbase, page))

    return json

pulls = []#getpulls()

conn = sqlite3.connect('example.db')
c = conn.cursor()


for pull in pulls:
    #print(str(pull['number']) + " " + pull['created_at'] + " " + pull['author_association'] + " " + pull['user']['login'])
    d = {
        'number': str(pull['number']),
        'userlogin': pull['user']['login'],
        'state': pull['state'],
        'created_at': pull['created_at'],
        'updated_at': pull['updated_at'],
        'merged_at': pull['merged_at'],
        'closed_at': pull['closed_at'],
        'author_association': pull['author_association']
        }
    sql = '''insert or replace into prs VALUES(
        {number},
        '{userlogin}',
        '{state}',
        '{created_at}',
        '{updated_at}',
        '{merged_at}',
        '{closed_at}',
        '{author_association}'
        )'''.format(**d)
    c.execute(sql)

select = '''select strftime('%Y-%m-%d', created_at) created_at1,
author_association, count(*) as c
from prs 
group by created_at1, author_association;'''

c.execute(select)
rows = c.fetchall()

for row in rows:
    weeknum = datetime.strptime(row[0], '%Y-%m-%d').isocalendar()[1]
    c.execute("insert or replace into pivot VALUES('" + row[0] + "'," + str(weeknum) + ", 0, 0, 0, 0)")

for row in rows:
    insert_pivot = 'UPDATE pivot SET ' + row[1] + ' = ' + str(row[2]) +'  WHERE Date = ' + "'" + row[0] + "'"
    c.execute(insert_pivot)

conn.commit()
conn.close()
