$(function(){
    
    chrome.storage.local.get('limit',function(budget){
        if(budget.limit){
            $('#opt_limit').text(parseInt(budget.limit));
         } 
    });
    $('#submit_limit').click(function(){
        var newLimit = $('#limit_amount').val();
        //console.log(newLimit);
        chrome.storage.local.set({'limit': newLimit});
        $('#opt_limit').text(newLimit);
    });

    $('#reset_total').click(function(){
        chrome.storage.local.set({'total':0},function(){
            var notifOptionsReset = {
                type : 'basic',
                iconUrl : 'icon48.png',
                title : 'Reset Spend amount!',
                message : 'You spend is reset to 0.'
            };
            chrome.notifications.create('resetNotif',notifOptionsReset);
        });
    });
});