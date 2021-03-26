const persons = ['Dad', 'Mum', 'Sister', 'Brother', 'Friend', 'Auntie', 'Uncle', 'Grandma', 'Grandad', 'Neighbour', 'Dave, who lives down the road'];
const offsensiveWord = ['fuck', 'shit', 'piss', 'cunt', 'arse', 'twat', 'dick'];
const bodyPart = ['arm', 'leg', 'face', 'ear', 'nose', 'bum', 'foot', 'head', 'toe', 'tummy'];
const lovingWord = ['lovely', 'heavenly', 'gorgeous', 'cuddly', 'kissable', 'huggable', 'squishable', 'sweet'];
const mushy = ['baby', 'cuddle-pie', 'petal', 'shnoogums', 'angel', 'darling', 'dumpling', 'peachy-poo'];

function randomNum(array) {
    const num = Math.floor(Math.random() * array.length);
    return num;
}

function messageGenerator(mode, name) {
    name = name.trim();
    mode = mode.trim();
    if (mode === 'offensive') {
        if (name == 'random') return(`Your ${persons[randomNum(persons)]} is a ${offsensiveWord[randomNum(offsensiveWord)]}ing ${offsensiveWord[randomNum(offsensiveWord)]} ${bodyPart[randomNum(bodyPart)]}!!!`);
        else return(`${name} is a ${offsensiveWord[randomNum(offsensiveWord)]}ing ${offsensiveWord[randomNum(offsensiveWord)]} ${bodyPart[randomNum(bodyPart)]}!!!`);
    }
    if (mode === 'loving') {
        if (name == 'random') return(`<3 <3 Your ${persons[randomNum(persons)]} is a ${lovingWord[randomNum(lovingWord)]} ${mushy[randomNum(mushy)]} <3 <3`);
        else return(`<3 <3 ${name} is a ${lovingWord[randomNum(lovingWord)]} ${mushy[randomNum(mushy)]} <3 <3`);
    }
    if (mode === 'mixed') {
        const randomCall = {
            0: lovingWord[randomNum(lovingWord)],
            1: mushy[randomNum(mushy)],
            2: offsensiveWord[randomNum(offsensiveWord)],
            3: bodyPart[randomNum(bodyPart)],
        };
        if (name == 'random') return(`Your ${persons[randomNum(persons)]} is a really super ${randomCall[randomNum(Object.keys(randomCall))]} ${randomCall[randomNum(Object.keys(randomCall))]}.`);
        else return(`${name} is a really super ${randomCall[randomNum(Object.keys(randomCall))]} ${randomCall[randomNum(Object.keys(randomCall))]}.`);
    }
}

const { off } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Would you like loving or offensive mode, or mixed? ", function (modeInput) {
    const mode = modeInput.toLowerCase().trim();
    const boolean = modeInput == 'loving' || modeInput == 'offensive' || modeInput == 'mixed';
    if (typeof mode !== 'string' || boolean === false) {
        console.log(`YOU DID NOT ENTER A VALID MODE!!! ${messageGenerator('offensive', 'User (yes, that means you)')}`);
        rl.close();
    }
    else {
        rl.question("Who would you like to address the message to? You can also select random. ", function (name) {
            console.log(messageGenerator(mode, name));
            rl.close();
        });
    }

});

rl.on("close", function () {
    console.log("Thank you using this message generator!");
    process.exit(0);
});


