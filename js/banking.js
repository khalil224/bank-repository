//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    //deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositTotal + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;
    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const previousBalanceTotal = balanceTotalAmount + parseFloat(newDepositAmount);
    balanceTotal.innerText = previousBalanceTotal;
    //clear the input value
    depositInput.value = '';
})
//withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(withdrawAmountText);
    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    //update total balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw input
    withdrawInput.value = '';


})
