# Creating a simple read-only Matrix client

I created [matrix-enact] as a fun way to render Matrix rooms - it essentially "performs" the room history by progressively speaking each message event in chronological order. In this way, [matrix-enact] is effectively a simple, read-only Matrix client. Let's see how it was built.

This article will introduce two important concepts in Matrix, specifically in the [Matrix Client-Server API]: guest access and the `/context` endpoint, which gets messages before and after a given event.

## Not using the matrix-js-sdk

Although written in JavaScript (and Reactjs), this project does not use the matrix-js-sdk, it makes direct HTTP calls to the [Matrix Client-Server API]. Because there are only three endpoints we need to hit, we can keep the project very light by not including an SDK.

## Get Guest access_token

Matrix allows for [guest access](https://matrix.org/docs/spec/client_server/latest.html#guest-access) by providing an interface to register a new guest user and be immediately given an access token. To do this we call the `/register` endpoint with a query param `kind` set to `guest`. In matrix-enact, this looks like:

```javascript
var url = "https://matrix.org/_matrix/client/r0/register?kind=guest";
const res = await axios.post(url, {});
const { data } = await res;
// data.access_token will contain the access token, we must store it
```

Once we have the access token, we use it in the same way as if logged in with a normal user.

## Translate a Room Alias to a Room ID

In the 

## `/context` endpoint

We use the `/context` endpoint to get chronological history of a room timeline.


* introduce /context
* loop until we have enough messages
* use Web Audio API
* utterance.onend
* push the line onto react to render

[Matrix Client-Server API]: https://matrix.org/docs/spec/client_server/latest.html
[matrix-enact]: https://github.com/benparsons/matrix-enact
[context]: https://matrix.org/docs/spec/client_server/latest.html#id161