const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Endpoint to handle adding a dish
app.post('/add-user', (req, res) => {
  const newUser = req.body;

  fs.readFile('user.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error reading file' });
      return;
    }

    let users = JSON.parse(data);
    users.push(newUser);

    fs.writeFile('user.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Error writing file' });
        return;
      }

      res.json({ success: true, message: 'Sign up successful!' });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
