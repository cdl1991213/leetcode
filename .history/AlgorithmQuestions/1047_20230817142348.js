/* 
    1047. 删除字符串中的所有相邻重复项
*/
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let sArr = Array.from(s)

    let Stack = []

    for(let i=1; i<sArr.length; i++){
        console.log(i)
        if(sArr[i] == sArr[i-1]){
            for(let j=0; j<i-1; j++){
                Stack.push(sArr.shift())
            }
            sArr.shift()
            sArr.shift()
            for(let j=0; j<i-1; j++){
                sArr.unshift(Stack.pop())
            }
            i = 0
            console.log(sArr)
        }
    }
    return sArr.join('')
};
console.log(removeDuplicates("abbaca"))