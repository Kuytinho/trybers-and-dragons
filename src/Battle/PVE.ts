import Character from '../Character';
import Battle from './Battle';
import Monster from '../Monster';
import getRandomInt from '../utils';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private _fighter: Character | Fighter;
  private _monsters: Monster[] | SimpleFighter[] | Fighter[];
  constructor(
    fighter: Character | Fighter, 
    monsters: Monster[] | SimpleFighter[] | Fighter[],
  ) {
    super(fighter);
    this._fighter = fighter;
    this._monsters = monsters;
  }

  private playerTurn(): void {
    const monstersAlive = this._monsters
      .filter((monster) => monster.lifePoints !== -1);
    if (monstersAlive.length === 0) {
      throw new Error('Player killed all monsters');
    }
    this._fighter.attack(
      monstersAlive[getRandomInt(0, monstersAlive.length)],
    );
  }

  private monstersTurn(): void {
    const monstersAlive = this._monsters
      .filter((monster) => monster.lifePoints !== -1);

    monstersAlive[getRandomInt(0, monstersAlive.length)]
      .attack(this._fighter);
    if (this._fighter.lifePoints === -1) {
      throw new Error('Player died');
    }
  }

  private choosePlayerTurn(turnNumber: number): void {
    if (turnNumber / 2 === 0) {
      this.playerTurn();
    } else {
      this.monstersTurn();
    }
  }

  private battle(): void {
    for (
      let index = getRandomInt(0, 1); 
      index < 2000; 
      index += 1
    ) {
      try {
        this.choosePlayerTurn(index);
      } catch (e) {
        return;
      }
    }
  }

  public fight(): number {
    this.battle();
    const battleResult = super.fight();

    return battleResult;
  }
}