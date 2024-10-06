const apiKey = 'AIzaSyA1QpY_6WGbcVPGK0pAG6LP_8oYCfSmSgc';
const sheetId = '1osfB8Io4-xjkXiekGimIHjtwagCMx4jIEwlG4E1TPxY';
const range = 'Sheet1'; // Adjust range as needed

const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
