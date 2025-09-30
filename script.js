// ===============================
// Diccionario Valari
// ===============================
// Puedes agregar más palabras editando este objeto.
// Formato: "ingles": "valari"
const valariDict = {

    // Pronouns 
    "i": "mi", "am": "pa",
    "you": "tu", "your": "tur", "yours": "turs", "yourself": "turmelta",
    "he": "he", "his": "hes", "him": "hem", "himself": "hermelta",
    "she": "sa", "hers": "sar", "her": "sam", "herself": "sarmelta",
    "they": "se", "their": "ser", "theirs": "ses", "themself": "sermelta",
    "we": "on", "us": "us", "my": "mo",

    // Particles
    "the": "vor", "a": "va", "to": "na", "and": "pote", "in": "rin",
    "of": "del", "with": "mor", "when": "pon", "still": "kata",

    // Nouns
    "bird": "fel", "birds": "felin",
    "god": "valar", "gods": "valarin",
    "house": "doman", "moon": "narel", "sun": "solan",
    "stone": "vaen", "stones": "vaen", "truth": "esha",
    "death": "kala", "peace": "sil", "war": "toran",
    "light": "lior", "shadow": "shor", "under": "vash",
    "song": "melor",

    // Nature
    "sky": "shia", "earth": "mera", "water": "doren",
    "wind": "nalek", "fire": "kalor", "forest": "miren",
    "mountain": "ashen", "river": "hoval", "lake": "taren",
    "rain": "yure", "snow": "nalvia", "storm": "karnel",
    "fog": "visha",

    // Time Structure
    "day": "tari", "night": "narin", "morning": "veral",
    "evening": "lunek", "hour": "ethra", "minute": "setra",
    "time": "kavir", "yesterday": "veshan", "today": "niko",
    "tomorrow": "norik", "now": "nure", "future": "lenari",
    "past": "karath", "year": "dalen",

    "monday": "lunari", "tuesday": "mavari", "wednesday": "velkari",
    "thursday": "thalari", "friday": "frenari", "sunday": "solari",

    // People
    "friend": "selin", "enemy": "orvan", "leader": "tholar",
    "child": "shael", "parent": "mora", "teacher": "yuli",
    "soldier": "harnak", "healer": "viler", "children": "shaelin",
    "king": "kovan", "queen": "velar", "stranger": "norin",
    "priest": "shalen", "student": "nurel",
    "man": "daine", "men": "dainema",
    "woman": "leoma", "women": "leomane",
    "guys": "gomas", "ladies": "tergas",
    "guy": "goma", "ladie": "terga",
    "boy": "shaelo", "girl": "shaela",

    // Emotions
    "love": "kar", "loved": "karen", "hate": "zol", "hated": "zolten",
    "like": "kirma", "liked": "kirmaen", "joy": "venor", "enjoy": "venori",
    "sadness": "shiron", "sad": "shir", "anger": "ferik", "fear": "domir",
    "hope": "melin", "dream": "yasha", "destiny": "thivor",
    "soul": "kelan", "mind": "ilen", "memory": "urath",

    // Verbs
    "was": "men", "know": "ren", "knowing": "renun", "knew": "renen",
    "have": "heb", "having": "hebun", "has": "hus",
    "is": "is", "are": "aren", "will": "mir", "should": "malaka",

    // ---------- Grupo 1: speak ----------
    "speak": "venar", "speaking": "venarun", "spoke": "venaren",
    // ---------- Grupo 2: sleep ----------
    "sleep": "domar", "sleeping": "domarun", "slept": "domaren",
    // ---------- Grupo 3: fight ----------
    "fight": "tharan", "fighting": "tharanun", "fought": "tharen",
    // ---------- Grupo 4: walk ----------
    "walk": "lirvan", "walking": "lirvanun", "walked": "lirven",
    // ---------- Grupo 5: run ----------
    "run": "yunar", "running": "yunarun", "ran": "yunen",
    // ---------- Grupo 6: build ----------
    "build": "kelor", "building": "kelorun", "built": "kelen",
    // ---------- Grupo 7: destroy ----------
    "destroy": "veshar", "destroying": "vesharun", "destroyed": "veshen",
    // ---------- Grupo 8: see ----------
    "see": "tovak", "seeing": "tovakun", "saw": "toven",
    // ---------- Grupo 9: listen ----------
    "listen": "mirenor", "listening": "mirenorun", "listened": "mirenen",
    // ---------- Grupo 10: read ----------
    "read": "naror", "reading": "narorun",
    // ---------- Grupo 11: write ----------
    "write": "sulkar", "writing": "sulkarun", "wrote": "sulken",
    // ---------- Grupo 12: sacrifice ----------
    "sacrifice": "kavael", "sacrificing": "kavaelun", "sacrificed": "kavaelen",
    // ---------- Grupo 13: kill ----------
    "kill": "marde", "killing": "mardeun", "killed": "mardeen",
    // ---------- Grupo 14: fall ----------
    "fall": "wond", "falling": "wondun", "fell": "wonden",
    // ---------- Grupo 15: sing ----------
    "sing": "fela", "singing": "felaun", "sang": "felaen",
    // ---------- Grupo 16: live ----------
    "live": "wiol", "living": "wiolun", "lived": "wiolen",
    // ---------- Grupo 17: go ----------
    "go": "navar", "going": "navarun", "went": "navaren",
    // ---------- Grupo 18: make ----------
    "make": "toril", "making": "torilun", "made": "torilen",

    // Religion
    "religion": "lytheris", "spirit": "nira", "deity": "kaerith",
    "sacred": "selvar", "cursed": "ovel", "prayer": "ishkar",
    "ritual": "relan", "blessing": "ythra", "diamond": "kerta",

    // Extras
    "hi": "ambulo", "hello": "ameo",
    "gay": "fah", "lesbian": "tenbua", "bitch": "sulekan",
    "no-binary": "binao", "shit": "kaeka"
};

