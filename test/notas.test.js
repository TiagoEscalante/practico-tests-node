import { test } from 'node:test';
import assert from 'node:assert/strict';
import { clasificar } from '../src/notas.js';

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