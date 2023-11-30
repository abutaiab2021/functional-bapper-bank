document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawValue = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getElementTextValueById("withdraw-total");

  if (newWithdrawValue > previousWithdrawTotal) {
    alert("Bapper Bank Atto tk Nai");
    return;
  }

  if (isNaN(newWithdrawValue)) {
    alert("Please Provide Valid withdraw Amount");
    return;
  }
  const currentWithdrawTotalAmount = previousWithdrawTotal + newWithdrawValue;
  setTexElementValueById("withdraw-total", currentWithdrawTotalAmount);

  const previousBalanceTotal = getElementTextValueById("balance-total");
  const currentBalanceTotalAmount = previousBalanceTotal - newWithdrawValue;
  setTexElementValueById("balance-total", currentBalanceTotalAmount);
});

// exit form
document.getElementById("btn-exit").addEventListener("click", function () {
  window.location = "index.html";
});
