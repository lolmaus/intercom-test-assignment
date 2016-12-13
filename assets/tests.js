'use strict';

define('intercom-test-assignment/tests/adapters/application.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - adapters/application.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/adapters/user.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - adapters/user.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - app.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/helpers/array.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/array.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('intercom-test-assignment/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/destroy-app.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/helpers/ember-cli-mocha-reporter', ['exports', 'intercom-test-assignment/tests/helpers/monkey-patch-mocha'], function (exports, _intercomTestAssignmentTestsHelpersMonkeyPatchMocha) {
    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    // apparently Sinon can mess with the Date constructor
    var OriginalDate = Date;

    function hasQueryParam(name) {
        var result = Url.queryString(name);
        return typeof result === 'string' || result;
    }

    var Reporter = (function () {
        function Reporter(runner, options) {
            _classCallCheck(this, Reporter);

            this.passes = 0;
            this.failures = 0;
            this.runner = runner;

            this.setupDOM();
            this.setupEvents(runner);
            this.setupBlanket();

            if (options && hasQueryParam('no_try_catch')) {
                options.allowUncaught = true;
                (0, _intercomTestAssignmentTestsHelpersMonkeyPatchMocha['default'])();
            }
        }

        _createClass(Reporter, [{
            key: 'setupDOM',
            value: function setupDOM() {
                var _this = this;

                var $rootNode = $('#mocha');

                if (!$rootNode) {
                    throw new Error('#mocha missing, ensure it is in your document');
                }

                $rootNode.append(template);

                $('#test-title').text(document.title).on('click', function (e) {
                    e.preventDefault();
                    if (Url.queryString("grep")) {
                        Url.updateSearchParam("grep");
                        window.location.reload();
                    }
                });

                this.setupCanvas();

                this.$stats = $('#mocha-stats');
                this.stack = [$('#mocha-report')];

                this.$hidePassed = this.$stats.find('#hide-passed');

                this.$hidePassed.attr('checked', /hide_passed/.test(window.location.hash)).on('change', function () {
                    return _this.updateHidePassed();
                });

                this.updateHidePassed();

                this.$coverage = this.$stats.find('#enable-coverage');
                this.$coverage.attr('checked', hasQueryParam('coverage')).on('change', function () {
                    return _this.updateCoverageEnabled();
                });

                this.updateCoverageEnabled();

                this.$noTryCatch = this.$stats.find('#no-try-catch');
                this.$noTryCatch.attr('checked', hasQueryParam('no_try_catch')).on('change', function () {
                    return _this.updateNoTryCatch();
                });

                this.updateNoTryCatch();
            }
        }, {
            key: 'setupEvents',
            value: function setupEvents(runner) {
                var _this2 = this;

                function handlerForEvent(event) {
                    // e.g., "suite end" => "onSuiteEnd"
                    return ('on ' + event).replace(/ [\w]/g, function (m) {
                        return m[1].toUpperCase();
                    });
                }

                var events = ['start', // execution of testing started
                'end', // execution of testing ended
                'suite', // execution of a test suite started
                'suite end', // execution of a test suite ended
                'test', // execution of a test started
                'test end', // execution of a test ended
                'hook', // execution of a hook started
                'hook end', // execution of a hook ended
                'pass', // execution of a test ended in pass
                'fail', // execution of a test ended in fail
                'pending'];
                events.forEach(function (event) {
                    var reporter = _this2;
                    runner.on(event, function () /* arguments */{
                        var handler = reporter[handlerForEvent(event)];
                        if (handler) {
                            handler.apply(reporter, arguments);
                        }
                    });
                });
            }
        }, {
            key: 'setupBlanket',
            value: function setupBlanket() {
                var _this3 = this;

                if (!window.blanket) {
                    $('#enable-coverage').parentsUntil('#mocha-stats', '.test-option').hide();
                    return;
                }
                var blanket = window.blanket;
                var origOnTestsDone = blanket.onTestsDone;

                blanket.onTestsDone = function () {
                    origOnTestsDone.apply(blanket);
                    _this3.onBlanketDone();
                };
            }
        }, {
            key: 'setupCanvas',
            value: function setupCanvas() {
                this.canvas = $('.mocha-progress canvas')[0];
                this.ctx = this.canvas.getContext('2d');
            }
        }, {
            key: 'updateDuration',
            value: function updateDuration() {
                var seconds = (new OriginalDate() - this.startedAt) / 1000;
                this.$stats.find('.duration .value').text(seconds.toFixed(2));
            }
        }, {
            key: 'updateProgress',
            value: function updateProgress() {
                try {
                    var width = this.canvas.clientWidth;

                    this.renderProgressRing(width);
                } catch (err) {
                    // don't fail if we can't render progress
                }
            }
        }, {
            key: 'renderProgressRing',
            value: function renderProgressRing(diameter) {
                var totalTests = this.passes + this.failures;
                var progress = totalTests / this.runner.total * 100 | 0;
                var percent = Math.min(progress, 100);
                var angle = Math.PI * 2 * (percent / 100);
                var halfSize = diameter / 2;
                var rad = halfSize - 1;
                var fontSize = 11;
                var ctx = this.ctx;

                var quarterCircle = 0.5 * Math.PI;

                ctx.font = fontSize + 'px helvetica, arial, sans-serif';

                ctx.clearRect(0, 0, diameter, diameter);

                // outer circle
                ctx.strokeStyle = '#9f9f9f';
                ctx.beginPath();
                ctx.arc(halfSize, halfSize, rad, -quarterCircle, angle - quarterCircle, false);
                ctx.stroke();

                // inner circle
                ctx.strokeStyle = '#eee';
                ctx.beginPath();
                ctx.arc(halfSize, halfSize, rad - 1, -quarterCircle, angle - quarterCircle, true);
                ctx.stroke();

                // text
                var text = (percent | 0) + '%';
                var textWidth = ctx.measureText(text).width;

                ctx.fillText(text, halfSize - textWidth / 2 + 1, halfSize + fontSize / 2 - 1);
            }
        }, {
            key: 'updateHidePassed',
            value: function updateHidePassed() {
                if (this.$stats.find('#hide-passed').is(':checked')) {
                    $('#mocha-report').addClass('hide-passed');
                    $('#blanket-main').addClass('hide-passed');
                    window.location.hash = '#hide_passed';
                } else {
                    $('#mocha-report').removeClass('hide-passed');
                    $('#blanket-main').removeClass('hide-passed');
                    window.location.hash = '#';
                }
            }
        }, {
            key: 'updateCoverageEnabled',
            value: function updateCoverageEnabled() {
                if (this.$stats.find('#enable-coverage').is(':checked')) {
                    if (!hasQueryParam('coverage')) {
                        Url.updateSearchParam("coverage", 'true');
                        Url.updateSearchParam("no_try_catch");
                        this.$noTryCatch.attr('checked', false);
                        window.location.reload();
                    }
                } else {
                    if (hasQueryParam('coverage')) {
                        Url.updateSearchParam("coverage");
                        window.location.reload();
                    }
                }
            }
        }, {
            key: 'updateNoTryCatch',
            value: function updateNoTryCatch() {
                if (this.$stats.find('#no-try-catch').is(':checked')) {
                    if (!hasQueryParam('no_try_catch')) {
                        Url.updateSearchParam("no_try_catch", 'true');
                        Url.updateSearchParam("coverage");
                        this.$coverage.attr('checked', false);
                        window.location.reload();
                    }
                } else {
                    if (hasQueryParam('no_try_catch')) {
                        Url.updateSearchParam("no_try_catch");
                        window.location.reload();
                    }
                }
            }
        }, {
            key: 'setMood',
            value: function setMood(mood) {
                this.$stats.removeClass(this.mood);

                this.mood = mood;
                this.$stats.addClass(mood);
                setFavicon(mood);
            }
        }, {
            key: 'onStart',
            value: function onStart() {
                this.startedAt = new OriginalDate();
            }
        }, {
            key: 'onEnd',
            value: function onEnd() {
                if (this.mood !== 'sad') {
                    this.setMood('happy');
                }

                groupDescribes('JSHint');
                groupDescribes('ESLint');
                groupDescribes('JSCS');
            }
        }, {
            key: 'onSuite',
            value: function onSuite(suite) {
                if (suite.root) {
                    return;
                }

                var title = suite.fullTitle();
                var $fragment = $('<li class="suite"><h1><a></a></h1><ul></ul></li>');

                $fragment.find('a').text(suite.title).attr('href', grepUrl(title));

                this.stack[0].append($fragment);
                this.stack.unshift($fragment.find('ul'));
            }
        }, {
            key: 'onSuiteEnd',
            value: function onSuiteEnd(suite) {
                if (suite.root) {
                    return;
                }

                var $ul = this.stack.shift();

                if ($ul.find('.fail').length > 0) {
                    $ul.parent().addClass('fail');
                } else {
                    $ul.parent().addClass('pass');
                }
            }
        }, {
            key: 'onTestEnd',
            value: function onTestEnd(test) {
                this.updateDuration();

                var $fragment = fragmentForTest(test);

                if (!this.stack[0]) {
                    var $report = $('#mocha-report');
                    $report.append('<li class="suite"><h1></h1><ul></ul></li>');
                    $report.find('h1').text('ORPHAN TESTS');
                    this.stack.unshift($report.find('ul'));
                }

                this.stack[0].append($fragment);

                this.updateProgress();
            }
        }, {
            key: 'onPass',
            value: function onPass() {
                this.passes++;
                this.$stats.find('.passes .value').text(this.passes);
            }
        }, {
            key: 'onFail',
            value: function onFail(test, err) {
                this.failures++;
                this.$stats.find('.failures .value').text(this.failures);
                this.setMood('sad');

                test.err = err;
                if (test.type === 'hook') {
                    // This is a bizarre misfeature in mocha, but apparently without
                    // the reporter feeding this back, you will never hear these
                    // hook failures. Things like the testem mocha adapter assume
                    // this behavior.
                    this.runner.emit('test end', test);
                }
            }
        }, {
            key: 'onBlanketDone',
            value: function onBlanketDone() {
                var $blanket = $('#blanket-main');
                var $title = $blanket.find('.bl-title > .bl-file');

                $title.text('Code Coverage');

                // fixme: horrendously ugly workaround for double-escaping happening in
                // bower_components/blanket/dist/{mocha,qunit}/blanket.js
                $blanket.find('.bl-source > div').contents().filter(function () {
                    return this.nodeType === 3;
                }).each(function (index, element) {
                    element.nodeValue = element.nodeValue.replace(/&dollar;/g, '$').replace(/&grave;/g, '`').replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');
                });

                this.updateHidePassed();
            }
        }]);

        return Reporter;
    })();

    exports['default'] = Reporter;

    function grepUrl(pattern) {
        var location = window.location;
        var search = location.search;

        if (search) {
            search = search.replace(/[?&]grep=[^&\s]*/g, '').replace(/^&/, '?');
        }

        var prefix = search ? search + '&' : '?';
        var locationPath = location.pathname;

        var encodedPattern = encodeURIComponent(pattern);

        return '' + locationPath + prefix + 'grep=' + encodedPattern;
    }

    function fragmentForTest(test) {
        var $fragment = $('<li class="test"><h2><span class="title"></h2></li>');

        $fragment.find('h2 .title').text(test.title);
        $fragment.addClass(speedOfTest(test));

        if (test.state === 'passed') {
            $fragment.addClass('pass');

            $fragment.find('h2').append('<span class="duration"></span>');
            $fragment.find('.duration').text(test.duration + 'ms');
        } else if (test.pending) {
            $fragment.addClass('pass').addClass('pending');
        } else {
            $fragment.addClass('fail');

            $fragment.append('<pre class="error"></pre>');
            $fragment.find('.error').text(errorSummaryForTest(test)).append('<div class="dump">Dump stack to console</div>');

            $fragment.find('.dump').on('click', function () {
                return console.log(test.err.stack);
            });
        }

        if (!test.pending) {
            (function () {
                var h2 = $fragment.find('h2');
                h2.append('<a class="replay" title="Replay">‣</a>');
                h2.find('.replay').attr('href', grepUrl(test.fullTitle()));

                var code = $('<pre><code></code></pre>');
                if (test.state === 'passed') {
                    code.css('display', 'none');
                }
                code.find('code').text(cleanCode(test.fn.toString()));
                $fragment.append(code);
                h2.on('click', function () {
                    return code.toggle();
                });
            })();
        }

        return $fragment;
    }

    function speedOfTest(test) {
        var slow = test.slow();
        var medium = slow / 2;

        if (test.duration > slow) {
            return 'slow';
        } else if (test.duration > medium) {
            return 'medium';
        }

        return 'fast';
    }

    function errorSummaryForTest(test) {
        var summary = test.err.stack || test.err.toString();

        if (summary.indexOf(test.err.message) === -1) {
            summary = test.err.message + '\n' + summary;
        }

        if (summary === '[object Error]') {
            summary = test.err.message;
        }

        if (!test.err.stack && test.err.sourceURL && test.err.line !== undefined) {
            summary += '\n(' + test.err.sourceURL + ':' + test.err.line + ')';
        }

        return summary;
    }

    function cleanCode(code) {
        code = code.replace(/\r\n?|[\n\u2028\u2029]/g, '\n').replace(/^\uFEFF/, '').replace(/^function *\(.*\) *{|\(.*\) *=> *{?/, '').replace(/\s+\}$/, '');

        var spaces = code.match(/^\n?( *)/)[1].length;
        var tabs = code.match(/^\n?(\t*)/)[1].length;
        var count = tabs ? tabs : spaces;
        var ws = tabs ? '\t' : ' ';

        var re = new RegExp('^\n?' + ws + '{' + count + '}', 'gm');

        code = code.replace(re, '');

        return code.trim();
    }

    // Original from <https://gist.github.com/timrwood/7754098>
    function setFavicon(mood) {
        var pngPrefix = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/';
        var redGraphic = pngPrefix + '9hAAAAH0lEQVQ4T2P8z8AAROQDxlEDGEbDgGE0DIBZaBikAwCl1B/x0/RuTAAAAABJRU5ErkJggg==';
        var greenGraphic = pngPrefix + '9hAAAAHklEQVQ4T2Nk+A+EFADGUQMYRsOAYTQMgHloGKQDAJXkH/HZpKBrAAAAAElFTkSuQmCC';

        var uri = mood === 'happy' ? greenGraphic : redGraphic;
        var links = $('link');

        // Remove existing favicons
        links.each(function (idx, link) {
            if (/\bicon\b/i.test(link.getAttribute('rel'))) {
                link.parentNode.removeChild(link);
            }
        });

        // Add new favicon
        var $link = $('<link type="image/x-icon" rel="icon">');
        $link.attr('href', uri);
        $('head').append($link);
    }

    function groupDescribes(linter) {
        var $linter = $('<li class="suite"><h1><a></a></h1><ul></ul></li>');
        $linter.find('a').text(linter).attr('href', grepUrl('{linter}'));

        var $suites = $('.suite:contains("' + linter + '")');

        $suites.each(function (idx, suite) {
            var $suite = $(suite);
            var suiteTitle = $suite.find('h1').text();

            var _suiteTitle$match = suiteTitle.match('^' + linter + ' [\\|-] (.*)$');

            var _suiteTitle$match2 = _slicedToArray(_suiteTitle$match, 2);

            var fileName = _suiteTitle$match2[1];

            var $test = $suite.find('.test');

            $test.find('.title').text(fileName);

            $test.find('pre:eq(1)').hide();

            $linter.find('ul').append($test);
            $suite.remove();
        });

        if ($linter.find('.test.fail').length > 0) {
            $linter.addClass('fail');
        } else {
            $linter.addClass('pass');
        }

        $('#mocha-report').append($linter);
    }

    // jscs:disable disallowVar
    var template = '<h1 id=\'test-title\'></h1>\n<ul id="mocha-stats">\n  <li class="test-option">\n    <label>\n      <input type="checkbox" id="enable-coverage"> Enable coverage\n    </label>\n  </li>\n  <li class="test-option">\n    <label>\n      <input type="checkbox" id="hide-passed"> Hide passed\n    </label>\n  </li>\n  <li class="test-option">\n    <label>\n      <input type="checkbox" id="no-try-catch"> No try/catch\n    </label>\n  </li>\n  <li class="passes">passes: <em class="value">0</em></li>\n  <li class="failures">failures: <em class="value">0</em></li>\n  <li class="duration">duration: <em class="value">0</em>s</li>\n  <li class="mocha-progress"><canvas width="40" height="40"></canvas></li>\n</ul>\n<ul id="mocha-report"></ul>';
    // jscs:enable disallowVar
});
/*
 * A Mocha reporter meant to be used with ember-cli-mocha and ember-cli-blanket
 *
 * Based on Edward Faulnker's better-mocha-html-reporter:
 * <https://github.com/ef4/better-mocha-html-reporter>
 *
 * With modifications from Elad Shahar:
 * <https://gist.github.com/SaladFork/15683b00388bfe1d1458>
 *
 * And Andrey Mikhaylov (lolmaus):
 * <https://gist.github.com/lolmaus/8b5e84762c85142e43c2>
 *
 * Made into an Ember CLI addon and tweaked by Michael Melvin (mmelvin0):
 * <https://github.com/mmelvin0/ember-cli-mocha-reporter>
 */

