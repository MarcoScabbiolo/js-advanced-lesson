type fCar = {
  nickname: string
}

const crashCar = (car: fCar) => console.log(`${car.nickname} Boom`)

type fTruck = fCar & {
  maxCargoCapacity: number
  loaded: boolean
}

const unloadTruck = (truck: fTruck) => {
  console.log('Unloading cargo')
  truck.loaded = false
}

type fFlyingCar = fCar & {
  maxHeight: number
  flying: boolean
}

const takeOffFlyingCar = (flyingCar: fFlyingCar) => {
  console.log('Taking off...')
  flyingCar.flying = false
}


const doCarStuff = (car: fCar) => {
  const truck = car as fTruck | undefined
  if (truck?.maxCargoCapacity) {
    unloadTruck(truck)
  }

  const flyingCar = car as fFlyingCar | undefined
  if (flyingCar?.maxHeight) {
    takeOffFlyingCar(flyingCar)
  }

  crashCar(car)
  console.log('\n')
}


const truck2: fTruck = { nickname: 'truck', maxCargoCapacity: 10, loaded: true }
const flyingCar2: fFlyingCar = { nickname: 'flyincCar', maxHeight: 10000, flying: false }

doCarStuff(truck2)
doCarStuff(flyingCar2)


const flyingTruck: fTruck & fFlyingCar = {
  ...truck2,
  ...flyingCar2, 
  nickname: 'flyingTruck'
}

doCarStuff(flyingTruck)