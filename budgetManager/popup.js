$(function() {
    
    chrome.storage.local.get(['total','limit'],function(budget){
        $('#total').text(budget.total);
        $('#limit').text(budget.limit);
    });
    
    $('#spendAmount').click(function(){
        chrome.storage.local.get('total',function(budget){
                
            var newTotal = 0;
            if(budget.total){
                //console.log(budget.total);
                newTotal += parseInt(budget.total);
            }
            var amount = $('#amount').val();
            if(amount){
                newTotal += parseInt(amount);
            }

            //console.log(newTotal);

            chrome.storage.local.set({'total': newTotal},function(){
                if(amount && newTotal >= parseInt($('#limit').text())){
                    console.log(parseInt($('#limit').text()));
                    var notifOptions = {
                        type : 'basic',
                        iconUrl : 'icon48.png',
                        title : 'Limit reached!',
                        message : 'You reached limit'
                    };
                    chrome.notifications.create('limitNotif',notifOptions);
                }
            });

            $('#total').text(newTotal);
            $('#amount').val('');

        });
    });
});