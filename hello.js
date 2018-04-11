function sayHello(name) {
  console.log('Hello,' +  name );
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");


function ageCalculator(){

  var name = 'Suzie';
  var name2 ='Jack';
  var yearofBirth = 1983;
  var yearofBirth2 = 2004;
  var currentYear = 2015;
  var currentYear2 = 2016;
  var age = currentYear - yearofBirth;
  var age2 = currentYear2 - yearofBirth2;

  return name +  " is "  +  age + " years old " ;
  return name2 +  " is "  +  age + " years old " ;

}



console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Jack", 2004, 2016));






