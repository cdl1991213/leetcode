/* 
    150. 逆波兰表达式求值
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const n = tokens.length

    let Stack = []
    let left, right
    for(let i=0; i<n; i++){
        switch(tokens[i]){
            case '+':
                right = Stack.pop()
                left = Stack.pop()
                Stack.push(parseInt(left) + parseInt(right))
                break
            case '-':
                right = Stack.pop()
                left = Stack.pop()
                Stack.push(parseInt(left) - parseInt(right))
                break
            case '*':
                right = Stack.pop()
                left = Stack.pop()
                Stack.push(parseInt(left) * parseInt(right))
                break
            case '/':
                right = Stack.pop()
                left = Stack.pop()
                Stack.push(Math.floor(parseInt(left) / parseInt(right)))
                break
            default:
                Stack.push(tokens[i])
                break
        }
        console.log(Stack)
    }
    return Stack.pop()
};
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))