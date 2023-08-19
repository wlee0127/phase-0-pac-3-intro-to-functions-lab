function shout(string){
    string=string.toUpperCase();
    return string;
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    string=string.toUpperCase();
    console.log(string);
}

function logWhisper(string){
    string=string.toLowerCase();
    console.log(string);
}

function sayHiToHeadphonedRoommate(string){
    const cantHearYou = "I can't hear you!";
    const yesIndeed = "YES INDEED!"
    const dinner = "I would love to!"

    let stringLowerTest;
    let stringUpperTest;
    stringLowerTest=string.toLowerCase();
    stringUpperTest=string.toUpperCase();

    if (string===stringLowerTest){
        return cantHearYou;
    }
    else if (string===stringUpperTest) {
        return yesIndeed;
    }
    else if (string==="Let's have dinner together!"){
        return dinner;

    }
}