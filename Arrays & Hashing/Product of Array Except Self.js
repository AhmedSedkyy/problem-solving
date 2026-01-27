

// https://leetcode.com/problems/product-of-array-except-self/description/

//Time complexity: O(n)

var productExceptSelf = function(nums) {

    const result=[];
    const result2=[]
    let leftMul=1;
    let rightMul=1;
    result[0]=1;
    result2[nums.length-1]=1

    for(let i=1;i<nums.length;i++) {
        leftMul*=nums[i-1]
        result[i]=leftMul
    }

    for(let i=nums.length-2;i>=0;i--) {
        rightMul*=nums[i+1]
        result2[i]=rightMul
    }
    const res =[]
    for(let i=0;i<nums.length;i++) {
        res[i]=result[i]*result2[i]
    }
    return res

};


//Time complexity: O(n)

var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = []; 
    
    res[0] = 1;
    for (let i = 1; i < n; i++) {
        res[i] = nums[i - 1] * res[i - 1];
    }
    let Right = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= Right;
        Right *= nums[i];
    }

    console.log(res)
    return res;
};

productExceptSelf([-1,1,0,-3,3])

