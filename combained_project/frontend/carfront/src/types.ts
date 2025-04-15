export type CarResponse = {
  brand: string;
  model: string;
  color: string;
  registrationNumber: string;
  modelYear: number;
  price: number;
  _links: {
    self: {
      href:string,
    },
    car: {
      href:string;
    }, 
    owner: {
      href: string; 
    }
  };
}

export type Car = {
  model: string;
  brand: string;
  color: string;
  registrationNumber:string;
  modelYear:number;
  price:number;
}

export type CarEntry = {
  car: Car;
  url: string;
}