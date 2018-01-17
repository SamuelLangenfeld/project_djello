# assignment_djello

Project management with that great wobbly taste.

user has many boards

USER

* userid
* username
* password
* email?

PROFILE table(?) -->

user can have many boards

BOARD table

* board id
* user id (that board belongs to)
* board name

LIST table

* list id
* list title
* list description
* board id as foriegn key(that it belongs to)

CARD table

* card id
* list id as foriegn key(that it belongs to)
* description
* priority
* completed at: date (to act as status (completed/not completed))

CARD/USER join table (cards can have many users & vice versa)

* card id
* userID

ACTIVITY table

* activity id
* card id as foreign key
* user id as foreign key
* description(?)
* date

types of activites to log

* editing title/description
* adding members
* marking as complete/incomplete
* editing priority value






Ok so client side-

Assume user just logged in.
Fetch request for user info, plus boards. Pretty much want everything at once. Shouldn't actually be that much info, so won't be bad.

Fetch for user, their boards, lists for the boards, cards for the lists.

Let's get board show and creation working.