
(function newQuote() {
  var quotations = [
      '“Indeed, with hardship comes ease.” <span style="font-size: smaller; font-style: italic;">- Surah Ash-Sharh (The Relief)</span>', 
      '“And your Lord never forgets.” <span style="font-size: smaller; font-style: italic;">- Surah Maryam (Mary)</span>', 
      '“Allah does not burden a soul beyond that it can bear.” <span style="font-size: smaller; font-style: italic;">- Surah Al Baqarah (The Cow)</span>',
      '“And Allah is with the doers of good.” <span style="font-size: smaller; font-style: italic;">- Surah Al Ankabut (The Spider)</span>',
      '"Discipline is the highest form of self-respect."', 
      '"The best among you are those who have the best manners and character." <span style="font-size: smaller; font-style: italic;">- Prophet Muhammad (PBUH)</span>',
      '"Indeed, Allah is with those who are patient." <span style="font-size: smaller; font-style: italic;">- Surah Al Baqarah (The Cow)</span>',
      '"The best of you are those who are best to their wives." <span style="font-size: smaller; font-style: italic;">- Prophet Muhammad (PBUH) (Al-Tirmidhi)</span>',
      '"The best of you are those who are best to their families." <span style="font-size: smaller; font-style: italic;">- Prophet Muhammad (PBUH) (Mishkat)</span>',
      '"The best of people are those who are most beneficial to people." <span style="font-size: smaller; font-style: italic;">- Prophet Muhammad (PBUH) (Tabarani)</span>',
      '"The best of you are those who learn the Quran and teach it to others." <span style="font-size: smaller; font-style: italic;">- Prophet Muhammad (PBUH) (Al-Bukhari)</span>',
      '“And We test you with evil and with good as trial;” <span style="font-size: smaller; font-style: italic;">- Surah Al Anbiya (The Prophets)</span>'
  ];
  var randomQuote = Math.floor(Math.random() * quotations.length);
  document.getElementById('quotation').innerHTML = quotations[randomQuote];
})();
