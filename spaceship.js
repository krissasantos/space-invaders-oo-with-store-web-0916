class Spaceship{
  constructor(obj){
    this.id = obj.id;
    this.name = obj.name;
    this.phasers = obj.phasers;
    this.shields = obj.shields;
    this.docked = true;
    this.cloaked = false;
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged';
    Store.data.spaceships.push(this)
  }
}