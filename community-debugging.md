# Community Debugging

Lots of issues with communities are related to problems with the `group_attestations_remote` table.

```
select user_id, count(*)
from group_attestations_remote
where group_id = '<community id>'
group by user_id
having count(*) > 1
```

From this you should get some user mxids, these are unnecessarily duplicated.

Riot may fail to load the UI to remove the user, in which case we need to construct the API call. It looks like this:

```
https://<homeserver_url>/_matrix/client/r0/groups/<community id>/admin/users/remove/<full mxid>
```

This is a `PUT` request, and needs an authorisation header:

```
Authorization: Bearer <access token>
```

Also needs a body, just put an empty JSON object:

```
{}
```

Hint: Postman makes this really simple, otherwise CURL is fine if you prefer. Anything that can send PUTs.

You may not get a useful response from the server, but re-run the original query to confirm it worked.