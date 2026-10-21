export function clasificar(nota) {
    if (nota < 0 || nota > 10) throw new RangeError('Nota fuera de rango');
    if (nota >= 6) return 'PROMOCIONA';
    if(nota >= 4) return 'REGULAR';
    return 'LIBRE';
}