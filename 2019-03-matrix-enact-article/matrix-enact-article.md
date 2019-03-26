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

In the UI, the user can enter either a room alias or a room ID. Whichever they enter, to get message content from a room we need the ID. This means we need to detect if an alias has been entered, and if so get the correct room ID for that alias:

```javascript
// we know that if the first character is a '#', we have an alias not an id
if (this.state.roomEntry[0] === "#") {
    var getIdUrl = "https://matrix.org/_matrix/client/r0/directory/room/";
    getIdUrl += encodeURIComponent(this.state.roomEntry);
    const res = await axios.get(getIdUrl);
    const { data } = await res;
    // data.room_id contains the room id for the alias
}
```

## `/context` endpoint

We use the `/context` endpoint to get chronological history of a room timeline.

Looking at [this section of the Client-Server API](https://matrix.org/docs/spec/client_server/latest.html#id161) we see:

> This API returns a number of events that happened just before and after the specified event. This allows clients to get the context surrounding an event.

To get messages from this endpoint we need to provide a room id and the event id we want context for. Check out the comments in the code below to follow along.

```javascript
// first we construct the url as per the CS API
const url = `https://matrix.org/_matrix/client/r0/rooms/${encodeURIComponent(roomId)}/context/${encodeURIComponent(startEventId)}?limit=100&access_token=${this.state.accessToken}`;

axios.get(url).then(res => {
    // make an array to store the events from the response
    var newEvents = [];

    // we only want the events that follow our start events
    newEvents = newEvents.concat(res.data.events_after);

    // and we only want events that contain a body field, i.e. that are messages
    newEvents = newEvents.filter(e => e.content.body);

    // finally, since we're using React for this app,
    // we store these messages in the state object
    this.setState({events: this.state.events.concat(newEvents)});
});
```

## Loop until we have enough messages

Notice the previous URL we hit when calling `/context`. We specified a `limit` value of 100. In fact, this is usually the limit enforced by the homeserver. This limit refers to the number of events, not the number of messages - remember that we are filtering them in the code above.

If we say that we want our script to be 



* use Web Audio API
* utterance.onend
* push the line onto react to render

[Matrix Client-Server API]: https://matrix.org/docs/spec/client_server/latest.html
[matrix-enact]: https://github.com/benparsons/matrix-enact
[context]: https://matrix.org/docs/spec/client_server/latest.html#id161