// function toSum(nums, target) {
//     let indices
    
//     for (let i in nums) {
//         for (let j in nums) {
//             if (nums[i] + nums[j] === 9) {
//                 indices = [j, i]
//             }
//         }
//     }

//     console.log(indices)
// }

function toSum(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(nums[i], i)
    }

    return null
}

console.log(toSum([23, 7, 11, 2], 9))