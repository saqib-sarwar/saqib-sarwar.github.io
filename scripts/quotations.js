
(function newQuote() {
  var quotations = [
      '“Indeed, with hardship comes ease.” <span style="font-size: smaller; font-style: italic;">- Surah Ash-Sharh (The Relief)</span>', 
      '“And your Lord never forgets.” <span style="font-size: smaller; font-style: italic;">- Surah Maryam (Mary)</span>', 
      '“Allah does not burden a soul beyond that it can bear.” <span style="font-size: smaller; font-style: italic;">- Surah Al Baqarah (The Cow)</span>',
      '“And Allah is with the doers of good.” <span style="font-size: smaller; font-style: italic;">- Surah Al Ankabut (The Spider)</span>',
      '"And never think that Allah is unaware of what the wrongdoers do." <span style="font-size: smaller; font-style: italic;"> - Surah Ibrahim (Abraham)</span>',
      '"Indeed, Allah does not love the transgressors. " <span style="font-size: smaller; font-style: italic;"> - Surah Al-Baqarah, Surah Al-Ma`idah (The Cow, The Meal)</span>',
      '"Indeed, Allah does not love the corrupters <em>(al-mufsidīn)</em>."<span style="font-size: smaller; font-style: italic;"> - Surah Qasas (The Story)</span>',
      '"He (Allah) certainly does not like the <em>zaalimun</em> (oppressors, wrongdoers)."<span style="font-size: smaller; font-style: italic;"> - Surah Ash-Shura (The Council)</span>',
      '"The reward of an evil deed is its equivalent."<span style="font-size: smaller; font-style: italic;"> - Surah Ash-Shura (The Council)</span>',
      '"But whoever pardons(forgives) and seeks reconciliation, then their reward is with Allah."<span style="font-size: smaller; font-style: italic;"> - Surah Ash-Shura (The Council)</span>',
      '"Whoever takes a life—unless as a punishment for murder or mischief in the land—it will be as if they killed all of humanity; and whoever saves a life, it will be as if they saved all of humanity."<span style="font-size: smaller; font-style: italic;"> - Surah Al-Ma`idah(The Meal)</span>',
      // '"The best among you are those who have the best manners and character." <span style="font-size: smaller; font-style: italic;">- Prophet Muhammad (PBUH)</span>',
      '"Indeed, Allah is with those who are patient." <span style="font-size: smaller; font-style: italic;">- Surah Al Baqarah (The Cow)</span>',
      '"The best of you are those who are best to their wives." <span style="font-size: smaller; font-style: italic;">- Prophet Muhammad (PBUH) (Al-Tirmidhi)</span>',
      '"The best of you are those who are best to their families." <span style="font-size: smaller; font-style: italic;">- Prophet Muhammad (PBUH) (Mishkat)</span>',
      '"The best of people are those who are most beneficial to people." <span style="font-size: smaller; font-style: italic;">- Prophet Muhammad (PBUH) (Tabarani)</span>',
      // '"The best of you are those who learn the Quran and teach it to others." <span style="font-size: smaller; font-style: italic;">- Prophet Muhammad (PBUH) (Al-Bukhari)</span>',
      '“And We test you with evil and with good as trial;” <span style="font-size: smaller; font-style: italic;">- Surah Al Anbiya (The Prophets)</span>'
  ];
  var randomQuote = Math.floor(Math.random() * quotations.length);
  document.getElementById('quotation').innerHTML = quotations[randomQuote];
})();
