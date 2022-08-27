const customerRepository = new CustomerRepository();
//클라이언트 소스에서 리포지터리에 접근하도록 의존성을 도메인에서 분리함
const order = new Order(data.number, customerRepository.registerCustomer(data.custoerId));

class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

//리포지터리 패턴 일종의 DB 같은 느낌 Map 으로 구현되어있음
class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
