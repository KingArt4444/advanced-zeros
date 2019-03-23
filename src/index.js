module.exports = function getZerosCount(number, base) {
    var flag = 0;
  for(var i = 2; i<=base; i++){
      if(base % i == 0){
       var del_num = 0;
       var del_base = 0;
    //  var bs = base;
       while(base % i == 0){
          del_base++;
          base = Math.floor(base / i);
       }
      
       var num = number;
       while(Math.floor(num / i) > 0){
          del_num = del_num + Math.floor(num / i);
          num = Math.floor(num / i);
       }
          if(flag == 0){
              var zeros = Math.floor(del_num / del_base);
              flag++;
          }else{
               var zeros = Math.min(zeros, Math.floor(del_num / del_base));
              }
     }
 }
    return zeros;
}