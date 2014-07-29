This is a very, very, very basic test of es402
===

### What is this?

This tests basic sanity in an
[ECMA-402](http://www.ecma-international.org/ecma-402/1.0/) intl
implementation.

For a *complete test*, see [test262](http://test262.ecmascript.org/)
([and on GitHub](https://github.com/tc39/test262)) which is maintained
by Ecma TC39.

### Why does this exist?

This file is part of my
[Node.JS ICU enablement work](https://github.com/joyent/node/pull/7719)
and is under the same license.

### How do I use it?

With [node.js](http://nodejs.org):

* `node btest402.js`

With [d8](http://code.google.com/p/v8/):

* `d8 btest402.js`

With *your browser*:

* copy and paste the `btest402.js` file into your browser's console?
  that kind of works.

or

* view [inbrowser.html](inbrowser.html) and bring up your console

With the [ECMA-402 shim](https://github.com/ibm-js/ecma402):

* first, go get and install [bower](http://bower.io/)
* then, run `bower install ecma402` (or similar, see the
  [ECMA-402 shim](https://github.com/ibm-js/ecma402) repo)
* now, bring up [viabower.html](viabower.html) and bring up your
  console.

### What do the results mean?

I'm just going to describe the SUMMARY results here (the last line
printed). The rest of the output is more verbose and even more subject
to change.

`SUMMARY: NO Intl. `

* You don't (even) have the Intl object needed for ES402 compliance.

`SUMMARY: Have Intl, Date:no 'tlh',`

* You probably have a 'reasonably complete' set of locale data. At
  least what this test tests so far..

`SUMMARY: ... FYI: v8Brk:have 'en'`

* ... you even have the `Intl.v8BreakIterator` extension, which isn't
  part of ES402. Just FYI.

`SUMMARY:Have Intl, Date:no 'tlh', Date:'mt'=='en', Date:no 'ja', `

* Ah.. You probably have the "small ICU" option I'm
  [busy trying to get into node](https://github.com/joyent/node/pull/7719). English
  (at least.. *American* English) will work. But, hey, you've got a
  smaller binary size!

### Who wrote it

Steven R. Loomis < srl AT icu-project DOT org >

