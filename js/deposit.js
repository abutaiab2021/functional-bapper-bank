document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositValue = getInputFieldValueById("deposit-field");
  const previousDepositTotal = getElementTextValueById("deposit-total");
  if (isNaN(newDepositValue)) {
    alert("Please Provide Valid Deposit Amount");
    return;
  }
  const currentDepositTotalAmount = previousDepositTotal + newDepositValue;
  setTexElementValueById("deposit-total", currentDepositTotalAmount);

  const previousBalanceTotal = getElementTextValueById("balance-total");
  const currentBalanceTotalAmount = previousBalanceTotal + newDepositValue;
  setTexElementValueById("balance-total", currentBalanceTotalAmount);
});
