const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();

const series_url = 'https://ed.ted.com/series';

axios(series_url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    let series = [];
    $('.gridCell').each(function(i, e) {
      series[i] = this.children;
    });
    console.log(series[0]);
  })
  .catch(console.error);
