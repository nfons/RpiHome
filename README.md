Simple "Home" App meant to be run on a RPI 2. [![Build Status](https://travis-ci.org/lilnate22/RpiHome.svg?branch=master)](https://travis-ci.org/lilnate22/RpiHome)

This is more of a "kiosk" like application that I run at home. Hooked up to a spare TV, so that when I wake up I can see the day at a glance.


Requirements
============

* Node (npm)
* Gulp
* Bower


To Run (develop)
================

`npm install`

`bower install`

`gulp serve`


Production
==========

* Rasberry Pi 2 + Rasbian
* Install the dependencies : node, gulp, bower.
* Install nginx : `sudo apt-get install nginx`
* `gulp build`
* set nginx config to the newly created dist/ directory
* navigate to `http://localhost` in your browser
* Set to full screen


Sample (Demo)
=============
![Sample](http://imgur.com/3KIo3A9.jpg "Sample")


License
=======

Released under GPLv3
