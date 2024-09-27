// add money to account

                    
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoneyInput =document.getElementById('input-add-money').value;

    const pinNumberInput =document.getElementById('input-pin-number').value;
    console.log(addMoneyInput,pinNumberInput);



    if (pinNumberInput=== '1234'){
        console.log('add money to the account ')

        const balance = document.getElementById('Account-balance')
    }
    else{
        alert('Fail to add money !please try again') 
    }


    
});
