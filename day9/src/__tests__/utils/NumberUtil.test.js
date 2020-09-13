import {comma} from "../../utils/NumberUtil";

it("comma", () => {
  expect(comma(1000)).toBe("1,000")
  expect(comma(1000000)).toBe("1,000,000")
  expect(comma(-1000)).toBe("-1,000")
  expect(comma(1234)).toBe("1,234")
})