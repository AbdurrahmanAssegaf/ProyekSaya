const subtotal = [1500, 20000, 4000, 19000, 32000];

const total = subtotal.reduce((CurrentTotal, singleTotal) => {
    return CurrentTotal + singleTotal
})