/* global $, Date, Url */
define('intercom-test-assignment/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'intercom-test-assignment/tests/helpers/start-app', 'intercom-test-assignment/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _intercomTestAssignmentTestsHelpersStartApp, _intercomTestAssignmentTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _intercomTestAssignmentTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _intercomTestAssignmentTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('intercom-test-assignment/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/module-for-acceptance.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/helpers/monkey-patch-mocha', ['exports'], function (exports) {
    /* global Mocha, mocha, chai */

    exports['default'] = function () {
        Mocha.Runnable.prototype.run = function (fn) {
            var self = this;
            var start = new Date();
            var ctx = this.ctx;
            var finished;
            var emitted;

            // Sometimes the ctx exists, but it is not runnable
            if (ctx && ctx.runnable) {
                ctx.runnable(this);
            }

            // called multiple times
            function multiple(err) {
                if (emitted) {
                    return;
                }
                emitted = true;
                self.emit('error', err || new Error('done() called multiple times; stacktrace may be inaccurate'));
            }

            // finished
            function done(err) {
                var ms = self.timeout();
                if (self.timedOut) {
                    return;
                }
                if (finished) {
                    return multiple(err || self._trace);
                }

                self.clearTimeout();
                self.duration = new Date() - start;
                finished = true;
                if (!err && self.duration > ms && self._enableTimeouts) {
                    err = new Error('timeout of ' + ms + 'ms exceeded. Ensure the done() callback is being called in this test.');
                }
                fn(err);
            }

            // for .resetTimeout()
            this.callback = done;

            // explicit async with `done` argument
            if (this.async) {
                this.resetTimeout();

                if (this.allowUncaught) {
                    return callFnAsync(this.fn);
                }
                try {
                    callFnAsync(this.fn);
                } catch (err) {
                    done(Mocha.utils.getError(err));
                }
                return;
            }

            if (this.allowUncaught) {
                callFn(this.fn);
                done();
                return;
            }

            // sync or promise-returning
            try {
                if (this.pending) {
                    done();
                } else {
                    callFn(this.fn);
                }
            } catch (err) {
                done(Mocha.utils.getError(err));
            }

            function callFn(fn) {
                var result = fn.call(ctx);
                if (result && typeof result.then === 'function') {
                    self.resetTimeout();
                    result.then(function () {
                        done();
                        // Return null so libraries like bluebird do not warn about
                        // subsequently constructed Promises.
                        return null;
                    }, function (reason) {
                        done(reason || new Error('Promise rejected with no or falsy reason'));
                    });
                } else {
                    if (self.asyncOnly) {
                        return done(new Error('--async-only option in use without declaring `done()` or returning a promise'));
                    }

                    done();
                }
            }

            function callFnAsync(fn) {
                fn.call(ctx, function (err) {
                    if (err instanceof Error || Object.prototype.toString.call(err) === '[object Error]') {
                        if (mocha.options.allowUncaught && !(err instanceof chai.AssertionError)) {
                            throw err;
                        }
                        return done(err);
                    }
                    if (err) {
                        if (Object.prototype.toString.call(err) === '[object Object]') {
                            return done(new Error('done() invoked with non-Error: ' + JSON.stringify(err)));
                        }
                        return done(new Error('done() invoked with non-Error: ' + err));
                    }
                    done();
                });
            }
        };
    };
});
define('intercom-test-assignment/tests/helpers/multiply.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/multiply.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/helpers/page-object/component', ['exports', 'intercom-test-assignment/tests/page-object'], function (exports, _intercomTestAssignmentTestsPageObject) {
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  exports.jquery = jquery;
  exports['default'] = component;

  // A helper to leverage jQuery for page component queries

  function jquery(callback) {
    var errorIfMissing = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    return {
      isDescriptor: true,

      get: function get() {
        var $el = (0, _intercomTestAssignmentTestsPageObject.findElement)(this);

        if (errorIfMissing && !$el.length) {
          throw new Error('Element ' + this.scope + ' not found.');
        }

        return callback($el);
      }
    };
  }

  function component() {
    var scope = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var descriptor = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // If a descriptor is passed as the first arg
    if (scope === Object(scope)) {
      descriptor = scope;
      scope = null;
    }

    return _extends({}, scope ? { scope: scope, itemScope: scope } : {}, { // inject the scope only if it was provided

      blur: jquery(function ($el) {
        return $el.blur();
      }),
      checked: jquery(function ($el) {
        return $el.is(':checked');
      }),
      click: (0, _intercomTestAssignmentTestsPageObject.clickable)(),
      disabled: jquery(function ($el) {
        return $el.is('[disabled]');
      }),
      exists: jquery(function ($el) {
        return $el.length > 0;
      }, false), // false: don't spit an error if element isn't found
      fill: (0, _intercomTestAssignmentTestsPageObject.fillable)(),
      focus: jquery(function ($el) {
        return $el.focus();
      }),
      index: jquery(function ($el) {
        return $el.index();
      }),
      hasClass: jquery(function ($el) {
        return function (className) {
          return $el.hasClass(className);
        };
      }),
      isVisible: (0, _intercomTestAssignmentTestsPageObject.isVisible)(),
      text: (0, _intercomTestAssignmentTestsPageObject.text)(),
      value: (0, _intercomTestAssignmentTestsPageObject.value)()

    }, descriptor);
  }
});
define('intercom-test-assignment/tests/helpers/page-object/component.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/page-object/component.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/helpers/page-object/select', ['exports', 'intercom-test-assignment/tests/helpers/page-object/component', 'ember-cli-page-object'], function (exports, _intercomTestAssignmentTestsHelpersPageObjectComponent, _emberCliPageObject) {
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  exports['default'] = function () {
    var scope = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var descriptor = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    return (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])(scope, _extends({
      options: (0, _emberCliPageObject.collection)({
        itemScope: 'option',
        item: (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])()
      })
    }, descriptor));
  };
});
define('intercom-test-assignment/tests/helpers/page-object/select.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/page-object/select.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/helpers/resolver', ['exports', 'intercom-test-assignment/resolver', 'intercom-test-assignment/config/environment'], function (exports, _intercomTestAssignmentResolver, _intercomTestAssignmentConfigEnvironment) {

  var resolver = _intercomTestAssignmentResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _intercomTestAssignmentConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _intercomTestAssignmentConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('intercom-test-assignment/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/resolver.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/helpers/round.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/round.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/helpers/start-app', ['exports', 'ember', 'intercom-test-assignment/app', 'intercom-test-assignment/config/environment'], function (exports, _ember, _intercomTestAssignmentApp, _intercomTestAssignmentConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _intercomTestAssignmentConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _intercomTestAssignmentApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('intercom-test-assignment/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - helpers/start-app.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/macros/to-number.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - macros/to-number.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/models/city.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/city.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/models/user-city-junction.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/user-city-junction.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/models/user.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - models/user.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/page-object', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  exports.attribute = _emberCliPageObject.attribute;
  exports.clickOnText = _emberCliPageObject.clickOnText;
  exports.clickable = _emberCliPageObject.clickable;
  exports.collection = _emberCliPageObject.collection;
  exports.contains = _emberCliPageObject.contains;
  exports.count = _emberCliPageObject.count;
  exports.create = _emberCliPageObject.create;
  exports.fillable = _emberCliPageObject.fillable;
  exports.selectable = _emberCliPageObject.fillable;
  exports.hasClass = _emberCliPageObject.hasClass;
  exports.is = _emberCliPageObject.is;
  exports.isHidden = _emberCliPageObject.isHidden;
  exports.isVisible = _emberCliPageObject.isVisible;
  exports.notHasClass = _emberCliPageObject.notHasClass;
  exports.property = _emberCliPageObject.property;
  exports.text = _emberCliPageObject.text;
  exports.triggerable = _emberCliPageObject.triggerable;
  exports.value = _emberCliPageObject.value;
  exports.visitable = _emberCliPageObject.visitable;
  exports['default'] = {
    attribute: _emberCliPageObject.attribute,
    clickOnText: _emberCliPageObject.clickOnText,
    clickable: _emberCliPageObject.clickable,
    collection: _emberCliPageObject.collection,
    contains: _emberCliPageObject.contains,
    count: _emberCliPageObject.count,
    create: _emberCliPageObject.create,
    fillable: _emberCliPageObject.fillable,
    hasClass: _emberCliPageObject.hasClass,
    is: _emberCliPageObject.is,
    isHidden: _emberCliPageObject.isHidden,
    isVisible: _emberCliPageObject.isVisible,
    notHasClass: _emberCliPageObject.notHasClass,
    property: _emberCliPageObject.property,
    selectable: _emberCliPageObject.fillable,
    text: _emberCliPageObject.text,
    triggerable: _emberCliPageObject.triggerable,
    value: _emberCliPageObject.value,
    visitable: _emberCliPageObject.visitable
  };
  Object.defineProperty(exports, 'buildSelector', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.buildSelector;
    }
  });
  Object.defineProperty(exports, 'findElementWithAssert', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.findElementWithAssert;
    }
  });
  Object.defineProperty(exports, 'findElement', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.findElement;
    }
  });
  Object.defineProperty(exports, 'getContext', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.getContext;
    }
  });
  Object.defineProperty(exports, 'fullScope', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.fullScope;
    }
  });
});
define('intercom-test-assignment/tests/pods/city/acceptance-test', ['exports', 'mocha', 'chai', 'intercom-test-assignment/tests/helpers/start-app', 'intercom-test-assignment/tests/helpers/destroy-app', 'intercom-test-assignment/tests/pods/city/page-object', 'intercom-test-assignment/mirage/fixtures/users', 'intercom-test-assignment/mirage/fixtures/cities', 'npm:lodash'], function (exports, _mocha, _chai, _intercomTestAssignmentTestsHelpersStartApp, _intercomTestAssignmentTestsHelpersDestroyApp, _intercomTestAssignmentTestsPodsCityPageObject, _intercomTestAssignmentMirageFixturesUsers, _intercomTestAssignmentMirageFixturesCities, _npmLodash) {

  var m = undefined;

  (0, _mocha.describe)('Acceptance | user list', function () {
    var application = undefined;

    (0, _mocha.beforeEach)(function () {
      application = (0, _intercomTestAssignmentTestsHelpersStartApp['default'])();
    });

    (0, _mocha.afterEach)(function () {
      (0, _intercomTestAssignmentTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('should work', function callee$1$0() {
      var city, newCity;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            this.timeout(10000);

            context$2$0.next = 3;
            return regeneratorRuntime.awrap(_intercomTestAssignmentTestsPodsCityPageObject['default'].visit());

          case 3:

            m = "Should redirect to Dublin";
            (0, _chai.expect)(currentURL(), m).equal('/dublin');

            m = "should contain the user list";
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsCityPageObject['default'].userList.isVisible, m)['true'];

            m = 'the user list should contain ' + _intercomTestAssignmentMirageFixturesUsers.usersFixtureCount + ' items';
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsCityPageObject['default'].userList.users().count, m).equal(_intercomTestAssignmentMirageFixturesUsers.usersFixtureCount);

            _npmLodash['default'].times(_intercomTestAssignmentMirageFixturesUsers.usersFixtureCount, function (i) {
              var user = _intercomTestAssignmentTestsPodsCityPageObject['default'].userList.users(i);

              m = 'user ' + i + ' should have name';
              (0, _chai.expect)(user.name.text.length, m).ok;

              m = 'user ' + i + ' should have latitude';
              (0, _chai.expect)(user.latitude.text, m).match(/-?\d\d?\.?\d*/);

              m = 'user ' + i + ' should have longitude';
              (0, _chai.expect)(user.longitude.text, m).match(/-?\d\d?\.?\d*/);

              m = 'user ' + i + ' should have distance';
              (0, _chai.expect)(user.distance.text, m).match(/\d+\.?\d?\d? km/);

              var distance = parseInt(user.distance.text.substr(/\d+\.?\d?\d?/), 10);
              if (distance <= 100) {
                m = 'user ' + i + ' should have class -inRange';
                (0, _chai.expect)(user.hasClass('-inRange'), m)['true'];
              } else {
                m = 'user ' + i + ' should not have class -inRange';
                (0, _chai.expect)(user.hasClass('-inRange'), m)['false'];
              }

              if (!i) return;

              m = 'id of user ' + i + ' should be larger than id of user ' + (i - 1);
              (0, _chai.expect)(parseInt(user.id.text, 10), m).gt(parseInt(_intercomTestAssignmentTestsPodsCityPageObject['default'].userList.users(i - 1).id.text, 10));
            });

            m = "Should contain the distance slider";
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsCityPageObject['default'].distance.slider.isVisible, m)['true'];

            m = "The distance label should initially be 100km";
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsCityPageObject['default'].distance.label.text, m).equal('100 km');

            // distances.forEach((distance, i) => {
            //   const user = IndexPage.userList.users(i)
            // })

            m = "should contain the cities chooser";
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsCityPageObject['default'].citiesChooser.isVisible, m)['true'];

            m = 'the cities chooser should contain ' + _intercomTestAssignmentMirageFixturesCities['default'].data.length + ' cities';
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsCityPageObject['default'].citiesChooser.select.options().count, m).equal(_intercomTestAssignmentMirageFixturesCities['default'].data.length);

            _intercomTestAssignmentMirageFixturesCities['default'].data.forEach(function (_ref, i) {
              var id = _ref.id;
              var name = _ref.attributes.name;

              var city = _intercomTestAssignmentTestsPodsCityPageObject['default'].citiesChooser.select.options(i);

              m = 'City ' + i + ' id';
              (0, _chai.expect)(city.value, m).equal(id);

              m = 'City ' + i + ' name';
              (0, _chai.expect)(city.text, m).equal(name);
            });

            city = _intercomTestAssignmentMirageFixturesCities['default'].data[0];

            m = 'City select value initial';
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsCityPageObject['default'].citiesChooser.select.value, m).equal(city.id);

            // m = `City name initial`
            // expect(IndexPage.citiesChooser.name.text, m).equal(city.attributes.name)

            m = 'City latitude initial';
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsCityPageObject['default'].citiesChooser.latitude.text, m).equal('' + city.attributes.latitude);

            m = 'City longitude initial';
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsCityPageObject['default'].citiesChooser.longitude.text, m).equal('' + city.attributes.longitude);

            newCity = _intercomTestAssignmentMirageFixturesCities['default'].data[1];
            context$2$0.next = 29;
            return regeneratorRuntime.awrap(_intercomTestAssignmentTestsPodsCityPageObject['default'].citiesChooser.select.fill(newCity.id));

          case 29:

            m = 'City select should change id after selecting the second city';
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsCityPageObject['default'].citiesChooser.select.value, m).equal(newCity.id);

            // m = `City name should be updated after selecting the second city`
            // expect(IndexPage.citiesChooser.name.text, m).equal(newCity.attributes.name)

            m = 'City latitude should be updated after selecting the second city';
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsCityPageObject['default'].citiesChooser.latitude.text, m).equal('' + newCity.attributes.latitude);

            m = 'City longitude should be updated after selecting the second city';
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsCityPageObject['default'].citiesChooser.longitude.text, m).equal('' + newCity.attributes.longitude);

            _npmLodash['default'].times(_intercomTestAssignmentMirageFixturesUsers.usersFixtureCount, function (i) {
              var user = _intercomTestAssignmentTestsPodsCityPageObject['default'].userList.users(i);
              var distance = parseInt(user.distance.text.substr(/\d+\.?\d?\d?/), 10);

              if (distance <= 100) {
                m = 'user ' + i + ' should have class -inRange after switching city';
                (0, _chai.expect)(user.hasClass('-inRange'), m)['true'];
              } else {
                m = 'user ' + i + ' should not have class -inRange after switching city';
                (0, _chai.expect)(user.hasClass('-inRange'), m)['false'];
              }
            });

            context$2$0.next = 38;
            return regeneratorRuntime.awrap(_intercomTestAssignmentTestsPodsCityPageObject['default'].distance.slider.fill(200));

          case 38:

            _npmLodash['default'].times(_intercomTestAssignmentMirageFixturesUsers.usersFixtureCount, function (i) {
              var user = _intercomTestAssignmentTestsPodsCityPageObject['default'].userList.users(i);
              var distance = parseInt(user.distance.text.substr(/\d+\.?\d?\d?/), 10);

              if (distance <= 200) {
                m = 'user ' + i + ' should have class -inRange after switching distance';
                (0, _chai.expect)(user.hasClass('-inRange'), m)['true'];
              } else {
                m = 'user ' + i + ' should not have class -inRange after switching distance';
                (0, _chai.expect)(user.hasClass('-inRange'), m)['false'];
              }
            });

          case 39:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });
  });
});
define('intercom-test-assignment/tests/pods/city/acceptance-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/city/acceptance-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/city/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/city/controller.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/city/page-object', ['exports', 'ember-cli-page-object', 'intercom-test-assignment/tests/helpers/page-object/component', 'intercom-test-assignment/tests/pods/components/cities-chooser/page-object', 'intercom-test-assignment/tests/pods/components/user-list/page-object'], function (exports, _emberCliPageObject, _intercomTestAssignmentTestsHelpersPageObjectComponent, _intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject, _intercomTestAssignmentTestsPodsComponentsUserListPageObject) {
  exports['default'] = (0, _emberCliPageObject.create)({
    visit: (0, _emberCliPageObject.visitable)('/'),

    citiesChooser: _intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject['default'],
    userList: _intercomTestAssignmentTestsPodsComponentsUserListPageObject['default'],

    distance: {
      slider: (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.route-city-distance-slider'),
      label: (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.route-city-distance-label')
    }
  });
});
define('intercom-test-assignment/tests/pods/city/page-object.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/city/page-object.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/city/route-test', ['exports', 'chai', 'ember-mocha', 'intercom-test-assignment/initializers/ember-cli-mirage', 'rsvp', 'intercom-test-assignment/models/user', 'intercom-test-assignment/models/city', 'intercom-test-assignment/models/user-city-junction', 'intercom-test-assignment/mirage/fixtures/users', 'intercom-test-assignment/mirage/fixtures/cities', 'sinon'], function (exports, _chai, _emberMocha, _intercomTestAssignmentInitializersEmberCliMirage, _rsvp, _intercomTestAssignmentModelsUser, _intercomTestAssignmentModelsCity, _intercomTestAssignmentModelsUserCityJunction, _intercomTestAssignmentMirageFixturesUsers, _intercomTestAssignmentMirageFixturesCities, _sinon) {

  var m = undefined;

  (0, _emberMocha.describeModule)('route:city', 'Unit | Route | city', {
    // Specify the other units that are required for this test.
    needs: ['adapter:application', 'serializer:application', 'model:city', 'model:user-city-junction', 'model:user', 'adapter:user', 'serializer:user'],

    beforeEach: function beforeEach() {
      this.server = (0, _intercomTestAssignmentInitializersEmberCliMirage.startMirage)();
    },

    afterEach: function afterEach() {
      this.server.shutdown();
    }
  }, function () {

    (0, _emberMocha.it)('exists', function () {
      var route = this.subject();
      (0, _chai.expect)(route).to.be.ok;
    });

    (0, _emberMocha.it)("`model` should resolve to a hash with records", function callee$1$0() {
      var route, modelPromise, model, users, cities, junctions;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            route = this.subject();
            modelPromise = route.model({ cityId: 'dublin' });

            m = "Should return an instance of RSVP.Promise";
            (0, _chai.expect)(modelPromise, m)['instanceof'](_rsvp['default'].Promise);

            context$2$0.next = 6;
            return regeneratorRuntime.awrap(modelPromise);

          case 6:
            model = context$2$0.sent;

            m = "Promise should resolve into a hash";
            (0, _chai.expect)(model, m).a('object');

            m = 'Hash should contain users';
            (0, _chai.expect)(model.users, m).ok;

            users = model.users.toArray();

            m = 'Hash should contain ' + _intercomTestAssignmentMirageFixturesUsers.usersFixtureCount + ' users';
            (0, _chai.expect)(users, m).length(_intercomTestAssignmentMirageFixturesUsers.usersFixtureCount);

            users.forEach(function (user) {
              m = 'User with id ' + user.id + ' should be an instance of the User model';
              (0, _chai.expect)(user instanceof _intercomTestAssignmentModelsUser['default'], m)['true'];
            });

            m = 'Hash should contain cities';
            (0, _chai.expect)(model.cities, m).ok;

            cities = model.cities.toArray();

            m = 'Hash should contain ' + _intercomTestAssignmentMirageFixturesCities['default'].data.length + ' cities';
            (0, _chai.expect)(cities, m).length(_intercomTestAssignmentMirageFixturesCities['default'].data.length);

            m = "Each city should be an instance of the City model";
            cities.forEach(function (city) {
              (0, _chai.expect)(city instanceof _intercomTestAssignmentModelsCity['default'], m)['true'];
            });

            m = 'Hash should contain a current city';
            (0, _chai.expect)(model.currentCity instanceof _intercomTestAssignmentModelsCity['default'], m)['true'];

            m = 'Current city should be Dublin (by id)';
            (0, _chai.expect)(model.currentCity.get('id'), m).equal('dublin');

            m = 'Current city should be Dublin (by name)';
            (0, _chai.expect)(model.currentCity.get('name'), m).equal('Dublin');

            m = 'Hash should contain junctions';
            (0, _chai.expect)(model.userCityJunctions, m).ok;

            junctions = model.userCityJunctions.toArray();

            m = 'Hash should contain ' + _intercomTestAssignmentMirageFixturesUsers.usersFixtureCount + ' junctions';
            (0, _chai.expect)(junctions, m).length(_intercomTestAssignmentMirageFixturesUsers.usersFixtureCount);

            context$2$0.next = 35;
            return regeneratorRuntime.awrap(junctions.forEach(function callee$2$0(junction) {
              var city, user;
              return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                  case 0:
                    m = "Each junction should be an instance of the UserCityJunction model";
                    (0, _chai.expect)(junction instanceof _intercomTestAssignmentModelsUserCityJunction['default'], m)['true'];

                    m = "Each junction should have a city";
                    context$3$0.next = 5;
                    return regeneratorRuntime.awrap(junction.get('city'));

                  case 5:
                    city = context$3$0.sent;

                    (0, _chai.expect)(city instanceof _intercomTestAssignmentModelsCity['default'], m)['true'];

                    m = "Each junction should have a user";
                    context$3$0.next = 10;
                    return regeneratorRuntime.awrap(junction.get('user'));

                  case 10:
                    user = context$3$0.sent;

                    (0, _chai.expect)(user instanceof _intercomTestAssignmentModelsUser['default'], m)['true'];

                  case 12:
                  case 'end':
                    return context$3$0.stop();
                }
              }, null, this);
            }));

          case 35:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });

    (0, _emberMocha.it)("`_populateJunctions` should call store.push with JSONAPI payload and return the result", function () {
      var store = {
        push: _sinon['default'].stub().returns(42)
      };

      var route = this.subject({ store: store });

      var arg = {
        currentCity: { id: 'togliatti' },
        users: [{ id: 'foo' }, { id: 'bar' }]
      };

      var expectedPayload = {
        data: [{
          id: 'foo-togliatti',
          type: 'user-city-junction',
          relationships: {
            user: { data: { id: 'foo', type: 'user' } },
            city: { data: { id: 'togliatti', type: 'city' } }
          }
        }, {
          id: 'bar-togliatti',
          type: 'user-city-junction',
          relationships: {
            user: { data: { id: 'bar', type: 'user' } },
            city: { data: { id: 'togliatti', type: 'city' } }
          }
        }]
      };

      var result = route._populateJunctions(arg);

      m = "Should call store.push once";
      (0, _chai.expect)(store.push.calledOnce, m)['true'];

      m = 'Should call store.push with JSONAPI payload';
      (0, _chai.expect)(store.push.args[0][0], m).eql(expectedPayload);

      m = "Should return what store.push returns";
      (0, _chai.expect)(result, m).equal(42);
    });
  });
});
define('intercom-test-assignment/tests/pods/city/route-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/city/route-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/city/route.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/city/route.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/components/cities-chooser/component.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/components/cities-chooser/component.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/components/cities-chooser/integration-test', ['exports', 'chai', 'mocha', 'ember-mocha', 'intercom-test-assignment/tests/pods/components/cities-chooser/page-object', 'sinon'], function (exports, _chai, _mocha, _emberMocha, _intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject, _sinon) {

  var m = undefined;

  (0, _mocha.describe)('Integration | Component | cities chooser', function () {

    (0, _emberMocha.setupComponentTest)('component:cities-chooser', {
      integration: true
    });

    (0, _mocha.beforeEach)(function () {
      _intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject.citiesChooser.setContext(this);
    });

    (0, _mocha.afterEach)(function () {
      _intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject.citiesChooser.removeContext();
    });

    (0, _mocha.it)("should work", function () {
      var _this = this;

      var cities = [{ id: '1', name: "Foo", latitude: 123, longitude: 456 }, { id: '2', name: "Bar", latitude: 111, longitude: 222 }];

      var changeCityAction = _sinon['default'].spy(function () {
        _this.set('currentCity', cities[1]);
      });

      this.setProperties({
        cities: cities,
        currentCity: cities[0],
        changeCityAction: changeCityAction
      });

      _intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject.citiesChooser.render(Ember.HTMLBars.template({
        'id': 'XHlF3JOr',
        'block': '{"statements":[["append",["helper",["cities-chooser"],null,[["cities","currentCity","changeCityAction"],[["get",["cities"]],["get",["currentCity"]],["helper",["action"],[["get",[null]],["get",["changeCityAction"]]],null]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));

      m = 'Select should be visible';
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject.citiesChooser.select.isVisible, m)['true'];

      m = 'City select value initial';
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject.citiesChooser.select.value, m).equal(cities[0].id);

      // m = `City name initial`
      // expect(citiesChooser.name.text, m).equal(cities[0].name)

      m = 'City latitude initial';
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject.citiesChooser.latitude.text, m).equal('' + cities[0].latitude);

      m = 'City longitude initial';
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject.citiesChooser.longitude.text, m).equal('' + cities[0].longitude);

      _intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject.citiesChooser.select.fill(cities[1].id);

      m = "Action should be called once";
      (0, _chai.expect)(changeCityAction.calledOnce, m)['true'];

      m = "Action should be called with second city's id";
      (0, _chai.expect)(changeCityAction.calledWith(cities[1].id), m)['true'];

      m = 'City select value after selection';
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject.citiesChooser.select.value, m).equal(cities[1].id);

      // m = `City name after selection`
      // expect(citiesChooser.name.text, m).equal(cities[1].name)

      m = 'City latitude after selection';
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject.citiesChooser.latitude.text, m).equal('' + cities[1].latitude);

      m = 'City longitude after selection';
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsCitiesChooserPageObject.citiesChooser.longitude.text, m).equal('' + cities[1].longitude);
    });
  });
});
define('intercom-test-assignment/tests/pods/components/cities-chooser/integration-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/components/cities-chooser/integration-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/components/cities-chooser/page-object', ['exports', 'ember-cli-page-object', 'intercom-test-assignment/tests/helpers/page-object/component', 'intercom-test-assignment/tests/helpers/page-object/select'], function (exports, _emberCliPageObject, _intercomTestAssignmentTestsHelpersPageObjectComponent, _intercomTestAssignmentTestsHelpersPageObjectSelect) {

  var obj = (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.citiesChooser', {
    select: (0, _intercomTestAssignmentTestsHelpersPageObjectSelect['default'])('.citiesChooser-select'),
    name: (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.citiesChooser-name'),
    latitude: (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.citiesChooser-latitude'),
    longitude: (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.citiesChooser-longitude')
  });

  exports['default'] = obj;
  var citiesChooser = (0, _emberCliPageObject.create)(obj);
  exports.citiesChooser = citiesChooser;
});
/*collection, */
define('intercom-test-assignment/tests/pods/components/cities-chooser/page-object.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/components/cities-chooser/page-object.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/components/hero-header/component.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/components/hero-header/component.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/components/user-list-item/component.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/components/user-list-item/component.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/components/user-list-item/integration-test', ['exports', 'chai', 'mocha', 'ember-mocha', 'intercom-test-assignment/tests/pods/components/user-list-item/page-object'], function (exports, _chai, _mocha, _emberMocha, _intercomTestAssignmentTestsPodsComponentsUserListItemPageObject) {

  var m = undefined;

  (0, _mocha.describe)('Integration | Component | user list item', function () {

    (0, _emberMocha.setupComponentTest)('component:user-list-item', {
      integration: true
    });

    (0, _mocha.beforeEach)(function () {
      _intercomTestAssignmentTestsPodsComponentsUserListItemPageObject.userListItem.setContext(this);
    });

    (0, _mocha.afterEach)(function () {
      _intercomTestAssignmentTestsPodsComponentsUserListItemPageObject.userListItem.removeContext();
    });

    (0, _mocha.it)("should display fields", function () {
      this.set('user', {
        id: '1',
        name: 'Foo',
        latitude: 3,
        longitude: -2,
        distanceKm: 300.12345
      });

      _intercomTestAssignmentTestsPodsComponentsUserListItemPageObject.userListItem.render(Ember.HTMLBars.template({
        'id': '0ruYMJLY',
        'block': '{"statements":[["append",["helper",["user-list-item"],null,[["user"],[["get",["user"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));

      m = "Name";
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListItemPageObject.userListItem.name.text, m).equal('Foo');

      m = "Latitude";
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListItemPageObject.userListItem.latitude.text, m).equal('3');

      m = "Longitude";
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListItemPageObject.userListItem.longitude.text, m).equal('-2');

      m = "Distance";
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListItemPageObject.userListItem.distance.text, m).equal('300.12 km');
    });

    (0, _mocha.it)("should have distance limit class", function () {
      this.setProperties({
        user: { distanceKm: 300 },
        distanceLimitKm: 500
      });

      _intercomTestAssignmentTestsPodsComponentsUserListItemPageObject.userListItem.render(Ember.HTMLBars.template({
        'id': 'sUODWE8p',
        'block': '{"statements":[["append",["helper",["user-list-item"],null,[["user","distanceLimitKm"],[["get",["user"]],["get",["distanceLimitKm"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));

      m = "should initially have class -inRange";
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListItemPageObject.userListItem.hasClass('-inRange'), m)['true'];

      this.set('distanceLimitKm', 100);

      m = "should have class -inRange after limit update";
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListItemPageObject.userListItem.hasClass('-inRange'), m)['false'];
    });
  });
});
define('intercom-test-assignment/tests/pods/components/user-list-item/integration-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/components/user-list-item/integration-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/components/user-list-item/page-object', ['exports', 'ember-cli-page-object', 'intercom-test-assignment/tests/helpers/page-object/component'], function (exports, _emberCliPageObject, _intercomTestAssignmentTestsHelpersPageObjectComponent) {

  var obj = (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.userListItem', {
    id: (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.userListItem-element._id        .userListItem-element-value'),
    name: (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.userListItem-element._name      .userListItem-element-value'),
    latitude: (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.userListItem-element._latitude  .userListItem-element-value'),
    longitude: (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.userListItem-element._longitude .userListItem-element-value'),
    distance: (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.userListItem-element._distance  .userListItem-element-value')
  });

  exports['default'] = obj;
  var userListItem = (0, _emberCliPageObject.create)(obj);
  exports.userListItem = userListItem;
});
/*collection, */
define('intercom-test-assignment/tests/pods/components/user-list-item/page-object.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/components/user-list-item/page-object.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/components/user-list/component.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/components/user-list/component.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/components/user-list/integration-test', ['exports', 'chai', 'mocha', 'ember-mocha', 'intercom-test-assignment/tests/pods/components/user-list/page-object'], function (exports, _chai, _mocha, _emberMocha, _intercomTestAssignmentTestsPodsComponentsUserListPageObject) {

  var m = undefined;

  (0, _mocha.describe)('Integration | Component | user list', function () {

    (0, _emberMocha.setupComponentTest)('component:user-list', {
      integration: true
    });

    (0, _mocha.beforeEach)(function () {
      _intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.setContext(this);
    });

    (0, _mocha.afterEach)(function () {
      _intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.removeContext();
    });

    (0, _mocha.it)("should display two users, empty state hidden", function callee$1$0() {
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            this.timeout(999999999);

            this.setProperties({
              users: [{ id: '1', name: "Foo", distanceKm: 100 }, { id: '2', name: "Bar", distanceKm: 300 }],
              distanceLimitKm: 200
            });

            _intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.render(Ember.HTMLBars.template({
              'id': 'mEd/ZJ+y',
              'block': '{"statements":[["append",["helper",["user-list"],null,[["users","distanceLimitKm"],[["get",["users"]],["get",["distanceLimitKm"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
              'meta': {}
            }));

            m = "There should be two users";
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.users().count).equal(2);

            m = "The first user should not be empty";
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.users(0).hasClass('_empty'), m)['false'];

            m = "The first user should be in range";
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.users(0).hasClass('-inRange'), m)['true'];

            m = "The second user should not be empty";
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.users(1).hasClass('_empty'), m)['false'];

            m = "The second user should be out of range";
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.users(1).hasClass('-inRange'), m)['false'];

            m = "The empty state should be out of range";
            (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.emptyState.hasClass('-inRange'), m)['false'];

          case 15:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });

    (0, _mocha.it)("should display empty state", function () {
      this.setProperties({
        users: [{ id: '1', name: "Foo", distanceKm: 100 }, { id: '2', name: "Bar", distanceKm: 100 }],
        distanceLimitKm: 50
      });

      _intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.render(Ember.HTMLBars.template({
        'id': 'mEd/ZJ+y',
        'block': '{"statements":[["append",["helper",["user-list"],null,[["users","distanceLimitKm"],[["get",["users"]],["get",["distanceLimitKm"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
        'meta': {}
      }));

      m = "There should be two users";
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.users().count).equal(2);

      m = "The first user should not be empty";
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.users(0).hasClass('_empty'), m)['false'];

      m = "The first user should be out of range";
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.users(0).hasClass('-inRange'), m)['false'];

      m = "The second user should not be empty";
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.users(1).hasClass('_empty'), m)['false'];

      m = "The second user should be out of range";
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.users(1).hasClass('-inRange'), m)['false'];

      m = "The empty user should not be out of range";
      (0, _chai.expect)(_intercomTestAssignmentTestsPodsComponentsUserListPageObject.userList.emptyState.hasClass('-inRange'), m)['true'];
    });
  });
});
define('intercom-test-assignment/tests/pods/components/user-list/integration-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/components/user-list/integration-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/components/user-list/page-object', ['exports', 'ember-cli-page-object', 'intercom-test-assignment/tests/helpers/page-object/component', 'intercom-test-assignment/tests/pods/components/user-list-item/page-object'], function (exports, _emberCliPageObject, _intercomTestAssignmentTestsHelpersPageObjectComponent, _intercomTestAssignmentTestsPodsComponentsUserListItemPageObject) {

  var obj = (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.userList', {
    users: (0, _emberCliPageObject.collection)({
      scope: '.userList-items',
      itemScope: '.userList-item:not(._empty)',
      item: _intercomTestAssignmentTestsPodsComponentsUserListItemPageObject['default']
    }),
    emptyState: (0, _intercomTestAssignmentTestsHelpersPageObjectComponent['default'])('.userList-items .userList-item._empty')
  });

  exports['default'] = obj;
  var userList = (0, _emberCliPageObject.create)(obj);
  exports.userList = userList;
});
define('intercom-test-assignment/tests/pods/components/user-list/page-object.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/components/user-list/page-object.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/pods/index/route.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - pods/index/route.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - resolver.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - router.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/serializers/application.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - serializers/application.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/serializers/user.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - serializers/user.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/test-helper', ['exports', 'intercom-test-assignment/tests/helpers/resolver', 'ember-mocha', 'intercom-test-assignment/tests/helpers/ember-cli-mocha-reporter'], function (exports, _intercomTestAssignmentTestsHelpersResolver, _emberMocha, _intercomTestAssignmentTestsHelpersEmberCliMochaReporter) {

  mocha.reporter(_intercomTestAssignmentTestsHelpersEmberCliMochaReporter['default']);
  (0, _emberMocha.setResolver)(_intercomTestAssignmentTestsHelpersResolver['default']);
});
define('intercom-test-assignment/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - test-helper.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/unit/adapters/user-test', ['exports', 'chai', 'ember-mocha', 'intercom-test-assignment/initializers/ember-cli-mirage', 'rsvp', 'intercom-test-assignment/mirage/fixtures/users'], function (exports, _chai, _emberMocha, _intercomTestAssignmentInitializersEmberCliMirage, _rsvp, _intercomTestAssignmentMirageFixturesUsers) {

  var m = undefined;

  (0, _emberMocha.describeModule)('adapter:user', 'Unit | Adapter | user', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
    beforeEach: function beforeEach() {
      this.server = (0, _intercomTestAssignmentInitializersEmberCliMirage.startMirage)();
    },

    afterEach: function afterEach() {
      this.server.shutdown();
    }
  }, function () {

    (0, _emberMocha.it)('exists', function () {
      var adapter = this.subject();
      (0, _chai.expect)(adapter).to.be.ok;
    });

    (0, _emberMocha.it)("`query` should return a promise that resolves to a string", function callee$1$0() {
      var adapter, resultPromise, result;
      return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            adapter = this.subject();
            resultPromise = adapter.query(null, null, {
              url: 'https://cdn.rawgit.com/brianw/19896c50afa89ad4dec3/raw/6c11047887a03483c50017c1d451667fd62a53ca/gistfile1.txt'
            });

            m = "Should return an instance of RSVP.Promise";
            (0, _chai.expect)(resultPromise, m)['instanceof'](_rsvp['default'].Promise);

            context$2$0.next = 6;
            return regeneratorRuntime.awrap(resultPromise);

          case 6:
            result = context$2$0.sent;

            m = "Promise should resolve into payload";
            (0, _chai.expect)(result, m).equal(_intercomTestAssignmentMirageFixturesUsers['default']);

          case 9:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    });
  });
});
define('intercom-test-assignment/tests/unit/adapters/user-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/adapters/user-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/unit/helpers/multiply-test', ['exports', 'chai', 'mocha', 'intercom-test-assignment/helpers/multiply'], function (exports, _chai, _mocha, _intercomTestAssignmentHelpersMultiply) {

  var cases = [{ a: 1, b: 2, expected: 2 }, { a: 2, b: 2, expected: 4 }, { a: 0, b: 5, expected: 0 }];

  (0, _mocha.describe)('Unit | Helper | multiply', function () {

    cases.forEach(function (_ref) {
      var a = _ref.a;
      var b = _ref.b;
      var expected = _ref.expected;

      (0, _mocha.it)('a: ' + a + ', b: ' + b, function () {
        var result = (0, _intercomTestAssignmentHelpersMultiply.multiply)([a, b]);
        (0, _chai.expect)(result).equal(expected);
      });
    });
  });
});
define('intercom-test-assignment/tests/unit/helpers/multiply-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/helpers/multiply-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/unit/helpers/round-test', ['exports', 'chai', 'mocha', 'intercom-test-assignment/helpers/round'], function (exports, _chai, _mocha, _intercomTestAssignmentHelpersRound) {

  var cases = [{ value: 1.2345, precision: undefined, expected: 1 }, { value: 1.2345, precision: 2, expected: 1.23 }, { value: 1.2345, precision: 20, expected: 1.2345 }];

  (0, _mocha.describe)('Unit | Helper | round', function () {

    cases.forEach(function (_ref) {
      var value = _ref.value;
      var precision = _ref.precision;
      var expected = _ref.expected;

      (0, _mocha.it)('value: ' + value + ', precision: ' + precision, function () {
        var result = (0, _intercomTestAssignmentHelpersRound.round)([value, precision]);
        (0, _chai.expect)(result).equal(expected);
      });
    });
  });
});
define('intercom-test-assignment/tests/unit/helpers/round-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/helpers/round-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/unit/models/user-city-junction-test', ['exports', 'chai', 'mocha', 'ember-mocha', 'npm:lodash'], function (exports, _chai, _mocha, _emberMocha, _npmLodash) {

  (0, _mocha.describe)('Unit | Model | user city junction', function () {

    (0, _emberMocha.setupModelTest)('user-city-junction', {
      // Specify the other units that are required for this test.
      needs: ['model:user', 'model:city']
    });

    // Replace this with your real tests.
    (0, _mocha.it)('`distance`', function () {
      var model = this.subject({
        latitude: 51.92893,
        longitude: -10.27699,
        cityLatitude: 53.3393,
        cityLongitude: -6.2576841
      });

      var distance = _npmLodash['default'].round(model.get('distanceKm'), 2);

      (0, _chai.expect)(distance).equal(313.25);
    });
  });
});
/*, beforeEach, afterEach*/
define('intercom-test-assignment/tests/unit/models/user-city-junction-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/models/user-city-junction-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/unit/serializers/user-test', ['exports', 'chai', 'ember-mocha', 'intercom-test-assignment/models/user', 'intercom-test-assignment/mirage/fixtures/users'], function (exports, _chai, _emberMocha, _intercomTestAssignmentModelsUser, _intercomTestAssignmentMirageFixturesUsers) {

  var m = undefined;
  _intercomTestAssignmentModelsUser['default'].modelName = 'user';

  (0, _emberMocha.describeModule)('serializer:user', 'Unit | Serializer | user', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:user']
  }, function () {

    // Replace this with your real tests.
    (0, _emberMocha.it)('normalizeQueryResponse: should process payload', function () {
      var serializer = this.subject();

      var result = serializer.normalizeQueryResponse(null, _intercomTestAssignmentModelsUser['default'], _intercomTestAssignmentMirageFixturesUsers['default'], null, 'query');

      m = "Result should be a hash";
      (0, _chai.expect)(result, m).a('object');

      m = "Result should contain a data property with an array";
      (0, _chai.expect)(result.data, m).a('array');

      m = "Data should be a JSON document";
      (0, _chai.expect)(result.data, m).eql([{ id: "12", type: "user", relationships: {}, attributes: { latitude: 52.986375, name: "Christina McArdle", longitude: -6.043701 } }, { id: "1", type: "user", relationships: {}, attributes: { latitude: 51.92893, name: "Alice Cahill", longitude: -10.27699 } }, { id: "2", type: "user", relationships: {}, attributes: { latitude: 51.8856167, name: "Ian McArdle", longitude: -10.4240951 } }, { id: "3", type: "user", relationships: {}, attributes: { latitude: 52.3191841, name: "Jack Enright", longitude: -8.5072391 } }, { id: "28", type: "user", relationships: {}, attributes: { latitude: 53.807778, name: "Charlie Halligan", longitude: -7.714444 } }, { id: "7", type: "user", relationships: {}, attributes: { latitude: 53.4692815, name: "Frank Kehoe", longitude: -9.436036 } }, { id: "8", type: "user", relationships: {}, attributes: { latitude: 54.0894797, name: "Eoin Ahearn", longitude: -6.18671 } }, { id: "26", type: "user", relationships: {}, attributes: { latitude: 53.038056, name: "Stephen McArdle", longitude: -7.653889 } }, { id: "27", type: "user", relationships: {}, attributes: { latitude: 54.1225, name: "Enid Gallagher", longitude: -8.143333 } }, { id: "6", type: "user", relationships: {}, attributes: { latitude: 53.1229599, name: "Theresa Enright", longitude: -6.2705202 } }, { id: "9", type: "user", relationships: {}, attributes: { latitude: 52.2559432, name: "Jack Dempsey", longitude: -7.1048927 } }, { id: "10", type: "user", relationships: {}, attributes: { latitude: 52.240382, name: "Georgina Gallagher", longitude: -6.972413 } }, { id: "4", type: "user", relationships: {}, attributes: { latitude: 53.2451022, name: "Ian Kehoe", longitude: -6.238335 } }, { id: "5", type: "user", relationships: {}, attributes: { latitude: 53.1302756, name: "Nora Dempsey", longitude: -6.2397222 } }, { id: "11", type: "user", relationships: {}, attributes: { latitude: 53.008769, name: "Richard Finnegan", longitude: -6.1056711 } }, { id: "31", type: "user", relationships: {}, attributes: { latitude: 53.1489345, name: "Alan Behan", longitude: -6.8422408 } }, { id: "13", type: "user", relationships: {}, attributes: { latitude: 53, name: "Olive Ahearn", longitude: -7 } }, { id: "14", type: "user", relationships: {}, attributes: { latitude: 51.999447, name: "Helen Cahill", longitude: -9.742744 } }, { id: "15", type: "user", relationships: {}, attributes: { latitude: 52.966, name: "Michael Ahearn", longitude: -6.463 } }, { id: "16", type: "user", relationships: {}, attributes: { latitude: 52.366037, name: "Ian Larkin", longitude: -8.179118 } }, { id: "17", type: "user", relationships: {}, attributes: { latitude: 54.180238, name: "Patricia Cahill", longitude: -5.920898 } }, { id: "39", type: "user", relationships: {}, attributes: { latitude: 53.0033946, name: "Lisa Ahearn", longitude: -6.3877505 } }, { id: "18", type: "user", relationships: {}, attributes: { latitude: 52.228056, name: "Bob Larkin", longitude: -7.915833 } }, { id: "24", type: "user", relationships: {}, attributes: { latitude: 54.133333, name: "Rose Enright", longitude: -6.433333 } }, { id: "19", type: "user", relationships: {}, attributes: { latitude: 55.033, name: "Enid Cahill", longitude: -8.112 } }, { id: "20", type: "user", relationships: {}, attributes: { latitude: 53.521111, name: "Enid Enright", longitude: -9.831111 } }, { id: "21", type: "user", relationships: {}, attributes: { latitude: 51.802, name: "David Ahearn", longitude: -9.442 } }, { id: "22", type: "user", relationships: {}, attributes: { latitude: 54.374208, name: "Charlie McArdle", longitude: -8.371639 } }, { id: "29", type: "user", relationships: {}, attributes: { latitude: 53.74452, name: "Oliver Ahearn", longitude: -7.11167 } }, { id: "30", type: "user", relationships: {}, attributes: { latitude: 53.761389, name: "Nick Enright", longitude: -7.2875 } }, { id: "23", type: "user", relationships: {}, attributes: { latitude: 54.080556, name: "Eoin Gallagher", longitude: -6.361944 } }, { id: "25", type: "user", relationships: {}, attributes: { latitude: 52.833502, name: "David Behan", longitude: -8.522366 } }]);
    });
  });
});
define('intercom-test-assignment/tests/unit/serializers/user-test.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - unit/serializers/user-test.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
define('intercom-test-assignment/tests/utils/wrap-promise.lint-test', ['exports'], function (exports) {
  'use strict';

  describe('ESLint - utils/wrap-promise.js', function () {
    it('should pass ESLint', function () {
      // precompiled test passed
    });
  });
});
/* jshint ignore:start */

require('intercom-test-assignment/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
