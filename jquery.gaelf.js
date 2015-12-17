/*
 * Google Analytics Helper Plugin for jQuery
 *
 * @author sj
 * @link https://github.com/samejack/gaelf
 * @copyright Copyright 2015 SJ
 * @version 1.0.0
 * @license Apache License Version 2.0 (https://github.com/samejack/gaelf/blob/master/LICENSE)
 */
jQuery.fn.gaelf = function (command) {

  var logger = {
    error: function (message) {
      if (typeof(console) !== 'undefined' && typeof(console.error) !== 'undefined') {
        console.warn(message);
      }
    },
    debug: function (message) {
      if (typeof(console) !== 'undefined' && typeof(console.debug) !== 'undefined') {
        console.debug(message);
      }
    }
  };

  if (typeof(command) === 'undefined') {
    logger.error('type not defined.');
    return;
  }

  var configs = arguments;

  // create ga
  if (command === 'create') {

    if (typeof(window.ga) === 'undefined') {
      logger.debug('Load GA library.');
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    }

    logger.debug('Create GA.');
    window.ga.apply(window.ga, configs);

    return;
  }

  return this.each(function () {

    if (typeof(window.ga) !== 'function') {
      logger.error('GA not init.');
      return;
    }

    // send directly
    if (typeof(this.tagName) === 'undefined') {
      window.ga.apply(this.ga, configs);
      return;
    }

    if (command === 'send') {
      var gaParams = configs;

      // A Tag
      if (this.tagName === 'A') {
        logger.debug('Setup GA binding on A tag click.');

        var element = $(this);
        element.on('click touchstart', function (e) {

          // check ga was loaded
          if (window.ga.hasOwnProperty('loaded') && window.ga.loaded === true) {
            // ga callback
            window.ga(gaParams[0], gaParams[1], {
              hitCallback: function () {
                window.location.href = element.attr('href');
              },
              page: gaParams[2]
            });
            window.location.href = element.attr('href');
            e.preventDefault();
            return false;
          }

          return true;
        });
      }
    }

  });
};
