class Shiritori {
  constructor(words = [], gameOver = false) {
    this.words = words;
    this.gameOver = gameOver;
  }

  play(val) {
    if (this.gameOver === false) {
      if (this.words.length === 0) {
        this.words.push(val);
      } else {
        const lastItem = this.words[this.words.length - 1].slice(-1);
        const firstItem = val[0];
        if (firstItem === lastItem) {
          this.words.push(val);
          return this.words;
        } else {
          this.gameOver = true;
          this.words = [];
          return "game over";
        }
      }
    }
  }
  restart() {
    this.words = [];
    this.gameOver = false;
  }
}
const game1 = new Shiritori();
game1.play("ann");
game1.play("nona");
game1.restart();
game1.play("ann");
console.log(game1);
