import ceasarCipher from '../code/caesar_cipher';

test('all lowercase, shift 1', () => {
    expect(ceasarCipher("hello world", 1)).toBe("ifmmp xpsme");
});

test('all uppercase, shift 1', () => {
    expect(ceasarCipher("HELLO WORLD", 1)).toBe("IFMMP XPSME");
});

test('uppercase and lowercase, shift 1', () => {
    expect(ceasarCipher("HeLlO wORLd", 1)).toBe("IfMmP xPSMe");
});

test('shift 5', () => {
    expect(ceasarCipher("hello world", 5)).toBe("mjqqt btwqi");
});

test('shift 23', () => {
    expect(ceasarCipher("hello world", 17)).toBe("yvccf nficu");
});

test('shift 50', () => {
    expect(ceasarCipher("hello world", 50)).toBe("fcjjm umpjb");
});

test('shift -1', () => {
    expect(ceasarCipher("hello world", -1)).toBe("gdkkn vnqkc");
});

test('shift -5', () => {
    expect(ceasarCipher("hello world", -5)).toBe("czggj rjmgy");
});

test('shift -100', () => {
    expect(ceasarCipher("hello world", -100)).toBe("lipps asvph");
});

test('non-alphabets stay the same', () => {
    expect(ceasarCipher("@he!^ll,),o w:or?l3d...", 9)).toBe("@qn!^uu,),x f:xa?u3m...");
});