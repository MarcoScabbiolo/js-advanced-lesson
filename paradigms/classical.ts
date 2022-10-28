abstract class Car {
  constructor(public nickname: string) {}
  
  crash() {
    console.log(`${this.nickname} Boom`)
  }
}

class Truck extends Car {
  loaded = true

  constructor(nickname: string, public maxCargoCapacity: number) {
    super(nickname)
  }

  unload() {
    console.log('Unloading cargo')
    this.loaded = false
  }
}

class FlyingCar extends Car {
  flying = false

  constructor(nickname: string, public maxHeight: number) {
    super(nickname)
  }

  takeOff() {
    console.log('Taking off...')
    this.flying = true
  }
}

class CarService {
  doStuff(car: Car) {
    if (car instanceof Truck) {
      car.unload()
    } else if (car instanceof FlyingCar) {
      car.takeOff()
    }

    car.crash()
    console.log('\n')
  }
}

const truck = new Truck('truck', 10)
const flyingCar = new FlyingCar('flyingCar', 10000)

const carService = new CarService()

carService.doStuff(truck)
carService.doStuff(flyingCar)