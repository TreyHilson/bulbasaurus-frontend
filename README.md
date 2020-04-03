## Project Idea

What is your project idea?  How did you come up with it? Why? Who would use it?

```md
My idea is a resource for cool house plants. I came up with it brainstorming and going through things like pinterests for inpiration. I think that a lot of people enjoy the idea and practice of adding a piece of nature into their homes. Users would be people who want to begin keeping a log of plants of interest and costs. Perhaps some fun facts about the plan as well.
I also find in conversations about plants with other people I learn something new. That piece was important to me because I wanted certain users to feel like they had something to offer of value as well when adding to their resource.

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

User has many Plans
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
