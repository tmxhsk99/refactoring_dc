//클래스 안의 필드명이 모호하거나 문맥적으로 애매하면 변경할 것
class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get title() {
    return this._name;
  }
  set title(value) {
    this._name = value;
  }
  get country() {
    return this._country;
  }
  set country(value) {
    this._country = value;
  }
}
const organization = new Organization({
  name: '드림코딩',
  country: '대한민국',
});
