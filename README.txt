# Running backend
npm install
npm start

#deploying backend
zip up backend, log into aws console and upload to elastic beanstalk

# detach
Ctrl+a
Ctrl+d

#API endpoint url
http://api.almacampus.com/v1/


# Code walkthrough
app.js is the meat of the server
In the app directory, there are two subdirectories: models and routes
1) models
- Has our MongoDB schemas. See babyUser.js for simple example of a schema and user.js for a more sophisticated example
2) routes
- These are our controllers and endpoints for the server
- Naming convention: name it the same as its model i.e. for the babyUser endpoints, there is a babyUser.js model and a babyUser.js route

Dockerfile contains builder for node/mongo, docker-compose also spins up that and elastic

`docker-compose build`
`docker-compose up`
