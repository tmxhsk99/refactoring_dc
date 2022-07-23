import { acquireReading, enrichReading } from './6-10.js';

const rawReading = acquireReading();
//enrichReading 를 호출하는 시점의 계산만 반영되서 결과에 저장된다.
//왠만하면 클래스를 쓰는 것이 좋다... 책에서는 이미 이런식으로 반영되어있을때 사용하라고 나와있음
const reading = enrichReading(rawReading);
console.log(reading.baseCharge);
console.log(reading.taxableCharge);
