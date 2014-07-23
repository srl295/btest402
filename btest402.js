// Copyright (C) 2014 IBM Corporation and Others. All Rights Reserved.
// This file is part of the Node.JS ICU enablement work
// https://github.com/joyent/node/pull/7719
// and is under the same license.
//
// This is a very, very, very basic test of es402
//
// Usage: node btest402.js

try {
    console.log("You have console.log.");
} catch(e) {
    console = { log: print };
    console.log("Now you have console.log.");
}

var summary = {};

try {
    var i = Intl;
    summary.haveIntl = true;
    console.log("+ Congrats, you have the Intl object.");
} catch(e) {
    console.log("You don't have the Intl object: " + e);
}

if(summary.haveIntl) {
var locs = [ "en", "mt", "ja","tlh"];
var d = new Date(196400000);
for ( var n=0; n<locs.length; n++ ) {
    var loc = locs[n];
    var lsummary = summary[loc] = {};

    console.log(loc+":");
    var sl=null;
    try {
        sl = Intl.DateTimeFormat.supportedLocalesOf([loc]);
        if( sl.length > 0 ) {
            lsummary.haveSlo = true;
        }
    } catch (e) {
        console.log("SLO err: " + e);
    }
    var dstr = "ERR";
    try {
        lsummary.dstr = d.toLocaleString(loc,{month: "long",day:"numeric",weekday:"long",year:"numeric"});
        console.log(" date: (supported:"+sl+") " + lsummary.dstr);
    } catch (e) {
        console.log(" Date Format err: " + e);
    }
    try {
        console.log(" Intl.v8BreakIterator:" + 
                    Intl.v8BreakIterator.supportedLocalesOf(loc) + " Supported, first()==" + 
                    new Intl.v8BreakIterator(loc).first() );
        lsummary.brkOk = true;
    } catch ( e) {
        console.log(" Intl.v8BreakIterator error (NOT part of EcmaScript402): " + e);
    }
    console.log();
}
}

// print summary
console.log();
console.log("--------- Analysis ---------");
stxt = "";
if( summary.haveIntl ) {
    console.log("* You have the 'Intl' object. Congratulations! You have the possibility of being EcmaScript 402 compliant.");
    stxt += "Have Intl, ";

    if ( !summary.en.haveSlo ) {
        stxt += "Date:no EN, ";
        console.log("* English isn't a supported language by the date formatter. Perhaps the data isn't installed properly?");
    }
    if ( !summary.tlh.haveSlo ) {
        stxt += "Date:no 'tlh', ";
        console.log("* Klingon isn't a supported language by the date formatter. It is without honor!");
    }
    // now, what is it actually saying
    if( summary.en.dstr.indexOf("1970") == -1) {
        stxt += "Date:bad 'en', ";
        console.log("* the English date format text looks bad to me. Doesn't even have the year.");
    } else {
        if( summary.en.dstr.indexOf("Jan") == -1) {
            stxt += "Date:bad 'en', ";
            console.log("* The English date format text looks bad to me. Doesn't have the right month.");
        }
    }

    if( summary.mt.dstr == summary.en.dstr ) {
        stxt += "Date:'mt'=='en', ";
        console.log("* The English and Maltese look the same to me. Probably a 'small' build.");
    } else if( summary.mt.dstr.indexOf("1970") == -1) {
        stxt += "Date:bad 'mt', ";
        console.log("* the Maltese date format text looks bad to me. Doesn't even have the year. (This data is missing from the Chromium ICU build)");
    } else {
        if( summary.mt.dstr.indexOf("Jann") == -1) {
            stxt += "Date:bad 'mt', ";
            console.log("* The Maltese date format text looks bad to me. Doesn't have the right month. (This data is missing from the Chromium ICU build)");
        }
    }

    if ( !summary.ja.haveSlo ) {
        stxt += "Date:no 'ja', ";
        console.log("* Japanese isn't a supported language by the date formatter. Could be a 'small' build.");
    } else {
        if( summary.ja.dstr.indexOf("1970") == -1) {
            stxt += "Date:bad 'ja', ";
            console.log("* the Japanese date format text looks bad to me. Doesn't even have the year.");
        } else {
            if( summary.ja.dstr.indexOf("金") == -1) {
                stxt += "Date:bad 'ja', ";
                console.log("* The Japanese date format text looks bad to me. Doesn't have the right day of week.");
            }
        }
    }
} else {
    console.log("* You don't have the 'Intl' object. You aren't EcmaScript 402 compliant.");
    stxt += " NO Intl. ";
}

// 1-liner.
console.log();
console.log("----------------");
console.log( "SUMMARY:" +  stxt );

