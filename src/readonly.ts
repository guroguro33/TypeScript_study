export{}

class VisaCard {
  constructor(public readonly owner: string) {
  }
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);

// myVisaCard.owner = 'べーこん';