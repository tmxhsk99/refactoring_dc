// 예제 1
class Order {
  //discount 호출시 다른 필드 변수에 값도 변화 시키므로 getdiscountTotal 호출시 해당값이 최신인지 아닌지 알수가 없으므로
  //호출 시 해당 값을 계산하도록 리팩터링

  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._basePrice - this._discount;
  }
  set discount(value) {
    const old = this._discount;
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  // applyAdjust에서도 동일한 문제가 있으므로 
  // 직접 가져오는 순간에 계산하도록 수정

  // 다른 코드 있다고 가정
  get production() {
    return _adjustment.reduce((sum,a)=> sum + a.amount,0);
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
