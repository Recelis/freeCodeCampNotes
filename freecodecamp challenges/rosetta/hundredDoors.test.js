const hundredDoors = require('./hundredDoors');


// SMALLER THAN ZERO
test('negative doors return: ', ()=>{
    expect(hundredDoors(-1)).toEqual(null);
});     

test('0 doors return: ', ()=>{
    expect(hundredDoors(0)).toEqual(null);
});     

test('one door return: ', ()=>{
    expect(hundredDoors(1)).toEqual([1]);
});     

// TEST LOWER END UP TO 5 OF ALGORITHM
test('2 door return: ', ()=>{
    expect(hundredDoors(2)).toEqual([1]);
});     

test('3 door return: ', ()=>{
    expect(hundredDoors(3)).toEqual([1]);
});     

test('4 door return: ', ()=>{
    expect(hundredDoors(4)).toEqual([1, 4]);
});     

test('5 door return: ', ()=>{
    expect(hundredDoors(5)).toEqual([1, 4]);
});     


