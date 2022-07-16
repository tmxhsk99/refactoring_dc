function printBanner() {
  // 배너를 출력
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}
// 총가격을 계산
function calculateOutstanding(invoice) {
  return invoice.orders.reduce((sum,order) => (sum += order.amount),0);
}

// 지급 날짜를 계산
function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
  );
}
//세부사항을 출력
function printDetail(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

export function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetail(invoice, outstanding);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
