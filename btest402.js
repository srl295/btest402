var i = Intl;
console.log("+ Congrats, you have the Intl object.");
var locs = [ "en", "mt", "ja" ];
var d = new Date();
for ( var n=0; n<locs.length; n++ ) {
    var loc = locs[n];
    console.log(loc+":");
    console.log(" date:" + d.toLocaleString(loc,{month: "long",day:"numeric",weekday:"long",year:"numeric"}));
    console.log(" brk:" + 
                Intl.v8BreakIterator.supportedLocalesOf(loc) + " first " + 
                new Intl.v8BreakIterator(loc).first() );
    console.log();
}
