const fs = require('fs');
try {
    const code = fs.readFileSync('data/derkenar.js', 'utf8');
    eval(code);
    if (typeof derkenarData !== 'undefined') {
        console.log("Syntax OK. Items count:", derkenarData.konular.length);
        console.log("Intro count:", derkenarData.intro ? derkenarData.intro.length : 0);
    } else {
        console.error("derkenarData is undefined despite no syntax error.");
    }
} catch (e) {
    console.error("Syntax Error:", e.message);
    // Print lines around the error if possible (hard with eval, but let's see)
}
