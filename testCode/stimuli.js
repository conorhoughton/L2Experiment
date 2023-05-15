const stimuli = [
	{word: "monsi", translation: "back", correct: "monsi", incorrect: "pi", imageFile: "./img/monsi.png"},
	{word: "pana", translation: "give", correct: "pana", incorrect: "supa", imageFile: "./img/pana.png"},
	{word: "mama", translation: "parent", correct: "mama", incorrect: "kasi", imageFile: "./img/mama.png"},
	{word: "lupa", translation: "hole", correct: "lupa", incorrect: "pana", imageFile: "./img/lupa.png"},
	{word: "ma", translation: "land", correct: "ma", incorrect: "kute", imageFile: "./img/ma.png"},
	{word: "lipu", translation: "flat object", correct: "lipu", incorrect: "la", imageFile: "./img/lipu.png"},
	{word: "seli", translation: "hot", correct: "seli", incorrect: "monsi", imageFile: "./img/seli.png"},
	{word: "alasa", translation: "hunt", correct: "alasa", incorrect: "ike", imageFile: "./img/alasa.png"},
	{word: "sewi", translation: "above", correct: "sewi", incorrect: "jan", imageFile: "./img/sewi.png"},
	{word: "ilo", translation: "tool", correct: "ilo", incorrect: "ma", imageFile: "./img/ilo.png"},
	{word: "ike", translation: "bad", correct: "ike", incorrect: "sina", imageFile: "./img/ike.png"},
	{word: "kepeken", translation: "use", correct: "kepeken", incorrect: "ken", imageFile: "./img/kepeken.png"},
	{word: "len", translation: "clothing", correct: "len", incorrect: "sijelo", imageFile: "./img/len.png"},
	{word: "tomo", translation: "house", correct: "tomo", incorrect: "kule", imageFile: "./img/tomo.png"},
	{word: "pipi", translation: "bug", correct: "pipi", incorrect: "kama", imageFile: "./img/pipi.png"},
	{word: "sinpin", translation: "front", correct: "sinpin", incorrect: "taso", imageFile: "./img/sinpin.png"},
	{word: "list", translation: "list", correct: "list", incorrect: "suli", imageFile: "./img/list.png"},
	{word: "kute", translation: "listen", correct: "kute", incorrect: "pakala", imageFile: "./img/kute.png"},
	{word: "telo", translation: "water", correct: "telo", incorrect: "anpa", imageFile: "./img/telo.png"},
	{word: "nasa", translation: "silly", correct: "nasa", incorrect: "sama", imageFile: "./img/nasa.png"},
	{word: "ante", translation: "different", correct: "ante", incorrect: "selo", imageFile: "./img/ante.png"},
	{word: "loje", translation: "red", correct: "loje", incorrect: "suwi", imageFile: "./img/loje.png"},
	{word: "pilin", translation: "feel", correct: "pilin", incorrect: "kon", imageFile: "./img/pilin.png"},
	{word: "poki", translation: "container", correct: "poki", incorrect: "noka", imageFile: "./img/poki.png"},
	{word: "uta", translation: "mouth", correct: "uta", incorrect: "pi", imageFile: "./img/uta.png"},
	{word: "anu", translation: "or", correct: "anu", incorrect: "utala", imageFile: "./img/anu.png"},
	{word: "kon", translation: "air", correct: "kon", incorrect: "jelo", imageFile: "./img/kon.png"},
	{word: "waso", translation: "bird", correct: "waso", incorrect: "ko", imageFile: "./img/waso.png"},
	{word: "ko", translation: "semi-solid", correct: "ko", incorrect: "telo", imageFile: "./img/ko.png"},
	{word: "wan", translation: "one", correct: "wan", incorrect: "ni", imageFile: "./img/wan.png"},
	{word: "supa", translation: "table", correct: "supa", incorrect: "pilin", imageFile: "./img/supa.png"},
	{word: "palisa", translation: "stick", correct: "palisa", incorrect: "toki", imageFile: "./img/palisa.png"},
	{word: "seme", translation: "what", correct: "seme", incorrect: "en", imageFile: "./img/seme.png"},
	{word: "wawa", translation: "strong", correct: "wawa", incorrect: "nasa", imageFile: "./img/wawa.png"},
	{word: "kule", translation: "color", correct: "kule", incorrect: "ilo", imageFile: "./img/kule.png"},
	{word: "tu", translation: "two", correct: "tu", incorrect: "waso", imageFile: "./img/tu.png"},
	{word: "nena", translation: "hill", correct: "nena", incorrect: "list", imageFile: "./img/nena.png"},
	{word: "lete", translation: "cold", correct: "lete", incorrect: "o", imageFile: "./img/lete.png"},
	{word: "pakala", translation: "oops", correct: "pakala", incorrect: "sona", imageFile: "./img/pakala.png"},
	{word: "pan", translation: "grain", correct: "pan", incorrect: "tenpo", imageFile: "./img/pan.png"},
	{word: "jelo", translation: "yellow", correct: "jelo", incorrect: "moku", imageFile: "./img/jelo.png"},
	{word: "mi", translation: "I", correct: "mi", incorrect: "walo", imageFile: "./img/mi.png"},
	{word: "jo", translation: "have", correct: "jo", incorrect: "jaki", imageFile: "./img/jo.png"},
	{word: "soweli", translation: "animal", correct: "soweli", incorrect: "mama", imageFile: "./img/soweli.png"},
	{word: "o", translation: "imperative", correct: "o", incorrect: "palisa", imageFile: "./img/o.png"},
	{word: "poka", translation: "side", correct: "poka", incorrect: "lipu", imageFile: "./img/poka.png"},
	{word: "sijelo", translation: "body", correct: "sijelo", incorrect: "e", imageFile: "./img/sijelo.png"},
	{word: "pi", translation: "of", correct: "pi", incorrect: "kili", imageFile: "./img/pi.png"},
	{word: "awen", translation: "stay", correct: "awen", incorrect: "lipu", imageFile: "./img/awen.png"},
	{word: "toki", translation: "language", correct: "toki", incorrect: "alasa", imageFile: "./img/toki.png"},
	{word: "insa", translation: "inside", correct: "insa", incorrect: "mi", imageFile: "./img/insa.png"},
	{word: "nanpa", translation: "number", correct: "nanpa", incorrect: "open", imageFile: "./img/nanpa.png"},
	{word: "ni", translation: "this", correct: "ni", incorrect: "mute", imageFile: "./img/ni.png"},
	{word: "open", translation: "open", correct: "open", incorrect: "kon", imageFile: "./img/open.png"},
	{word: "nasin", translation: "way", correct: "nasin", incorrect: "taso", imageFile: "./img/nasin.png"},
	{word: "sina", translation: "you", correct: "sina", incorrect: "pakala", imageFile: "./img/sina.png"},
	{word: "ona", translation: "he/she", correct: "ona", incorrect: "pona", imageFile: "./img/ona.png"},
	{word: "kulupu", translation: "community", correct: "kulupu", incorrect: "wan", imageFile: "./img/kulupu.png"},
	{word: "e", translation: "transitive marker", correct: "e", incorrect: "nimi", imageFile: "./img/e.png"},
	{word: "suwi", translation: "sweet", correct: "suwi", incorrect: "pali", imageFile: "./img/suwi.png"},
	{word: "ale", translation: "everything", correct: "ale", incorrect: "kalama", imageFile: "./img/ale.png"},
	{word: "lukin", translation: "see", correct: "lukin", incorrect: "sinpin", imageFile: "./img/lukin.png"},
	{word: "meli", translation: "woman", correct: "meli", incorrect: "olin", imageFile: "./img/meli.png"},
	{word: "moku", translation: "eat", correct: "moku", incorrect: "o", imageFile: "./img/moku.png"},
	{word: "lon", translation: "be", correct: "lon", incorrect: "utala", imageFile: "./img/lon.png"},
	{word: "ken", translation: "can", correct: "ken", incorrect: "waso", imageFile: "./img/ken.png"},
	{word: "anpa", translation: "bottom", correct: "anpa", incorrect: "sitelen", imageFile: "./img/anpa.png"},
	{word: "selo", translation: "skin", correct: "selo", incorrect: "kule", imageFile: "./img/selo.png"},
	{word: "lili", translation: "small", correct: "lili", incorrect: "awen", imageFile: "./img/lili.png"},
	{word: "laso", translation: "blue", correct: "laso", incorrect: "suwi", imageFile: "./img/laso.png"},
	{word: "linja", translation: "line", correct: "linja", incorrect: "lipu", imageFile: "./img/linja.png"},
	{word: "pimeja", translation: "black", correct: "pimeja", incorrect: "ona", imageFile: "./img/pimeja.png"},
	{word: "weka", translation: "away", correct: "weka", incorrect: "esun", imageFile: "./img/weka.png"},
	{word: "nimi", translation: "word", correct: "nimi", incorrect: "pona", imageFile: "./img/nimi.png"},
	{word: "pali", translation: "work", correct: "pali", incorrect: "lipu", imageFile: "./img/pali.png"},
	{word: "ijo", translation: "thing", correct: "ijo", incorrect: "sin", imageFile: "./img/ijo.png"},
	{word: "kalama", translation: "sound", correct: "kalama", incorrect: "a", imageFile: "./img/kalama.png"},
	{word: "lawa", translation: "head", correct: "lawa", incorrect: "mije", imageFile: "./img/lawa.png"},
	{word: "luka", translation: "hand", correct: "luka", incorrect: "mije", imageFile: "./img/luka.png"},
	{word: "sike", translation: "circle", correct: "sike", incorrect: "wan", imageFile: "./img/sike.png"},
	{word: "tenpo", translation: "time", correct: "tenpo", incorrect: "wawa", imageFile: "./img/tenpo.png"},
	{word: "mute", translation: "many", correct: "mute", incorrect: "monsi", imageFile: "./img/mute.png"},
	{word: "walo", translation: "white", correct: "walo", incorrect: "olin", imageFile: "./img/walo.png"},
	{word: "ala", translation: "no", correct: "ala", incorrect: "lili", imageFile: "./img/ala.png"},
	{word: "taso", translation: "only", correct: "taso", incorrect: "pi", imageFile: "./img/taso.png"},
	{word: "unpa", translation: "sexual", correct: "unpa", incorrect: "lili", imageFile: "./img/unpa.png"},
	{word: "jaki", translation: "dirty", correct: "jaki", incorrect: "nena", imageFile: "./img/jaki.png"},
	{word: "wile", translation: "want", correct: "wile", incorrect: "ko", imageFile: "./img/wile.png"},
	{word: "utala", translation: "fight", correct: "utala", incorrect: "pini", imageFile: "./img/utala.png"},
	{word: "kili", translation: "fruit", correct: "kili", incorrect: "la", imageFile: "./img/kili.png"},
	{word: "sona", translation: "knowledge", correct: "sona", incorrect: "ona", imageFile: "./img/sona.png"},
	{word: "pona", translation: "good", correct: "pona", incorrect: "poki", imageFile: "./img/pona.png"},
	{word: "sama", translation: "same", correct: "sama", incorrect: "ala", imageFile: "./img/sama.png"},
	{word: "en", translation: "and", correct: "en", incorrect: "jelo", imageFile: "./img/en.png"},
	{word: "tan", translation: "because of", correct: "tan", incorrect: "ni", imageFile: "./img/tan.png"},
	{word: "a", translation: "ah", correct: "a", incorrect: "mun", imageFile: "./img/a.png"},
	{word: "mu", translation: "interjection", correct: "mu", incorrect: "walo", imageFile: "./img/mu.png"},
	{word: "kasi", translation: "plant", correct: "kasi", incorrect: "moku", imageFile: "./img/kasi.png"},
	{word: "akesi", translation: "reptile", correct: "akesi", incorrect: "pana", imageFile: "./img/akesi.png"},
	{word: "kiwen", translation: "hard", correct: "kiwen", incorrect: "seli", imageFile: "./img/kiwen.png"},
	{word: "pini", translation: "end", correct: "pini", incorrect: "jo", imageFile: "./img/pini.png"},
	{word: "moli", translation: "die", correct: "moli", incorrect: "jelo", imageFile: "./img/moli.png"},
	{word: "suli", translation: "big", correct: "suli", incorrect: "kalama", imageFile: "./img/suli.png"},
	{word: "mun", translation: "moon", correct: "mun", incorrect: "supa", imageFile: "./img/mun.png"},
	{word: "lape", translation: "sleep", correct: "lape", incorrect: "laso", imageFile: "./img/lape.png"},
	{word: "li", translation: "be", correct: "li", incorrect: "palisa", imageFile: "./img/li.png"},
	{word: "kala", translation: "fish", correct: "kala", incorrect: "nasa", imageFile: "./img/kala.png"},
	{word: "tawa", translation: "go", correct: "tawa", incorrect: "tan", imageFile: "./img/tawa.png"},
	{word: "esun", translation: "market", correct: "esun", incorrect: "nasin", imageFile: "./img/esun.png"},
	{word: "musi", translation: "fun", correct: "musi", incorrect: "toki", imageFile: "./img/musi.png"},
	{word: "olin", translation: "love", correct: "olin", incorrect: "sinpin", imageFile: "./img/olin.png"},
	{word: "sitelen", translation: "image", correct: "sitelen", incorrect: "sike", imageFile: "./img/sitelen.png"},
	{word: "suno", translation: "sun", correct: "suno", incorrect: "lipu", imageFile: "./img/suno.png"},
	{word: "kama", translation: "come", correct: "kama", incorrect: "sike", imageFile: "./img/kama.png"},
	{word: "la", translation: "if", correct: "la", incorrect: "tan", imageFile: "./img/la.png"},
	{word: "noka", translation: "leg", correct: "noka", incorrect: "wile", imageFile: "./img/noka.png"},
	{word: "pu", translation: "Toki Pona book", correct: "pu", incorrect: "ma", imageFile: "./img/pu.png"},
	{word: "jan", translation: "person", correct: "jan", incorrect: "nasa", imageFile: "./img/jan.png"},
	{word: "mani", translation: "money", correct: "mani", incorrect: "lupa", imageFile: "./img/mani.png"},
	{word: "mije", translation: "man", correct: "mije", incorrect: "linja", imageFile: "./img/mije.png"},
	{word: "sin", translation: "new", correct: "sin", incorrect: "anpa", imageFile: "./img/sin.png"},
];
export{stimuli};