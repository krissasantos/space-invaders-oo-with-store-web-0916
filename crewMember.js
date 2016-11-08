class CrewMember{

  getLast(){
    let oldCrew = Store.data.crewMembers
    return oldCrew.slice(0)
  }

  constructor(obj){
    this.id = obj.id;
    this.position = obj.position;
    this.ship_id = undefined;
    this.currentShip = 'Looking for a Rig'
    Store.data.crewMembers.push(this);

  }

  assignShip(ship){
    this.ship_id = ship.id;
    this.currentShip = ship;
    ship.docked = false;
  }

  engageWarpDrive(){
    //if(!=pilot)
    if(this.ship_id !== undefined && this.position === 'Pilot'){
      this.currentShip.warpDrive = 'engaged!'
    }else{
      return "had no effect"
    }
  }

  setsInvisibility(){
    if(this.ship_id !== undefined && this.position === 'Defender'){
      this.currentShip.cloaked = true
    }else{
      return "had no effect"
    }
  }

  chargePhasers(){
    if(this.ship_id !== undefined && this.position === 'Gunner'){
      this.currentShip.phasersCharge = 'charged!'
    }else{
      return "had no effect"
    }
  }
}