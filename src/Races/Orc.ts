import Race from './Races';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static racesInstances = 0 ;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 74,
  ) {
    super(name, dexterity);
    this._maxLifePoints = maxLifePoints;
    Orc.racesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.racesInstances;
  }
}