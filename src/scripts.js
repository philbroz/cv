document.getElementById('language-select').addEventListener('change', function() {
    var selectedLang = this.value;
    window.location.href = selectedLang + '/index.html';
});