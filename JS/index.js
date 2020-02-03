const readlineSync = require('readline-sync')
const maxGuesses = 1
let currentGuess = 0

//start off game//

//There are questions asking you to fill in the lyrics for songs that are commonly misheard//

//You get one guess - either you're right or you're wrong and you suck at karaoke//

// get user name//

const userName = readlineSync.question("What's your name?")

let userGuess = readlineSync.question (`Hi ${userName}! We're about to learn if you are really a karaoke master. Let's play!`)

const game = () => {

    //song 1//

    console.log("I like big butts and _________")
    const choices1 = ["...a can of limes", '...I cannot lie', "...I can't deny"]
    const answer1 = readlineSync.keyInSelect(choices1, 'Pick an answer.',{cancel:false});
    if (answer1 === 1) {
        console.log(`So... ${userName}, you like big butts huh? "${choices1[answer1]}" is the correct answer!`)
    }else {
        console.log(`Bummer ${userName}, "${choices1[answer1]}" is false!`)

    }

    //song 2//

    console.log("Should I give up or should I just keep chasing ________")
    const choices2 = ["...penguins", "...Haitians", "...pavements"]
    const answer2 = readlineSync.keyInSelect(choices2, 'Pick an answer.',{cancel:false});
    if (answer2 === 2) {
        console.log(`"${choices2[answer2]}" is the correct answer!`)
    }else {
        console.log(`Sorry ${userName}, "${choices2[answer2]}" is false!`)

    }

    //song 3//

    console.log("Dancing queen, feel the beat from the _________")
    const choices3 = ["...tangerine", "...kerosene", "...tambourine"]
    const answer3 = readlineSync.keyInSelect(choices3, 'Pick an answer.',{cancel:false});
    if (answer3 === 2) {
        console.log(`I bet you're dancing now! "${choices3[answer3]}" is right!`)
    }else {
        console.log(`${userName}, you can do better than that... "${choices3[answer3]}" is false!`)

    } 

    //song 4//

    console.log("We built this city on _________")
    const choices4 = ["...rock and roll", "...sausage rolls", "...highway tolls"]
    const answer4 = readlineSync.keyInSelect(choices4, 'Pick an answer.',{cancel:false});
    if (answer4 === 0) {
        console.log(`"${choices4[answer4]}" is right, but sausage does sound good...`)
    }else {
        console.log(`"Come on ${userName}... "${choices4[answer4]}" isn't even close!`)

    } 

    //song 5//

    console.log("Sharif don't like it __________")
    const choices5 = ["...wash the cat box", "...rock the Casbah", "...walk the cat walk"]
    const answer5 = readlineSync.keyInSelect(choices5, 'Pick an answer.',{cancel:false});
    if (answer5 === 1n
        ) {
        console.log(`"${choices5[answer5]}" is right! If you know this song that means you're an old millenial like me!`)
    }else {
        console.log(`Wtf is a cat box ${userName}? "${choices5[answer5]}" is wrong!`)

    } 

    if (readlineSync.keyInYN("Want to play again?")) {
        game()
    } else {
        return
    }


}
game()