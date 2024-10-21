function oldEnough(age) {
    if (age > 69) {
        throw ("Too old");
    }
    if (age < 18) {
        return false;
    }
    return true;
}
