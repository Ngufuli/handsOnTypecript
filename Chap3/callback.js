function letMeKnowWhencomplet(size, callback){
    var reducer = 0;
    for(var i = 1; i < size; i++){
        reducer = Math.sin(reducer * i);
    }
    callback();
}

letMeKnowWhencomplet(100000000, function(){
    console.log('Great it completed!');
});