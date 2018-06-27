#!/bin/bash

DATE=`date +%Y-%m-%d`
FILE="synapse-pulls-$DATE.csv"

sqlite3 -header -csv example.db "SELECT 
MAX(weeknum) AS weeknum,
SUM(MEMBER) AS member,
SUM(CONTRIBUTOR) AS contributor,
SUM(FIRST_TIME_CONTRIBUTOR) AS ft_contributor
FROM pivot
GROUP BY weeknum" > $FILE

mv $FILE "/Users/benp/Google Drive File Stream/My Drive/synapse-pulls/$FILE"