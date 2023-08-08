# CS157a-Project
Our goal was to create a social media platform similar to that of instagram which is designed specifically for college students to connect with one another. The application is called CampusConnect. Similar to Twitter and other social media platforms, you’ll be able to follow other users and if they follow you back you will be considered friends. The overall application functionality of our platform is straightforward, users see posts from accounts they follow, and interacting with other posts via likes and comments simply acts as a count in the database. 

# Steps to Run
1. Clone the respository into IDE of your choice
2. Run NPM install and yarn
3. In the connect.js file located in /api/connect.js make sure to adjust the credentials so that the SQL connection is configured to your machine
4. Run the following SQL scripts in SQL workbench:
5. cd into the api folder then run yarn start (Console should output that the API is working and that the database is connected if the above steps are done correctly)
6. cd into the client2 and run yarn start (localhost:3000 should be up and running)
