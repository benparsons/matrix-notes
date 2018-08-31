Hi all, today marks my last day of my 3 month internship at New Vector. For those of you who haven't
been reading Ben's fabulous blog posts, I've been working exclusively on bridges; in particular the IRC bridge.
Tasked with the goal of making it crash less and run faster, I hope that the evidence is visible and people are generally having a better experience on it.

Some stats pulled from the matrix-appservice-irc repo:

* 39 PRs closed (4 remain open)
* 27 issues closed, 27 issues opened.
* 334 commits, averaging 7.6 commits a PR.

Commits this year:

![Commits this year](./commits_year.png)

----

But aside from showing off some stats, I wanted to mention all the new features:

* Replies on Matrix translate well to IRC, or as well as IRC allows.
* People mentioning your IRC nick now ping your matrix user, finally!
* So. Many. Metrics. Everything you wanted to know about the internals of the bridge, but were too afraid to ``--inspect``.
* Not spamming homeservers with join requests on startup (it makes for a happy ops team).
* No longer are IRC users shackled to a "(IRC)" extension on their displayname, you can be who you want
  with group flairs!
* Support for node 4 has been dropped, and support for 6,8 and 10 has been assured.

On the [matrix-appservice-bridge](https://github.com/matrix-org/matrix-appservice-bridge) side, I optimised 
some calls to cache locally and avoid hitting the homeserver too often, and disabling presence for homeservers
that don't support it.

In the future, there are plans to make bridging more visible to Matrix Clients as a first class citizen. Ideas
like [speccing a state event (MSC1410)](https://github.com/matrix-org/matrix-doc/issues/1410) so that bridges can
interact with each other properly and client's can create full bridge management views which are still decentralised
from an integration manager.

I'd like to give a shoutout to Travis who has been reviewing nearly all my changes that have made it's way into the bridge
on top of all the other tasks he has on his plate. And of course a thank you to all of the Matrix team who have been 
very supportive during my time here.