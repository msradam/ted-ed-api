// ted-ed api

const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const url = 'https://ed.ted.com/lessons/';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    let genres = [];
    $('.tdd-lcard__sub', '.tdd-lcard__content').each(function(i, e) {
      genres[i] = this.children[0].data;
    });
    let titles = [];
    $('.tdd-lcard__title', '.tdd-lcard__content').each(function(i, e) {
      titles[i] = this.children[1].children[0].data;
    });
    console.log(titles);
  })
  .catch(console.error);
