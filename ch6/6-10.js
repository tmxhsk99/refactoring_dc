import _ from 'lodash'
const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}

export function enrichReading(original){
  //result = {...original}; //Object.assign(): 얕은 복사만 이루어짐 객체 안에 객체는 참조값만 복사하는 현상
  const result = _.cloneDeep(original); //lodash  라이브러리로 깊은복사를 한다.
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0,result.baseCharge - taxThreshold(result.year));
  return result;
}
function calculateBaseCharge(reading){
  return baseRate(reading.month, reading.year) * reading.quantity;
}
function taxThreshold(year) {
  return 0.1;
}
