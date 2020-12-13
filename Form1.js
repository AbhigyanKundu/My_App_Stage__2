class Form1 {

    constructor() {
      this.input = createInput("Name");
    this.button = createButton('Get Started');// In case of play get started

       // this.emergency1= createButton('Police Station');
       // this.emergency2= createButton('Fire Brigade');
       // this.emergency3= createButton('Ambulance');
        //this.emergency4= createButton('Resturants');
       // this.emergency5= createButton('Hospitals');
        //this.greeting = createElement('h2');
        //this.title = createElement('h2');
      //this.reset = createButton('Reset');
    }
    display(){
        this.title.html("Emergency Services");
        this.title.position(displayWidth/2 - 50, 0);


       
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
    }  
}