class Person {
  #lastName;
  #firstName;
  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }
  get lastName(){
    return this.#lastName;
  }
  get firstName(){
    return this.#firstName;
  }
}

let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner() {
  //스프레이드 연산자 사용시 얕은 복사
  //return {...defaultOwner};
  return defaultOwner;
}
