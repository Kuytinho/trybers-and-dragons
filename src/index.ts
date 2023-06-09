import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Player1');

for (let index = 0; index < 8; index += 1) {
  player1.levelUp();
}

const player2 = new Character('Player2');
const player3 = new Character('Player3');

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]): void {
  for (let index = 0; index < battles.length; index += 1) {
    battles[index].fight();
  }
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };