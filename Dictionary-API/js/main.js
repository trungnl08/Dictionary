function wordSearch() {
    document.getElementById('searchResult').style.visibility = 'visible';

    var word = document.getElementById('word');
    var definition = document.getElementById('definition');
    var example = document.getElementById('example');
    var spell = document.getElementById('spell');
    var pronunciation = document.getElementById('pronunciation');

    var wordToSearch = document.getElementById('searchBox').value;

    //Get definiton
    var request1 = new XMLHttpRequest();
    request1.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/definitions?limit=10&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=ds9blt97njwvdd6x4bfxqvr0iebjmg5lucs0fn26in52dsghh', true);
    request1.onload = function () {
        var data = JSON.parse(this.response);
        if (request1.status >= 200 && request1.status < 400) {
            var i = Math.ceil(Math.random() * 10); //  get a random number from 1 to 10 to have a random definition
            word.innerHTML = data[i].word;
            definition.innerHTML = data[i].text;
        } else {
            word.innerHTML = "Error";
            definition.innerHTML = "Error";
        }
    }
    request1.send();

    //Get Pronunciation
    var request0 = new XMLHttpRequest();
    request0.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/pronunciations?useCanonical=false&limit=50&api_key=ds9blt97njwvdd6x4bfxqvr0iebjmg5lucs0fn26in52dsghh', true);
    request0.onload = function () {
        var data0 = JSON.parse(this.response);
        if (request0.status >= 200 && request0 < 400) {
            pronunciation.innerHTML = data0.text;
        } else {
            pronunciation.innerHTML = "Error";
        }
    }
    request0.send();


    //Get Example
    var request2 = new XMLHttpRequest();
    request2.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/topExample?useCanonical=false&api_key=ds9blt97njwvdd6x4bfxqvr0iebjmg5lucs0fn26in52dsghh', true);
    request2.onload = function () {
        var data2 = JSON.parse(this.response);
        if (request2.status >= 200 && request2.status < 400) {
            example.innerHTML = data2.text;
        } else {
            example.innerHTML = "Error";
        }
    }
    request2.send();


    //Get Spell
    var request3 = new XMLHttpRequest();
    request3.open('GET', 'https://api.wordnik.com/v4/word.json/' + wordToSearch + '/audio?useCanonical=false&limit=50&api_key=ds9blt97njwvdd6x4bfxqvr0iebjmg5lucs0fn26in52dsghh', true);
    request3.onload = function () {
        var data3 = JSON.parse(this.response);
        if (request3.status >= 200 && request3.status < 400) {
            var audio = document.getElementById("AUDIO");
            audio.setAttribute("src", data3[0].fileUrl); //  set the source for audio in html tag
            audio.setAttribute("controls", "controls");
            audio.setAttribute("autoplay", "autoplay");
            spell.appendChild(audio);

        } else {
            spell.innerHTML = "Error";
        }
    }
    request3.send();

}
//Get google translate

function googvarranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en'
    }, 'google_translate_element');
}



(function () {
    var gtConstEvalStartTime = new Date();


    function d(b) {
        var a = document.getElementsByTagName("head")[0];
        a || (a = document.body.parentNode.appendChild(document.createElement("head")));
        a.appendChild(b)
    }

    function _loadJs(b) {
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.charset = "UTF-8";
        a.src = b;
        d(a)
    }

    function _loadCss(b) {
        var a = document.createElement("link");
        a.type = "text/css";
        a.rel = "stylesheet";
        a.charset = "UTF-8";
        a.href = b;
        d(a)
    }

    function _isNS(b) {
        b = b.split(".");
        for (var a = window, c = 0; c < b.length; ++c)
            if (!(a = a[b[c]])) return !1;
        return !0
    }

    function _setupNS(b) {
        b = b.split(".");
        for (var a = window, c = 0; c < b.length; ++c) a.hasOwnProperty ? a.hasOwnProperty(b[c]) ? a = a[b[c]] : a = a[b[c]] = {} : a = a[b[c]] || (a[b[c]] = {});
        return a
    }
    window.addEventListener && "undefined" == typeof document.readyState && window.addEventListener("DOMContentLoaded", function () {
        document.readyState = "compvare"
    }, !1);
    if (_isNS('google.translate.Element')) {
        return
    }(function () {
        var c = _setupNS('google.translate._const');
        c._cest = gtConstEvalStartTime;
        gtConstEvalStartTime = undefined;
        c._cl = 'en';
        c._cuc = 'googvarranslateElementInit';
        c._cac = '';
        c._cam = '';
        c._ctkk = '440335.1449305758';
        var h = 'translate.googleapis.com';
        var s = (true ? 'https' : window.location.protocol == 'https:' ? 'https' : 'http') + '://';
        var b = s + h;
        c._pah = h;
        c._pas = s;
        c._pbi = b + '/translate_static/img/te_bk.gif';
        c._pci = b + '/translate_static/img/te_ctrl3.gif';
        c._pli = b + '/translate_static/img/loading.gif';
        c._plla = h + '/translate_a/l';
        c._pmi = b + '/translate_static/img/mini_google.png';
        c._ps = b + '/translate_static/css/translateelement.css';
        c._puh = 'translate.google.com';
        _loadCss(c._ps);
        _loadJs(b + '/translate_static/js/element/main.js');
    })();
})();
