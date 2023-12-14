(function newQuote() {
    var quotations = ['“Indeed, with hardship comes ease.”', 
    '“And your Lord never forgets.”', 
    '“Allah does not burden a soul beyond that it can bear.”',
    '“The truth is from your Lord, so do not be among the doubters.”',
    '“And Allah is with the doers of good.”',
    '“If Allah should aid you, no one can overcome you; but if He should forsake you, who is there that can aid you after Him?”'
    ];
    var randomQuote = Math.floor(Math.random()*quotations.length);
    document.getElementById('quotation').innerHTML = quotations[randomQuote];

  })();