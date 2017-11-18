const superCars = [{make:'Mclaren',model:'570s Spider',hp :562,cost:208000,weight:3303},{make:'BMW',model:'i8',hp:357,cost:143400,weight:3455},{make:'Astonmartin',model:'Vantage',hp:420,cost:186195,weight:3671},{make: 'Lamborghini',model:'Huracan',hp:573,cost:199800,weight:3399},{make: 'Ferrari',model:'488GTB',hp:661,cost:272700,weight:3404},{make: 'Bugatti',model:'Chiron',hp:1479,cost:2700000,weight:4400},{make: 'Ford',model:'GT',hp:647,cost:397500,weight:3485},{make: 'Porsche',model:'911GT2RS',hp:700,cost:293200,weight:3085},{make: 'Audi',model:'R8',hp:540,cost:162900,weight:3627},{make:'Nissan',model:'GT-R',hp:565,cost:109990,weight:3911},{make: 'Acura',model:'NSX',hp:573,cost:156000,weight:3834},{make: 'Maserati',model:'GranTurismo',hp:444,cost:132825,weight:4145}]

let myDreamCar = superCars.filter(weight => {
  return weight.weight <= 3400;
});
console.log(myDreamCar);