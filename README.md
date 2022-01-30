# Social-Network-API
This weeks challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

![Screen Shot of routes in Insomnia](https://user-images.githubusercontent.com/90152576/151682384-92a6c578-0102-41fd-b6be-8b768e534ac8.png)

## Process of making this application

First I made the models for users and thoughts

Then the controllers and routes

After, got the CURD functions working 

Finally, tested and fixed the controllers and routes with insomnia
