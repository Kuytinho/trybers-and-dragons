import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export { SimpleFighter };

export default interface Fighter extends SimpleFighter {
  defense: number,
  energy?: Energy,
  
  attack(enemy: Fighter | SimpleFighter): void,
  special?(enemy: Fighter): void | string,
  levelUp(): void,
}