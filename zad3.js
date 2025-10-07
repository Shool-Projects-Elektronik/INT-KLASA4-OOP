const Osoba = {
  powitanie() 
  {
    console.log('Witam!');
  }
}

const Uczen = Object.create(Osoba); 

Uczen.oceny = [1, 2, 4, 5, 1];

Uczen.avg = function() 
{
  let sum = 0;
  for (let i = 0; i < this.oceny.length; i++) 
  {
    sum += this.oceny[i];
  }
  return sum / this.oceny.length;
}