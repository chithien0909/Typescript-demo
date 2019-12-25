interface Vehicle {
  name: string;
  year: number;
  isBroken: boolean;
  summary(): string;
}
const oldCivic = {
  name: 'civic',
  year: 2000,
  isBroken: true,
  summary(): string {
    return this.name;
  }
};
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.isBroken}`);
};

printVehicle(oldCivic);
