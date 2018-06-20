# New sections, headings TBD
1. Concept
2. Concrete intro to the tech
3. How it is built and by whom

should s2 and s3 be swapped?

4. concept part 2

# FAQ
## General
### What is Matrix?
(s1) Existing is good.
### What is Matrix's Mission?
(s1) This is very good.
### What does this mean for users?
(s1) This is fine, partly duplicates the Mission.

### Why are you called Matrix?
(s1) This is great, maybe a link out to explain "matrixed".

The four questions above are ideal for a top section. Top section is "concept", the next section will be "concrete intro to the tech", the section after will be how is it built.

### What does Matrix provide?
(s2) This is ok, the text itself can be improved, but there needs to be a question above to introduce the "concrete intro" section.


### What kind of company is Matrix.org?
(s3) Can this have a date attached?

### Who is funding Matrix.org?
(s3) This needs to be completely re-worked. How much do we want to talk about New Vector?

### Who is building Matrix?
(s3) Good but can be refreshed.


### Why have you released this as open source?
(s4) Perfect.

### What do you mean by open?
(s4)

### What does federated mean?
(s4)

### How is this like e-mail?
(s4)

### Why has no one done this before?
(s4)


### What is the difference between Matrix and IRC?
(c-d)(s7)
### What is the difference between Matrix and XMPP?
(c-d)(s7)
### What is the difference between Matrix and PSYC?
(c-d)(s7)
### What is the difference between Matrix and Tox?
(c-d)(s7)
### How does Matrix compare with something like Trillian or Pidgin?
(c-d)(s7)

### What Matrix compliant apps are there?
(s6)

### What bridges to other networks are available?
(s6)

### Why do you think existing apps will ever join this officially?
(s7)

### Why aren't you doing this through the IETF? or W3C? or 3GPP?
(s7)

## Quick Start
### How do I get an account and get started?
(s6)

### What can I actually do with this?
(s6) This needs to be reworked.


### How do I Matrix-enable my existing app?
(s5)

### How can I write a client on Matrix?
(s5)

### How can I help out with this?
(s6)

### Where can I get support?
(s6) Expand with personas.

### How do I register custom matrix event types?
(s5)

### How mature is this?
(s7)




## Standard
### What is a client?
definition. This question must be easily answerd by the top section
### Can I use Matrix without installing a Matrix client?
c Needs rework.
### What is a home server?
definition.
### What is a MXID?
definition. needs rework
### What is a 3PID?
definition, needs rework, and the question must be easily answered elsewhere.
### What is an identity server?
c
### Where do my conversations get stored?
c
### What are redactions?
definition
### How do you do VoIP calls on Matrix?
c-v voip can have a separate section
### Are VoIP calls encrypted?
c-v
### Do I need a TURN server?
c-v
### Can I log into other homeservers with my username and password?
c
### Why Apache Licence?
(s7)
### Can I write a Matrix homeserver?
(s5)
### How secure is this?
c
### What is Perspectives?
c
### Why HTTP? Doesn't HTTP suck? Why don't you use websockets/CoAP/HTTP2/etc?
(s5), but maybe something positive/explanatory above this
## Servers
### What is Synapse?
c
### How do I join the global Matrix federation?
### How do I run my own homeserver?
(s6), these two are the same
### What ports do I have to open up to join the global Matrix federation?
(s6)
### How do I connect my homeserver to the public Matrix network?
Orphan question - what homeserver?
Is this the same as above?

### Can I run my own identity server?
need rewrite, how to include 3rd party? what is the state of sydent?

### What are Synapse's platform requirements?
might not be an FAQ topic

### Why is Synapse in Python/Twisted?
^ unless synapse gets a section of its own

### Why aren't you using an ORM layer like SqlAlchemy in Synapse?
### Will Synapse share my chat data with other servers in the federation?
### Why can't I rename my homeserver?
(s6)
## Clients
### Where can I find a mobile app?
(s6)
### I installed Riot via F-Droid, why is it draining my battery?
(s6)
### Where can I find a web app?
(s6)
### Where can I find a desktop client?
(s6)
### Why can't end-to-end encryption be turned off?
c-e
### Why isn't end-to-end encryption enabled by default?
c-e
## QUESTIONS TO BE ANSWERED!
 * How do I change the TLS key of my server?
 * How do I maintain my synapse's DB (e.g. prune old conversations)?
 * How do I maintain my synapse's content repository (e.g. prune old content)?
 * Why is the spec so big, especially relative to the XMPP baseline spec?
 * How do I contribute to the spec?
 * What is the privacy policy on Matrix.org?
 * How precisely does E2E work?
 * How does Matrix actually work architecturally?
 * What IOT use cases are there for Matrix?
 * Why is are the Matrix reference implementations written in so many different languages?
 * How does push work?
 * What's on the roadmap?
 * How can I use Matrix to talk on Freenode or other IRC networks?
 * Where can I learn more about Matrix?  (link to PDFs of other presentations etc)
 * Why is synapse so resource intensive immediately after federating for the first time?


# New Questions
What are communities? (What are groups? == communities)
Hello, how can I get rooms list from matrix.org?
What are some examples of clients?
What does End-to-End (E2E) encryption mean?

Need a quick and understandable way to explain federation in a practical way. Like the guy who did not understand why he could not see the Arch linux room on disroot.

https://matrix.to/#/!cURbafjkfsMDVwdRDQ:matrix.org/$15278335351277357nNDbf:matrix.org from "Yaniel":
servers are owned by whoever sets them up
so yes, most belong to other users
just like gmail.com belongs to google and hotmail.com to microsoft
but you can send messages from one to the other

Spec related points
* what's an MSC
* what is the process for adding spec proposals

Make a list of things to compare to, then make a separate page?