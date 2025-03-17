const { convertPersianNumbers } = require("../src/index");

test("converts Persian numbers to English numbers", () => {
  expect(convertPersianNumbers("۰۱۲۳۴۵۶۷۸۹")).toBe("0123456789");
});
