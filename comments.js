// create web server
// create a route for /comments
// send a list of comments in JSON format

// 1. import express
const express = require('express');

// 2. create an instance of express
const app = express();

// 3. create a route
app.get('/comments', (req, res) => {
  res.json({
    comments: [
      { username: 'Alice', comment: 'I love apples' },
      { username: 'Bob', comment: 'I love oranges' },
    ]
  });
});

// 4. start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});