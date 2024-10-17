let val: unknown = 23;
val = "String value";
val = new Array();
if(val instanceof Array){
    val.push(35)
}

console.log(val);