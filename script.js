// function
function inputAdd() {}

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

// withdraw
function withdraw() {
  let withdrawValue = document.getElementById("withdraw-value");
  let withdrawOutput = document.getElementById("withdraw-output");
  let balanceOutput = document.getElementById("balance-output");

  if (Number(balanceOutput.innerText) > Number(withdrawOutput.innerText)) {
    withdrawOutput.innerText =
      Number(withdrawOutput.innerText) + Number(withdrawValue.value);
    balanceOutput.innerText =
      Number(balanceOutput.innerText) - Number(withdrawValue.value);
  } else {
    alert("Unsufficient Balance");
  }

  // clear input
  withdrawValue.value = "";
}
