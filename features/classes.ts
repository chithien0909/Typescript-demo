class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('Haha');
  }
}
const vehicle = new Vehicle('blue');
console.log(vehicle.color);
const car = new Car(2, 'yellow');
console.log(car.color);
