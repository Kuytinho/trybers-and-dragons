import Race from './Races';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static racesInstances = 0 ;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 99,
  ) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Elf.racesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.racesInstances;
  }
}