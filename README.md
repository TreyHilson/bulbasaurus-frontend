Link to Bulbasaurus application : https://treyhilson.github.io/bulbasaurus-frontend/

Bulbasaurus API : https://github.com/TreyHilson/bulbasaurus

Wireframe: https://imgur.com/a/pQaoMTz



User --- < Many plants
Plants -- (plant_species, nickname , fact)

## Fullstack Project Concept:
```md

My idea is a resource for cool house plants. I came up with it brainstorming and going through things like pinterests for inpiration. I think that a lot of people enjoy the idea and practice of adding a piece of nature into their homes. Users would be people who want to begin keeping a log of plants of interests and costs, some fun facts about the plant as well.
I also find that in conversations about plants with other people, I always learn something new. That piece was important to me because I wantedusers to feel like they have something to offer of value as well when adding to their resource.

Some challenges, yet my favorite things about this project, was diving into the problem solving around interacting with the database.
Finding what data to pass to to the user interface for seemless interactions was difficult, but enjoyable. Conversing with peers and looking at issues together on multiple projects was key to the learning experience.  
This was also my first time utilizing Handlebars and I had a lot of fun expirementing with its use in styling this project.




Version 1
User Stories

As a user I want to be able to sign up with email, pw, pwc.
As a user I want to be able to sign in with email and pw
As a user I want to be able to change password
As a user I want to be able to sign out
As a user I want view all my plants
As a user I want add a new plant planet_species, nickname, and fact
As a user I want edit plant planet_species, nickname, and fact
As a user I want delete plant
Relationships

User has many Plants
Plant belongs to User

Plants Table

plant_species
nickname
fact
user_id

Version 2
Add column to Plant named image_url as string and let user add an image url to their Plant

On front end use image_url as the src for an <img> tag.

Version 3
Let users view a list of All Plants


## Technology Used ##

* JavaScript
* Handlebars
* jQuery
* API
* HTML
* SCSS (Sass)
* AJAX
* Bootstrap
