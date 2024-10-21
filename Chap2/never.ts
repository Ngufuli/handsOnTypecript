function oldEnough(age: number): never | boolean{
    if(age > 69){
        throw("Too old")
    }
    if(age < 18){
        return false;
    }
    return true;
}