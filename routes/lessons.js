const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const router = express.Router();

const lessons_url = 'https://ed.ted.com/lessons/';

router.get('/', async (req, res) => {
  axios(lessons_url)
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
      res.json(titles);
    })
    .catch(console.error);
});

router.get('/subjects', async (req, res) => {
  axios(lessons_url)
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
      res.json(genres);
    })
    .catch(console.error);
});

module.exports = router;
