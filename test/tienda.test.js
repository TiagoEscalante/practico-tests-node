import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { aplicarDescuento } from '../src/tienda.js';

describe('aplicarDescuento', () => {
    test('total de 40000 devuelve 40000', () => {
        const total = 40000;
        const resultado = aplicarDescuento(total);
        assert.equal(resultado, 40000);
    });
    test('total de 60000 devuelve 54000', () =>{
        const total = 60000;
        const resultado = aplicarDescuento(total);
        assert.equal(resultado, 54000);
    });
    test('total de 50000 devuelve 45000', () => {
        const total = 50000;
        const resultado = aplicarDescuento(total);
        assert.equal(resultado, 45000);
    });
});