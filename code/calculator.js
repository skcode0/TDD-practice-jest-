let calculator = {
    add(a=0, b=0){
        return a + b;
    },

    subtract(a=0, b=0){
        return a - b;
    },

    multiply(a=1, b=1){
        return a * b;
    },

    divide(a=1, b=1){
        if(b === 0) return "undefined";
        return a / b;
    },
}

export { calculator }