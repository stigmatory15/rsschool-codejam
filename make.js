function sum(a, b) {
    return a + b;
}

function make(a) {
    return function (b, c, d) {
        return function (e) {
            return function (sum) {
                return [a, b, c, d, e].reduce(sum, 0);
            }
        }
    }
}

console.log(make(15)(34,21,41)(666)(sum));