import reverseString from '../code/reverseString';

test('all lowercase', () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
});

test('all uppercase', () => {
    expect(reverseString('ALL CAPS')).toBe("SPAC LLA");
});

test('mix of lowercase and uppercase', () => {
expect(reverseString('tesTinG tHe CoDE')).toBe("EDoC eHt GniTset");
});
