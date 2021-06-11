
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {

  let  helloVar = /hello/;
  

  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(helloVar.test(text)){
    hello(text);
  }
  else if(text === 'help\n') {
    help();
  }
  else if(text==='list\n'){
    list();
    
  }
  else if (text.split(' ')[0].trim() === 'add'){
    add(text.split(' ')[1]);
  }
  else if(text.slice(0,6)==='remove'){
    remove(text.slice(6));
  }

  else{
    unknownCommand(text);
  }
}










/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


 


 /**
 * prints Hello +" textReceived"
 * 
 *
 * @param  {string} a the text received
 * @returns {void}
 */
 function hello(a){
  let value = a.replace(/ +/g," ");
  console.log(value.trim() +'!');
}


/**
 * Displays possible command lines
 *
 * @returns {void}
 */
function help(){
  console.log('Possible command lines: hello, hello + " ", help, exit or quit')
  }



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}


/**
 * Displays list
 *
 * @returns {void}
 */


let arraylist= ["eat","sleep","work"]

 function list(){

  for(let i = 0; i<arraylist.length; i++){
    console.log((i+1)+":" + arraylist[i])
  }
}
 
 
function add (text){
  arraylist.push(text);
  
  }


  function remove(text){
    text = text.trim();
    if(text<=arraylist.length){
         if(text == ""){
            arraylist.pop();
    }
    else if(text == "1"){
      arraylist.shift();
    }
    else if(text == "2"){
      arraylist.splice(1,1);
      }
    }
  }



// The following line starts the application
startApp("Lea Zouein")
