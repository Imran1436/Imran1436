/*
        *
      * *
    * * *
  * * * *
* * * * *

*/
for(i=0;i<5;i++){
  str="";
  for(j=0;j<4-i;j++)   /*printing space*/
  str +="  "
  for(k=0;k<=i;k++){   /* printing star */
str +="* "
  }
  console.log(str)
}
