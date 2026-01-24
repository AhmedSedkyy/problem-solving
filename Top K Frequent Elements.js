
// https://leetcode.com/problems/top-k-frequent-elements/description/


//Time complexity: O(n)

var topKFrequent = function(nums, k) {

    const bucket= []
    const seen=new Map();

    for ( let num of nums) {
        if(!seen.has(num)) {
            seen.set(num,0)
        }
        seen.set(num,seen.get(num)+1);
    }
    for( let [num,freq] of seen) {
        if(!bucket[freq])
            bucket[freq]=[]

        bucket[freq].push(num);
    }

    const res=[]
    for(let i=bucket.length-1;i>=0;i--) {
        if(bucket[i]) {
            for (let  num of bucket[i]) {
                res.push(num)   
                if (res.length===k) return res             
            }
        }
    }
};

topKFrequent([1,1,1,2,2,3,1,1],2)