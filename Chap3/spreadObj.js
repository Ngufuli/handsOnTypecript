var Cars;
(function (Cars) {
    class FourWheeler {
        constructor() {
            this.w_name = "Mercedes";
        }
    }
    class SixWheeler {
        constructor() {
            this.s_name = 'Volvo';
        }
    }
    const w = new FourWheeler();
    const f = new SixWheeler();
    const a = Object.assign(Object.assign({}, w), f);
    const b = Object.assign(w, f);
    console.log(a);
    console.log(b);
    w.w_name = 'Beamer';
    console.log(a);
    console.log(b);
})(Cars || (Cars = {}));
