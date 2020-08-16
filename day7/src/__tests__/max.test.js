//max.js 함수를 실행해서 결과값 도출하기 test하기
const max = require("...max")


test("max test",() => {
    expect(max(1, 5)).toBe(5)
    expect(max(-1, 5)).toBe(5)
    expect(max(3, 6)).toBe(6)
});