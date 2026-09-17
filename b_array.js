const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
  { route: "NGV-4", passengers: 51, late: false },
];

const route = buses.map(bus => `${bus.route} มีผู้โดยสาร ${bus.passengers} คน`);
console.log(route);

const lateBuses = buses.filter((bus) => bus.late === true);
console.log(lateBuses);

const totalPassengers = buses.reduce(
    (total, { passengers }) => total + passengers, 0
);
console.log(totalPassengers);

const latePassengersTotal = buses
  .filter(bus => bus.late)
  .reduce((total, { passengers }) => total + passengers, 0);
console.log(latePassengersTotal);