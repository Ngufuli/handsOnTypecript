class One {
    name: string = 'First';
    go(){
        console.log(this.name)
    }
}

class Two{
    name: string = 'Second';
    go(){
        console.log(this.name);
    }
}

const eins = new One();
eins.go();

const twei = new Two();
twei.go();

twei.go = twei.go.bind(eins);
twei.go();