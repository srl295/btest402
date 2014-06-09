// Copyright (C) 2014 IBM Corporation and Others. All Rights Reserved.
// This file is part of the Node.JS ICU enablement work
// https://github.com/joyent/node/pull/7719
// and is under the same license.
//
// This is a very, very, very basic test of es402
//
// Usage: node btest402.js

var i = Intl;
console.log("+ Congrats, you have the Intl object.");
var locs = [ "en", "mt", "ja" ];
var d = new Date();
for ( var n=0; n<locs.length; n++ ) {
    var loc = locs[n];
    console.log(loc+":");
    console.log(" date:" + d.toLocaleString(loc,{month: "long",day:"numeric",weekday:"long",year:"numeric"}));
    try {
        console.log(" brk:" + 
                    Intl.v8BreakIterator.supportedLocalesOf(loc) + " first " + 
                    new Intl.v8BreakIterator(loc).first() );
    } catch ( e) {
        console.log("brk err: " + e);
    }
    console.log();
}
