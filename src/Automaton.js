export default class Automaton {
  constructor(props) {
    // Implement this
    // Do any setup you think you need for the Automaton to work
    this.props=props;
  }


  readCommands(commands) {
    // Implement this
    // Read in an commands ([String])
    // Return true if we end in our accept state, false otherwise. 
    //Les states q1, q2, q3 sont respectivement 1, 2 et 3 dans le code 
    var state=1; //q1
    for (let i=0; i<commands.length; i++) {
      if (state==1 && commands[i]==1){
        state=2;
      }else if (state==1 && commands[i]==0){
        state=1;
      }else if(state==2 && commands[i]==0){
        state=3;
      }else if(state==2 && commands[i]==1){
        state=2;
      }else if(state==3 && (commands[i]==0||commands[i]==1)){
        state=2;
      }
    }
    if (state==2){
      return true;
    }
    else{
      return false;
    } 
  }

  
}

var a = new Automaton();
// Do anything you need to set up this automaton's states.
var isAccepted = a.readCommands(["1", "0", "0", "1", "0"]);
