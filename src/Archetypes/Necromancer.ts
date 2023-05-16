import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}