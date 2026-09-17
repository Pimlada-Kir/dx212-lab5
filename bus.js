// แบบที่เราเขียนคาบ 3 (ES5)
let ngv1 = {
    name : "ngv1" ,
    route : "route 01" ,
    late : false ,
    mile : 5678 ,
} ;

let ngv2 = {
    name : "ngv2" ,
    route : "route 02" ,
    late : true ,
    mile : 3000 ,
} ;

let ngv3 = {
    name : "ngv3" ,
    route : "route 03" ,
    late : true ,
    mile : 2000 ,
} ;

const buses = [ngv1, ngv2, ngv3];
//console.log(buses[0].name);
const lateBus = buses.filter(b => b.late);
console.log(lateBus);
const oldBus = buses.filter(b => b.mile > 3000);
console.log(oldBus);

/*
const lateRoutes = [];
for (let i = 0; i < buses.length; i++) {
  if (buses[i].late === true) {
    lateRoutes.push(buses[i].route);
  }
}
console.log(lateRoutes);
*/

//const lateRoute =