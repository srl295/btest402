This is a very, very, very basic test of es402
===

### What is this?

This tests basic sanity in an
[ES402](http://www.ecma-international.org/ecma-402/1.0/) intl
implementation.

It can work with [node](http://nodejs.org) or [d8](http://code.google.com/p/v8/).

### Why does this exist?

This file is part of my
[Node.JS ICU enablement work](https://github.com/joyent/node/pull/7719)
and is under the same license.

### How do I use it?

    node btest402.js

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

