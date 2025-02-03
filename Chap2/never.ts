function goodEnough(marks: number): never | boolean{
    if(marks >= 80){
        throw("Excellent!")
    }if(marks < 80){
        return false
    }
    return true;
}

