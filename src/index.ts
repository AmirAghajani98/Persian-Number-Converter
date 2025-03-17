export const convertPersianNumbers = (input: string): string => {
  const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ];
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let output = input;
  for (let i = 0; i < 10; i++) {
    output = output.replace(
      new RegExp(persianNumbers[i], "g"),
      englishNumbers[i]
    );
  }
  return output;
};
