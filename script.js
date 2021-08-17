function DepositWithdrawBalance(inputId, amount, isAddition) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    const specificTotalAmountText = document.getElementById(amount).innerText;
    const specificTotalAmount = parseFloat(specificTotalAmountText);
    const totalBalanceText = document.getElementById('total-balance').innerText;
    const totalBalance = parseFloat(totalBalanceText);

        if(inputAmount > 0) {
            if(isAddition == true) {
                document.getElementById(amount).innerText = specificTotalAmount + inputAmount;
                document.getElementById('total-balance').innerText = totalBalance + inputAmount;
            }
            else if(isAddition == false  && inputAmount <= totalBalance) {
                document.getElementById(amount).innerText = specificTotalAmount + inputAmount;
                document.getElementById('total-balance').innerText = totalBalance - inputAmount;
            }
        }
    inputField.value = '';
}

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click',function() {
    DepositWithdrawBalance('deposit-field', 'deposit-total', true);
})

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click',function() {
        DepositWithdrawBalance('withdraw-field', 'withdraw-total', false);
})

