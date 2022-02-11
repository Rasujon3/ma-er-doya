// function
/* function inputAdd(dValue, dOutput, bOutput) {
  let inputValueText = document.getElementById(dValue);
  let outputText = document.getElementById(dOutput);
  let totalBalance = document.getElementById(bOutput);

  if (
    dValue == "deposit-value" &&
    dOutput == "deposit-output" &&
    bOutput == "balance-output"
  ) {
    outputText.innerText =
      Number(outputText.innerText) + Number(inputValueText.value);

    totalBalance.innerText =
      Number(totalBalance.innerText) + Number(inputValueText.value);
  } else {
    if (Number(totalBalance.innerText) >= Number(outputText.innerText)) {
      outputText.innerText =
        Number(outputText.innerText) + Number(inputValueText.value);
      totalBalance.innerText =
        Number(totalBalance.innerText) - Number(inputValueText.value);
    } else {
      alert("Unsufficient Balance");
    }
  }

  // clear input
  inputValueText.value = "";
} */

// deposit
let depositValue = document.getElementById("deposit-value");
let depositOutput = document.getElementById("deposit-output");

// withdraw
let withdrawValue = document.getElementById("withdraw-value");
let withdrawOutput = document.getElementById("withdraw-output");

// total balance
let balanceOutput = document.getElementById("balance-output");

function addMoney(currentAmount, newAmount) {
  return Number(currentAmount) + Number(newAmount);
}
function getMoney(currentAmount, newAmount) {
  return Number(currentAmount) - Number(newAmount);
}

// deposit
function deposit() {
  const totalDeposit = addMoney(depositOutput.innerText, depositValue.value);
  depositOutput.innerText = totalDeposit;

  const totalBalance = addMoney(balanceOutput.innerText, depositValue.value);
  balanceOutput.innerText = totalBalance;

  depositValue.value = "";
}

// withdraw
function withdraw() {
  if (Number(balanceOutput.innerText) >= Number(withdrawOutput.innerText)) {
    const totalWithdraw = addMoney(
      withdrawOutput.innerText,
      withdrawValue.value
    );
    withdrawOutput.innerText = totalWithdraw;
    const totalBalance = getMoney(balanceOutput.innerText, withdrawValue.value);
    balanceOutput.innerText = totalBalance;
  } else {
    alert("Unsufficient Balance");
  }

  withdrawValue.value = "";
}
