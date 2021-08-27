class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('PLAY');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('RESET');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT COLLECTOR");
        this.title.position(195, 50);
        this.title.style('font-size', '100px');
        this.title.style('color', 'blue');
        this.input.position(550,400);
        this.input.style('width', '210px');
        this.input.style('height', '30px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '210px');
        this.button.style('height', '50px');
        this.button.style('background', 'blue');
        this.reset.position(900, 660);
        this.reset.style('width', '110px');
        this.reset.style('height', '40px');
        this.reset.style('background', 'blue');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Well Come To FruitCollector Game, Helo:- " + player.name)
            this.greeting.position(180,250);
            this.greeting.style('color', 'blue');
            this.greeting.style('font-size', '80px');
        });

        this.reset.mousePressed(() => {

            game.update(0)
            player.updateCount(0)
            
            var playerInfoRef=database.ref('players')
            playerInfoRef.remove()

        });

    }
}