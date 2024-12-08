const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.json({
        message: 'Hello backend'
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
