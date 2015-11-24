// window.onload = function() { 
  //create robots with random text greetings, perhaps click on them to change their interactions
  //draw robots with canvas/HTML
  //Use Karma perhaps.
  //Automate tests with Grunt

  //Using Pseudoclassical Class Instantiation out of preference.
  var Robot = function(name){
    this.name = name;
    //create canvas box here
    var bot = document.createElement('canvas');
    document.body.appendChild(bot);
    this.botCtx = bot.getContext("2d");
    this.botCtx.rect(20, 20, 150, 100);
    this.botCtx.font="15px Georgia";
    this.botCtx.fillText("Robot: " + this.name, 50, 50)
    this.botCtx.stroke();
  }

  //manipulate canvas with these prototype methods.
  Robot.prototype.greeting1 = function(){
    this.botCtx.fillText("Hello!", 70, 80)
    // this.botCtx.clearRect(20, 20, 150, 100);
  }
  Robot.prototype.greeting2 = function(){
    this.botCtx.fillText("Greetings!", 60, 80)
  }
  Robot.prototype.greeting3 = function(){
    this.botCtx.fillText("Salutations!", 60, 80)
  }

  Robot.prototype.add = function(a, b){
    console.log("Robot " + this.name + " performed this task. The result of your input is: " + (a+b));
  }

  // document.getElementById("create").addEventListener("click", createBots);
  //listen for create bot click

  // function createBots() {
    var bot1 = new Robot("Minion");
    bot1.greeting1();
    bot1.add(3, 4);

    var bot2 = new Robot("Buddy");
    bot2.greeting2();

    var bot3 = new Robot("NPC");
    bot3.greeting3();
  // }
 
// };