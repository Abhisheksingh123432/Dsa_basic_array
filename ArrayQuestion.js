 //  reverse of an array starts

  
  let arr=[1,2,3,4,5];
  let k=2
  function RotateArray(start,end) {
    console.log('secon large  ====');
    
  
    while (start<end) {
      let temp = arr[start]
      arr[start]=  arr[end]
      arr[end] =temp
      start++
      end--
    
     //s console.log('arr',arr[start])
    }
    console.log('arr total',arr)
  }
  RotateArray(0,arr.length-1);
  RotateArray(0,k-1)
  RotateArray(k,arr.length-1) 

  //  reverse of an array endss