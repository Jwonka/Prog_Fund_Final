function main() {


function decisionMaker() {
  
   //Declare variables
  var userInput = "";
  var playMessage = "y";
  
  //Starts loop as long as playMessage is y
  while(playMessage == "y") {
    var conditionalMessage = "";
    var moneyMessage = ""; 
    
    //Prompt for input and convert to a number
    userInput = prompt("What is your current GPA?");
    userInput = Number(userInput); 

    //calls decision function
    decision(userInput);
    
    //prompts to ask if the user wants to play again
    playMessage = prompt("Do you want to play again?");
  }
}
//calls decisionMaker function to start loop
decisionMaker();
function decision(userInput) {
  //Creates conditionalMessage depending on GPA and available money
  if(userInput <= 3) {
    conditionalMessage = "You should study!";
    document.write("Your GPA is: " + userInput + "\n\n" + conditionalMessage + "\n\n");
  } else {
      moneyMessage = prompt("How much money do you have available?");
      moneyMessage = Number(moneyMessage);
      if(moneyMessage > 500) {
        conditionalMessage = "Do you want to watch Netflix?";
    } else {
        conditionalMessage = "You should go to work!";
      }
      //Creates and displays final output message
      output = "Your GPA is: " + userInput + "\n\n" + "You have " + "$" + moneyMessage + " available." + "\n\n" + conditionalMessage +"\n\n";
      document.write(output);
    }
  }
}
//calls the main function
main();