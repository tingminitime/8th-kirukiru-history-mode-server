const history = require('connect-history-api-fallback');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || '8080';

const app = express();
app.use(express.static(__dirname + '/dist'));
app.use(history({
  rewrites: [
    {
      from: /^\/.*[js|css]$/,
      to: function (context) {
        return '/assets/';
      }
    },
    {
      from: /^\/.*$/,
      to: function (context) {
        return '/dist/';
      }
    },
  ]
}));

app.use(express.static(path.join(__dirname, 'dist')));
app.listen(PORT, console.log(`Server is running on PORT ${PORT} ...`));