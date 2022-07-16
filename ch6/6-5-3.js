//함수내부에서 필요로하는 변수만 받아오게 하므로 함수의 재사용성을 높임
//근데 객체단위로만 많이 쓰는 경우는 안해도 된다. 책에나옴
export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
