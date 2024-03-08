const path = require('path'); 
const express = require('express');

const app = express(); 

const PORT = 3000; 

if (process.env.NODE_ENV === 'development') {
  app.use(express.static(path.resolve(__dirname, '../src')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
}



app.listen(PORT, ()=> {
  console.log(`server listening on port ${PORT}: http://localhost:${PORT}/`); 
})

module.exports = app; 