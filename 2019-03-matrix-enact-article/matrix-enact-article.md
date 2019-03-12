# Creating a simple read-only Matrix client

I created [matrix-enact] as a fun way to render Matrix rooms - it essentially "performs" the room history by progressively speaking each message event in chronological order. In this way, [matrix-enact] is effectively a simple, read-only Matrix client. Let's see how it was built.

This article will introduce two important concepts in Matrix, specifically in the Matrix Client-Server API: guest access and the `/context` endpoint, which gets messages before and after a given event.

## Get Guest AT



* get guest AT
* introduce /context
* loop until we have enough messages
* use Web Audio API
* utterance.onend
* push the line onto react to render