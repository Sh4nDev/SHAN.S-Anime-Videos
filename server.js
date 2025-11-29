const express = require('express');
const videos = require('./Sh4n/videos.json');
const SHAN = express();

SHAN.use(express.json());

SHAN.get('/random-video', (req, res) => {
  const ShaN = cute[Math.floor(Math.random() * cute.length)];
  res.json({ 
    author: "♡︎ 𝗦𝗵𝗔𝗻 ♡︎",
    ShAn: ShaN,
  });
});
