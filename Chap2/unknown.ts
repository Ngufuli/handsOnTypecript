let val: unknown = 11;
val = "Eleven";
val = new Array();

if(val instanceof Array){
    val.push(22)
}

console.log(val)
