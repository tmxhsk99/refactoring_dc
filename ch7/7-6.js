export class Shipment {
  #trackingInformation;
  #shippingCompany;
  #trackingNumber;


  constructor(shippingCompany, trackingNumber) {
    this.#shippingCompany = shippingCompany;
    this.#trackingNumber = trackingNumber;
  }

  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }

  get trackingInformation() {
    return this.#trackingInformation;
  }

  set trackingInformation(trackingInformation) {
    this.#trackingInformation = trackingInformation;
  }

  get shippingCompany() {
    return this.#shippingCompany;
  }

  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }

  get trackingNumber() {
    return this.#trackingNumber;
  }

  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }
}

const shipment = new Shipment('Maersk',999);
console.log(shipment.trackingInfo);

shipment.shippingCompany = 'COSCO';
console.log(shipment.trackingInfo);
