const rosetta = require('./rosetta');

test('one door', ()=>{
    expect(rosetta(1)).toEqual([true]);
}); 