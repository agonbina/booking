
### Implementation details

The application consists of three different views that each deal with a piece of functionality of the whole
    "room booking" flow:
* [Attendees](/views/attendees) The user can choose to pre-select the members who are attending the meeting using a
    simple drag and drop interface. Here they can also add or remove members from this organization(team).
* [Search](/views/search) Here the user may search for the available rooms.
* [Book Room](/views/book-room) This is the view where the user can finalize a booking after they have selected a room.

##### [Availability time bar](/views/search/components/) ```timebar.js and timebar.jade```
The availability for a room is expressed using interval blocks("from" -> "to") green bars. I intentionally omitted
visualising the time when a room is not available with red because:
  * Save some real estate in the room card
  * More numbers might just confuse the user, as they only care about "when is the room available"

A future enhancement would be making the width of an interval block relative to the length of that interval, so for
example the bar for "7:00 - 9:00" would be smaller than the bar for "11:00 - 19:00"

### Third party libraries

* [Semantic UI](http://semantic-ui.com/) I really like all the modules and the syntax that Semantic UI has developed.
* [Vue.js](http://vuejs.org)
* jQuery

### Running the app

First clone the repo and then ```cd``` in it:
```
git clone https://github.com/agonbina/1aim-challenge.git
cd 1aim-challenge
```

Then build it:

```
npm install

webpack

// Install http-server if you haven't already
npm install -g http-server

// Run it
http-server --cors -o
```