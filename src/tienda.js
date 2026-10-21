export function aplicarDescuento(total){
    if(total >= 50000){
        return total * 0.9;
    }
    return total;
}