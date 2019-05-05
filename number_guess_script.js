let loop = 1
function guess(){
    var num = parseInt(Math.random() * 10 + 1);
    var userGuess = prompt("input a guess number between 1 to 10");
    if(isNaN(userGuess)) {
      alert("Please, write a number");
    } else {
        if(num == userGuess){
            alert("You got it right in" +  " " + loops + "guesses!" );
        } else {
            alert("Not matched");
            let loops = loops + 1
        }
       
    }
}
