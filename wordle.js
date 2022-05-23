let wordle = (target, guess) => {
    let result = "";

    for(let i = 0; i < guess.length; i++)
    {
        if(guess[i] == target[i]){
            result += "2";
            removeMatchedElement(i);
        } else if (target.includes(guess[i])){
            result += "1";
            const IndexOfmatchingChar = target.indexOf(guess[i])
            removeMatchedElement(IndexOfmatchingChar)
        } else {
            result += "0";
        }
    }

    function removeMatchedElement(index) {
        target = target.replace(target[index], " ");
    }

    return result;
}
    
module.exports = wordle;