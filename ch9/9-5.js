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

    get name() {
        return this._name;
    }


}

//리포지터리 패턴 일종의 DB 같은 느낌 Map 으로 구현되어있음
class CustomerRepository {
    #customers;

    constructor() {
        this.#customers = new Map();
    }

    registerCustomer(id, name) {
        if (!this.#customers.has(id)) {
            this.#customers.set(id, new Customer(id, name));
        }
        return this.findCustomer(id);
    }

    findCustomer(id) {
        return this.#customers.get(id);
    }

    updateCustomer(id, name) {
        if (!this.#customers.has(id)) {
            console.log("업데이트하려는 customer Id가 없습니다");
        } else {
            this.#customers.delete(id);
            this.#customers.set(id, new Customer(id, name));
        }
    }
    printMap(){
        console.log(this.#customers.entries());
    }

}

const customerRepository = new CustomerRepository();
//클라이언트 소스에서 리포지터리에 접근하도록 의존성을 도메인에서 분리함
const data = {number: 1, Customer: {id: 1, name: 'test1'}};
//const data2 = {number : 2, Customer: {id : 2 , name: "test2"}};
console.log("================= Print Before orders =============");
let order1 = new Order(data.number, customerRepository.registerCustomer(data.Customer.id, data.Customer.name));
console.log(order1);
//같은 사람의 다른주문
let order2 = new Order(2, customerRepository.registerCustomer(data.Customer.id, data.Customer.name));
console.log(order2);
console.log("----------------------------------------------------")

console.log("Change Customer Data!!!");
//같은사람인데 이름만 변경
const data2 = {number: 1, Customer: {id: 1, name: 'test2'}};
//업데이트 실시
customerRepository.updateCustomer(data.Customer.id, data2.Customer.name);
//이미 이름이 등록되어있으면 기존에 등록된 Map을 가져오기 때문에 이름을 뭘로하든 상관없다.
order1 = new Order(data.number, customerRepository.registerCustomer(data2.Customer.id,"test1"));
order2 = new Order(2, customerRepository.registerCustomer(data2.Customer.id,"test1"));
console.log(order1);
console.log(order2);
//customerRepository.printMap();
