(function newQuote() {
  var quotations = [
    // Surah Al-Fatiha
    '"Guide us along the Straight Path" <span style="font-size: smaller; font-style: italic;">- Surah Al-Fatiha (The Opening)</span>',

    // Surah Al-Baqarah
    '“Allah does not burden a soul beyond that it can bear.” <span style="font-size: smaller; font-style: italic;">- Surah Al-Baqarah (The Cow)</span>',
    '"Indeed, Allah does not love the transgressors. " <span style="font-size: smaller; font-style: italic;"> - Surah Al-Baqarah (The Cow)</span>',
    '"Indeed, Allah loves the doers of good."<span style="font-size: smaller; font-style: italic;">- Surah Al-Baqarah (The Cow)</span>',
    '"Indeed, Allah loves those who are constantly repentant."<span style="font-size: smaller; font-style: italic;">- Surah Al-Baqarah (The Cow)</span>',
    '"Indeed, Allah is with those who are patient." <span style="font-size: smaller; font-style: italic;">- Surah Al-Baqarah (The Cow)</span>',

    // Surah Aal-‘Imran
    // '"You give sovereignty to whom You will and You take sovereignty away from whom You will."<span style="font-size: smaller; font-style: italic;">- Surah Aal-`Imran (The Family of Imran)</span>',
    '"... wa tuʿizzu man tashāʾ wa tu dhzillu man tashāʾ ..." <span style="font-size: smaller; font-style: italic;">- Surah Aal-`Imran (The Family of Imran)</span>',
    '"Indeed, Allah loves those who rely upon Him."<span style="font-size: smaller; font-style: italic;">- Surah Aal-`Imran (The Family of Imran)</span>',
    '"And Allah loves the steadfast(those who persevere)."<span style="font-size: smaller; font-style: italic;">- Surah Aal-`Imran (The Family of Imran)</span>',

    // Surah Al-Ma’idah
    '"...Whoever saves a life, it will be as if they saved all of humanity."<span style="font-size: smaller; font-style: italic;"> - Surah Al-Ma`idah (The Meal)</span>',
    '"Indeed, Allah does not love the transgressors. " <span style="font-size: smaller; font-style: italic;"> - Surah Al-Ma`idah (The Meal)</span>',

    // Surah At-Tawbah
    '"And Allah loves those who keep themselves clean and pure."<span style="font-size: smaller; font-style: italic;">- Surah At-Tawbah (The Repentance)</span>',

    // Surah Ibrahim
    '"And never think that Allah is unaware of what the wrongdoers do." <span style="font-size: smaller; font-style: italic;"> - Surah Ibrahim (Abraham)</span>',

    // Surah Maryam
    '“And your Lord never forgets.” <span style="font-size: smaller; font-style: italic;">- Surah Maryam (Mary)</span>',

    // Surah Al-Anbiya
    '“And We test you with evil and with good as trial;” <span style="font-size: smaller; font-style: italic;">- Surah Al-Anbiya (The Prophets)</span>',

    // Surah Al-Mu’minun
    // (none from your list, placeholder)

    // Surah An-Nur
    // (none from your list, placeholder)

    // Surah Al-Ankabut
    '“And Allah is with the doers of good.” <span style="font-size: smaller; font-style: italic;">- Surah Al-Ankabut (The Spider)</span>',

    // Surah Ar-Rum
    // (none from your list, placeholder)

    // Surah Luqman
    // (none from your list, placeholder)

    // Surah Ash-Shura
    '"He (Allah) certainly does not like the <em>zaalimun</em> (oppressors, wrongdoers)."<span style="font-size: smaller; font-style: italic;"> - Surah Ash-Shūrā (The Consultation)</span>',
    '"The reward of an evil deed is its equivalent."<span style="font-size: smaller; font-style: italic;"> - Surah Ash-Shūrā (The Consultation)</span>',
    '"But whoever pardons(forgives) and seeks reconciliation, then their reward is with Allah."<span style="font-size: smaller; font-style: italic;"> - Surah Ash-Shūrā (The Consultation)</span>',
    '"Allah chooses for Himself whoever He wills..."<span style="font-size: smaller; font-style: italic;"> - Surah Ash-Shūrā (The Consultation)</span>',

    // Surah Az-Zukhruf / Ad-Dukhan
    // (none from your list, placeholder)

    // Surah Ar-Rahman
    '"So which of the favors of your Lord would you deny?"<span style="font-size: smaller; font-style: italic;">- Surah Ar-Rahman (The Most Merciful)</span>',

    // Surah Al-Mulk
    '"[He] who created death and life to test you [as to] which of you is best in deed. "<span style="font-size: smaller; font-style: italic;"> - Surah Mulk (The Kingdom)</span>',

    // Surah At-Takathur
    '"Competition in [worldly] increase distracts you" <span style="font-size: smaller; font-style: italic;">- Surah At-Takāthur (Rivalry)</span>',

    // Surah Ash-Sharh
    '“Indeed, with hardship comes ease.” <span style="font-size: smaller; font-style: italic;">- Surah Ash-Sharh (The Relief)</span>',

    // Hadith sayings (at the end)
    '"The best of you are those who are best to their families." <span style="font-size: smaller; font-style: italic;">- Prophet Muhammad (PBUH) (Mishkat)</span>',
    '"The best of you are those who are best to their wives." <span style="font-size: smaller; font-style: italic;">- Prophet Muhammad (PBUH) (Al-Tirmidhi)</span>',
    '"The best of people are those who are most beneficial to people." <span style="font-size: smaller; font-style: italic;">- Prophet Muhammad (PBUH) (Tabarani)</span>'
  ];
  
  var randomQuote = Math.floor(Math.random() * quotations.length);
  document.getElementById('quotation').innerHTML = quotations[randomQuote];
})();
