# Wend

Multiple components:

* react-native app
* bot
* map render

## App

Must log into an existing Matrix account

We post into a room from the app as a client. We post location objects and optionally `m.text`/`m.notice` for visibility.

After login, the user enters a shortcode, from here we look up a room_id.

If the user has permission to post in to the room we're good.

User hits 'go' and we post every minute (?) the `client_ts` and `m.location` to the room.

## Bot

Bot keeps a mapping of shortcodes against room_ids.

Bot joins any room it's invited to, assigns a unique shortcode to each room.

Needs to read and send. When a shortcode is assigned, bot announces it.

Reads rooms, keeps a record in state, not a separate DB, whenever anyone posts a location.

## API

Is this enabled by the bot?

A single endpoint, takes a shortcode and room_id as params, these must match.

API returns a (n) most recent locations for each member.

## Map

OpenStreetMap/Leaflet.js

Calls the API, renders each event in chronological order, but showing only one icon per mxid.