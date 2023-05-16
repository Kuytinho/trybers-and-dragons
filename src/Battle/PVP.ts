import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  private _fighter1: Fighter;
  private _fighter2: Fighter;
  constructor(fighter1: Fighter, fighter2: Fighter) {
    super(fighter1);
    this._fighter1 = fighter1;
    this._fighter2 = fighter2;
    console.log(this._fighter1);
    console.log(this._fighter2);
  }

  private player1Turn(): void {
    this._fighter1.attack(this._fighter2);
  }

  private player2Turn(): void {
    this._fighter2.attack(this._fighter1);
  }

  private choosePlayerTurn(turnNumber: number): void {
    if (turnNumber / 2 === 0) {
      this.player1Turn();
    } else {
      this.player2Turn();
    }
  }

  private battle(): void {
    for (
      let index = getRandomInt(0, 1); 
      index < 2000; 
      index += 1
    ) {
      this.choosePlayerTurn(index);
      if (this._fighter1.lifePoints === -1 
        || this._fighter2.lifePoints === -1) {
        return;
      }
    }
  }

  fight(): number {
    this.battle();
    const battleResult = super.fight();

    return battleResult;
  }
}