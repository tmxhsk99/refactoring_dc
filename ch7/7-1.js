class Organization {
    #name;
    #country;
    #data;

    constructor(data) {
        this.#name = data.name;
        this.#country = data.country;
        this.#data = data;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get country() {
        return this.#country;
    }

    get rawData() {
        return {name : this.name , country: this.country};
    }

}
const data =  { name: 'Acme Gooseberries', country: 'GB' };
const organization = new Organization(data);

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
console.log(organization.rawData);