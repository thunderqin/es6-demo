for(let i=0;i<10;i++){}
// console.log(i) 报错

var a = [];
for(let j=0;j<10;j++){
   a[j]=function(){console.log(j)}
}

a[6]();
