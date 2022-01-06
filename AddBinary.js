/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let result = "";
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    while (i >= 0 || j >= 0) {
        let sum = carry;

        if (i >= 0) {
            sum += a[i--] - '0';
        }

        if (j >= 0) {
            sum += b[j--] - '0';
        }

        result = sum % 2 + result;
        carry = parseInt(sum / 2);
    }
        if (carry > 0) {
        result = 1 + result;
        }

        return result;
    
};


/*

- Set a variable carry.
- Check the strings going right to left.
- Calculate and set the sum variable by adding the two bits represented by the characters and add carry to it.
- Take the sum modulo 2, in other words the sum % 2.
- Thats because it is a binary.
- Then add it in front of the existing result string.
- Set the carry variable by taking sum / 2 for the next iteration.
- Check if the value of the carry is more than zero after the last iteration. 
- If exist then add it to the front of the result.

*/
