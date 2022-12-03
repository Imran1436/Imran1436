// for (i = 0; i < 5; i++) {
//     var str = "";
//     for (j = 0; j < 5-i; j++) {
//         str += "* "
//         // console.log(j)
//     }
//     console.log(str)
// }
/*
* * * * * 
* * * *
* * *
* *
*
*/
for (i = 5; i >0 ; i--) {
    var str = "";
    for (j = 0; j < i; j++) {
        str += "* "
        // console.log(j)
    }
    console.log(str)
}