export function adjustedCapital(instrument) {
    return isElegiableForAdjuestedCaptital(instrument) ? (instrument.income / instrument.duration) * anInstrument.adjustmentFactor : 0;
}

function isElegiableForAdjuestedCaptital(instrument) {
    return instrument.capital > 0 && instrument.interestRate > 0 && instrument.duration > 0;
}
