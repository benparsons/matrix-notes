# Creating a simple read-only Matrix client

I created [matrix-enact] as a fun way to render Matrix rooms - it essentially "performs" the room history by progressively speaking each message event in chronological order. In this way, [matrix-enact] is effectively a simple, read-only Matrix client. Let's see how it was built.

This article will introduce two important concepts in Matrix, specifically in the [Matrix Client-Server API]: guest access and the `/context` endpoint, which gets messages before and after a given event.

## Get Guest access_token

Matrix allows for [guest access](https://matrix.org/docs/spec/client_server/latest.html#guest-access) by providing an interface to register a new guest user and be immediately given an access token. To do this we call the `/register` endpoint with a query param `kind` set to `guest`. In matrix-enact, this looks like:

```javascript
var url = "https://matrix.org/_matrix/client/r0/register?kind=guest";
const res = await axios.post(url, {});
const { data } = await res;
// data.access_token will contain the access token, we must store it
```

Once we have the access token, we use it in the same way as if logged in with a normal user.

* introduce /context
* loop until we have enough messages
* use Web Audio API
* utterance.onend
* push the line onto react to render

[Matrix Client-Server API]: https://matrix.org/docs/spec/client_server/latest.html
[matrix-enact]: https://github.com/benparsons/matrix-enact