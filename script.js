function mincost(arr)
{ 
//write your code here
// return the min cost 
	if(arr.length==1) return 0;
	let sum=0;
	arr.forEach((item)=>{
      sum=sum+item;
	})
	return sum;
}

module.exports=mincost;
