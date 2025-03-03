namespace Cars{
    class FourWheeler{
        w_name: string = "Mercedes"
    }

    class SixWheeler{
        s_name: string = 'Volvo'
    }

    const w = new FourWheeler();
    const f = new SixWheeler();

    const a = {...w, ...f};
    const b = Object.assign(w, f);
    console.log(a);
    console.log(b);

    w.w_name = 'Beamer';
    console.log(a);
    console.log(b);
}