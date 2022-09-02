function calculateCharge(date, quantity, plan) {
  let charge = 0;

  function summer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }

  if (summer())
    charge = summerCharge();
  else charge = regularCharge();
  return charge;
}
