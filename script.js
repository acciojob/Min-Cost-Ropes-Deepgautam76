function mincost(arr)
{ 
//write your code here
// return the min cost 
	let sum=0,prev=0;
	arr.forEach((item)=>{
		prev=sum;
      sum=prev+sum+item;
	})
	return sum;
}

module.exports=mincost;
