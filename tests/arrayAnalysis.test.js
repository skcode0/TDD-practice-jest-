import arrayAnalysis from '../code/arrayAnalysis';

test("empty arr", () => {
    expect(arrayAnalysis([])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 0
    });
});

test("arr of numbers", () => {
    expect(arrayAnalysis([10, 39, 34, 9834, 0.342, -2])).toEqual({
        average: 1652.56,
        min: -2,
        max: 9834,
        length: 6
    });
});

test("arr of stringed numbers", () => {
    expect(arrayAnalysis(["1", "2", 3, "10", "-10"])).toEqual({
        average: 1.2,
        min: -10,
        max: 10,
        length: 5 
    });
});