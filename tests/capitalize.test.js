import capitalize from '../code/capitalize';

test('all lowercase', () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test('all uppercase', () => {
  expect(capitalize('ALL CAPS')).toBe("ALL CAPS");
});

test('mix of lowercase and uppercase', () => {
  expect(capitalize('tesTinG tHe CoDE')).toBe("TesTinG tHe CoDE");
});
