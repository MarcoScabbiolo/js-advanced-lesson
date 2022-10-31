import '../shared/identity-monad'

type Car = {
  nickname: string
}

const crashCar = (car: Car) => console.log(`${car.nickname} Boom`)

type Truck = Car & {
  maxCargoCapacity: number
  loaded: boolean
}

const unloadTruck = (truck: Truck) => {
  console.log('Unloading cargo')
  truck.loaded = false
}

const carIsTruck = (car: Car): Truck | undefined => {
  const truck = car as Truck | undefined

  if (truck?.maxCargoCapacity != null) {
    return truck
  }
}

type FlyingCar = Car & {
  maxHeight: number
  flying: boolean
}

const takeOffFlyingCar = (flyingCar: FlyingCar) => {
  console.log('Taking off...')
  flyingCar.flying = true
}

const carFlies = (car: Car): FlyingCar | undefined => {
  const flyingCar = car as FlyingCar | undefined

  if (flyingCar?.maxHeight != null) {
    return flyingCar
  }
}


const doCarStuff = (car: Car) => car
  .also(c => c.let(carIsTruck)?.also(unloadTruck))
  .also(c => c.let(carFlies)?.also(takeOffFlyingCar))
  .also(crashCar)
  .also(() => console.log('\n'))


const truck2: Truck = { nickname: 'truck', maxCargoCapacity: 10, loaded: true }
const flyingCar2: FlyingCar = { nickname: 'flyingCar', maxHeight: 10000, flying: false }

doCarStuff(truck2)
doCarStuff(flyingCar2)



















const flyingTruck: Truck & FlyingCar = {
  ...truck2,
  ...flyingCar2, 
  nickname: 'flyingTruck'
}

doCarStuff(flyingTruck)