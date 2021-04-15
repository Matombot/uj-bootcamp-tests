function countAllPaarl(lists){
    var allCounter =0;
   // console.log(lists)
  var itemString = lists.split(",");
  for (var i=0;i<itemString.length;i++){
  const currentitem = itemString[i];
   if(currentitem.includes("CJ")){
    allCounter++;
    // console.log(allCounter)
    }
  }
    return allCounter;
  }