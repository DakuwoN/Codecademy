const prompt = require('prompt-sync')({sigint: true});
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';



class Field {
    constructor(field){
        this.field = field;
        this.playerPosition = { x: 0, y: 0 };
        this.field[0][0] = pathCharacter;
    }





// Inside the Field class

static generateField(height, width, percentage) {
    const field = new Array(height).fill(null).map(() => new Array(width).fill(fieldCharacter)); // Use fieldCharacter for initial fill
    // Place hat in the field, ensuring it's not at the player's start position (0,0)
    let hatPosition;
    do {
        hatPosition = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height)
        };
    } while (hatPosition.x === 0 && hatPosition.y === 0);
    field[hatPosition.y][hatPosition.x] = hat;

    // Fill the field with holes based on the percentage
    const holesCount = Math.floor((height * width) * (percentage / 100));
    for (let i = 0; i < holesCount; i++) {
        let holePosition;
        do {
            holePosition = {
                x: Math.floor(Math.random() * width),
                y: Math.floor(Math.random() * height)
            };
        } while (field[holePosition.y][holePosition.x] !== fieldCharacter || (holePosition.x === hatPosition.x && holePosition.y === hatPosition.y)); // Corrected condition
        field[holePosition.y][holePosition.x] = hole; // Use 'O' for holes
    }
    
    // Ensure the player's starting position is always empty
    field[0][0] = pathCharacter;
    return field;
}

    isMoveValid(x,y) {
        return  x >= 0 && y >= 0 && x < this.field[0].length && y < this.field.length;
    }

    print() {
        this.field.forEach(row => {
         console.log(row.join('')); 
        });  
    }
        

 
    askQuestion() {
        rl.question(' Which way? (u = up, d = down, l = left, r = right) ', answer => {
            switch (answer) {
            case 'u': this.move(-1, 0); break;
            case 'd': this.move(1, 0); break;
            case 'l': this.move(0, -1); break;
            case 'r': this.move(0, 1); break;
            default: console.log('Invalid input'); this.askQuestion(); return;
            }
            // this.checkStatus();
        });
    }

    move(deltaY, deltaX) {
        const newY = this.playerPosition.y + deltaY;
        const newX = this.playerPosition.x + deltaX;
        if (newY >= 0 && newY < this.field.length && newX >= 0 && newX < this.field[0].length) {
            this.playerPosition = { y: newY, x: newX };
            this.updateField();
        }else{
            console.log('You moved outside the field');
            this.updateField();
        }

    }

    
    updateField() {
        if (this.field[this.playerPosition.y][this.playerPosition.x] === hole) {
            console.log('You fell into a hole');
            this.endGame();
        } else if(this.field[this.playerPosition.y][this.playerPosition.x] === hat){
            console.log('You found the hat!');
            this.endGame();

        } else {
            this.field[this.playerPosition.y][this.playerPosition.x] = pathCharacter;
            this.print();
            this.askQuestion();
        }
        // this.checkStatus()
    }
        
    endGame() {
        rl.close();
    }

    play(){
        this.print();
        this.askQuestion();
    
    }
}

const myField = new Field(Field.generateField(10, 10, 20)); // 10x10 field with 20% holes


myField.play();