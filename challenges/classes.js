// 1. Copy and paste your prototype in here and refactor into class syntax.

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMaker{ 
    constructor(attr){
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
   } 
    volume(){
      let volume = this.length * this.width * this.height;
        return volume;
      }
    surfaceArea(){
      let totalSurfArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
        return totalSurfArea;
    }
  }


class CubeMaker extends CuboidMaker {
  constructor(attr){
    super(attr);
  }
  volume(){
    return Math.pow(this.length,3);
  }
  surfaceArea(){
    let power =  Math.pow(this.length,2);
      return (6*power);
  }
}
//----------------------------------------------------------------------
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  })
    const cube = new CubeMaker({
    length: 4,
    width: 4,
    height: 4
  })
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  console.log(cube.volume()); // 64
  console.log(cube.surfaceArea()); // 96
  
  