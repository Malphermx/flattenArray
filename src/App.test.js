import { render, screen } from '@testing-library/react';
import App from './App';
import { flatten } from './App';


var flat_arr1 = [1, 2, 3, 4, 5]
var flat_arr2 = [6, 1, 2, 3, 4, 5]
var flat_arr3 = [1, 2, 3, 4, 5]

test('First Array tested',()=>{
  expect(flatten([1, [2, [3, [4, 5]]]])).toEqual(flat_arr1);
})
test('Second Array tested',()=>{
  expect(flatten([6, [1, [2, 3], 4], 5])).toEqual(flat_arr2);
})
test('Third Array tested',()=>{
  expect(flatten([[[1, 2,], 3], 4, 5])).toEqual(flat_arr3);
})
test('funtion flatten acept only arrays',()=>{
  expect(flatten(1)).toEqual("No es un arreglo");
  expect(flatten("asASs")).toEqual("No es un arreglo");
})