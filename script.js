// deposit
function deposit() {
  let depositValue = document.getElementById("deposit-value");
  let depositOutput = document.getElementById("deposit-output");
  let balanceOutput = document.getElementById("balance-output");

  depositOutput.innerText =
    Number(depositOutput.innerText) + Number(depositValue.value);

  balanceOutput.innerText =
    Number(balanceOutput.innerText) + Number(depositValue.value);

  // clear input
  depositValue.value = "";
}
