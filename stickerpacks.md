# Provide a folder of image files
* PNG or GIF format
* Minimum resolution 512x512 pixels.

# Provide a way of mapping three fields:
* filename - the filename as provided
* name - a short version of the description, used in the sticker-picker for tooltips and filter text (search)
* description - a longer, XKCD-type description to be used in the timeline. Should ideally add something to the image.

Ideally, the mapping manifest would be in JSON format like:

```
[
{"file": "Alarm_Clock_GIF_Animation.gif", "name": "Alarm Clock", "description": "An alarm clock rings as the hours tick away, yet it remains eternally three o'clock"},
{"file": "Ambulance_Flat_Icon_GIF_Animation.gif", "name": "Ambulance", "description": "An ambulance trundles gently towards an emergency"},
{"file": "Arrow-1---IN.gif", "name": "Arrow", "description": "A black, right pointing animated arrow"}
]
```