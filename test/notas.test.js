import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { aprobados, clasificar, promedio } from '../src/notas.js';

describe('Notas', () => {
    test('3.99 devuelve LIBRE', () => {
        const nota = 3.99;
        const resultado = clasificar(nota);
        assert.equal(resultado, 'LIBRE');
    });
    test('4 devuelve REGULAR', () => {
        const nota = 4;
        const resultado = clasificar(nota);
        assert.equal(resultado, 'REGULAR');
    });
    test('5.99 devuelve REGULAR', () =>{
        const nota = 5.99;
        const resultado = clasificar(nota);
        assert.equal(resultado, 'REGULAR');
    });
    test('6 devuelve PROMOCIONA', () => {
        const nota = 6;
        const resultado = clasificar(nota);
        assert.equal(resultado, 'PROMOCIONA');
    });
    test('10 devuelve PROMOCIONA', () => {
        const nota = 10;
        const resultado = clasificar(nota);
        assert.equal(resultado, 'PROMOCIONA');
    });
    test('11 lanza RangeError', () =>{
        const nota = 11;
        assert.throws(() => clasificar(nota), RangeError);
    });
});

describe('Aprobados', () => {
    test('devuelve los valores mayores o iguales a 6', () =>{
        assert.deepEqual(aprobados([3, 6, 9, 5]), [6, 9]);
    });
    test('lista vacia lanza error', () => {
        assert.throws(() => aprobados([]));
    });
});

describe('Promedio', () => {
    test('[6, 8, 10] da 8', () => {
        assert.equal(promedio([6, 8, 10]), 8);
    });
    test('una sola nota devuelve esa nota', () => {
        assert.equal(promedio([7]), 7);
    });
    test('lista vacía lanza error', () => {
        assert.throws(() => promedio([]));
    });
});