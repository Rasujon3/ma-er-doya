// function
function inputAdd(dValue, dOutput, bOutput) {
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
}

// deposit
function deposit() {
  /* let depositValue = document.getElementById("deposit-value");
  let depositOutput = document.getElementById("deposit-output");
  let balanceOutput = document.getElementById("balance-output");

  depositOutput.innerText =
    Number(depositOutput.innerText) + Number(depositValue.value);

  balanceOutput.innerText =
    Number(balanceOutput.innerText) + Number(depositValue.value);

  // clear input
  depositValue.value = ""; */
  inputAdd("deposit-value", "deposit-output", "balance-output");
}

// withdraw
function withdraw() {
  // let withdrawValue = document.getElementById("withdraw-value");
  // let withdrawOutput = document.getElementById("withdraw-output");
  // let balanceOutput = document.getElementById("balance-output");

  // if (Number(balanceOutput.innerText) > Number(withdrawOutput.innerText)) {
  //   withdrawOutput.innerText =
  //     Number(withdrawOutput.innerText) + Number(withdrawValue.value);
  //   balanceOutput.innerText =
  //     Number(balanceOutput.innerText) - Number(withdrawValue.value);
  // } else {
  //   alert("Unsufficient Balance");
  // }

  // // clear input
  // withdrawValue.value = "";
  inputAdd("withdraw-value", "withdraw-output", "balance-output");
}
