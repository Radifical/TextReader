//require fetch


import fetch from 'cross-fetch';

fetch('TextReader\file.txt')
  .then(response => response.text())
  .then(data => {
    console.log(data); // logs the file's contents to the console
  });
