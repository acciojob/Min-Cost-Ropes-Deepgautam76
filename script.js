function mincost(arr)
{ 
//write your code here
// return the min cost 
	let sum=0;
	while(arr.length>1){
		arr.sort((a,b)=>a-b);
		const cost=arr[0]+arr[1];
		arr.splice(0,2);
		sum+=cost;
		arr.push(sum);
     }
	
	return sum;
}

module.exports=mincost;
