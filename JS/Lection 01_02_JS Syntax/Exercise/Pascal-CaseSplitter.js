function splitter(string) {
    let outputString = string.split(/(?=[A-Z])/);

    console.log(outputString.join(', '));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitter('HoldTheDoor');
splitter('ThisIsSoAnnoyingToDo');