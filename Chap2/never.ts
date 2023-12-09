function oldEnough(age: number): never | boolean {
    if(age >= 59){
        throw Error('Old enought');
    }
    if(age <= 18){
        return false;
    }
    return true;
}