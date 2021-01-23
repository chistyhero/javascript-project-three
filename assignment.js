function kilometerToMeter (num){
    var result =  num * 1000;
    return result;
    }
     var meteroutput = kilometerToMeter (10);
     console.log(meteroutput);
    
     
     
function budgetCalculator (watch, phone, laptop){
  
    var watch = watch * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;
     var totalprice =watch + phone + laptop;
      return totalprice;
  }
  var sum = budgetCalculator (watch = 4, phone = 3, laptop = 2);
  console.log(sum);
  
  

  function hotelCost (totalDays){
    var totalHotelCost = 0;
    
    if(totalDays<=10){
    totalHotelCost = totalDays * 100;
    }
    else if(totalDays<=20){
        var firstTenDays = 10*100;
        var remaining = totalDays-10;
        var secondTenDays = remaining*80;
        totalHotelCost = firstTenDays+secondTenDays;
    }
    else {
        var firstTenDays = 10*100;
        var secondTenDays= 10*80;
        var remaining = totalDays-20;
        var outOfTwentydays = remaining*50;
        totalHotelCost = firstTenDays + secondTenDays + outOfTwentydays;
    }
    return totalHotelCost;
    
    }
    var count = hotelCost (23);
    console.log(count);


    function megaFriend(myFriends){
        var maximumWords = 0;
        var largest;
         for (i=0; i<myFriends.length; i++){
        
             if(myFriends[i].length > maximumWords){
            var maximumWords = myFriends[i].length;
            largest = myFriends[i];
             }
         }
        return largest;
        }
        
        var myFriends = ['salam', 'tarif', 'roki', 'moniruzzaman'];
         var finalResult = megaFriend(myFriends);
         console.log(finalResult);