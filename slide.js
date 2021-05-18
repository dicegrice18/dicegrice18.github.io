var counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 3000);

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