// Diccionario inverso
const invDict = Object.fromEntries(
    Object.entries(valariDict).map(([k, v]) => [v, k])
);

// ===============================
// Funciones de traducción
// ===============================

// Puntos y signos
function splitWithPunctuation(text) {
    return text.match(/[\w']+|[.,!?;:]/g) || [];
}

// Capitalizar solo inicio de oración
function capitalizeSentences(tokens) {
    let capitalizeNext = true;
    return tokens.map(t => {
        if (/^[.,!?;:]$/.test(t)) {
            if (t === ".") capitalizeNext = true;
            return t;
        }
        if (capitalizeNext && /^[a-z\[]/i.test(t)) {
            capitalizeNext = false;
            return t.charAt(0).toUpperCase() + t.slice(1);
        }
        return t;
    });
}

// Une tokens sin agregar espacio antes de signos de puntuación
function joinTokens(tokens) {
    let result = "";
    for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        if (i > 0 && !/^[.,!?;:]$/.test(t)) {
            result += " "; // solo agrego espacio si NO es puntuación
        }
        result += t;
    }
    return result;
}

// Inglés → Valari
function toValari(sentence) {
    const tokens = splitWithPunctuation(sentence.toLowerCase());
    const translated = tokens.map(t => {
        if (/^[.,!?;:]$/.test(t)) return t; // deja puntuación intacta
        return valariDict[t] || `[${t}]`;
    });
    return joinTokens(capitalizeSentences(translated));
}

// Valari → Inglés
function fromValari(sentence) {
    const tokens = splitWithPunctuation(sentence.toLowerCase());
    const translated = tokens.map(t => {
        if (/^[.,!?;:]$/.test(t)) return t; // deja puntuación intacta
        return invDict[t] || `[${t}]`;
    });
    return joinTokens(capitalizeSentences(translated));
}

// ===============================
// UI
// ===============================
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const modeSelect = document.getElementById("mode");
const translateBtn = document.getElementById("translateBtn");
const historyList = document.getElementById("history");

translateBtn.addEventListener("click", () => {
    const text = inputText.value.trim();
    if (!text) {
        outputText.textContent = "⚠️ Por favor, escribe algo.";
        return;
    }

    // 🚫 Excepción
    if (text.toLowerCase().includes("hetero") || text.toLowerCase().includes("heterosexual")) {
        outputText.textContent = "💀 No aceptamos eso aquí.";
        return;
    }

    let result = "";
    if (modeSelect.value === "to_valari") {
        result = toValari(text);
    } else {
        result = fromValari(text);
    }

    outputText.textContent = result;

    const li = document.createElement("li");
    li.textContent = `"${text}" ➝ "${result}"`;
    historyList.prepend(li);
});