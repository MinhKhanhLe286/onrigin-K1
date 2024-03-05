
/*#### Giới thiệu 1 số hàm built-in  ######
 1. Alert
 2. Console  
 3. Confirm
 4. Prompt
 5. Set timeout
 6. Set interval
 */

// setInterval(
//     function(){
//         console.log('I am Khanh'+Math.random()%100);
//     },
//     1000
// )
function get_abs(n){
	var abs;
    if (n < 0) {
	n = n * -1;
    }
    abs = n
    return abs;
}
console.log(get_abs(3));
 
