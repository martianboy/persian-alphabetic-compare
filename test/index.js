import chai from 'chai';
import compare from '..';

describe('persianStringCompare', () => {
    function expect_letter_compare(letters) {
        return chai.expect(compare.apply(null, letters.split('|')));
    }

    it("must place Persian letter Peh after Beh and before Teh", () => {
        expect_letter_compare('ب|پ').to.be.lessThan(0);
        expect_letter_compare('پ|ت').to.be.lessThan(0);
    });
    it("must place Persian letter Cheh after Jim and before Heh", () => {
        expect_letter_compare('ج|چ').to.be.lessThan(0);
        expect_letter_compare('چ|ح').to.be.lessThan(0);
    });
    it("must place Persian letter Jeh after Zeh and before Sin", () => {
        expect_letter_compare('ز|ژ').to.be.lessThan(0);
        expect_letter_compare('ژ|س').to.be.lessThan(0);
    });
    it("must place Persian letter Kaf at the same place as Arabic Keh", () => {
        expect_letter_compare('ك|ک').to.be.eq(0);
    });
    it("must place Persian letter Gaf after Kaf", () => {
        expect_letter_compare('ک|گ').to.be.lessThan(0);
        expect_letter_compare('گ|ل').to.be.lessThan(0);
    });
    it("must place Arabic letter Teh marbuta after Persian Heh.", () => {
        expect_letter_compare('ه|ة').to.be.lessThan(0);
        expect_letter_compare('ة|و').to.be.lessThan(0);
    });
    it("must place Persian letter Heh with Yeh above at the same place as Arabic Teh marbuta", () => {
        expect_letter_compare('ۀ|ة').to.be.eq(0);
    });
    it("must place Arabic letter Waw with Hamza above after Persian Heh.", () => {
        expect_letter_compare('و|ؤ').to.be.lessThan(0);
        expect_letter_compare('ؤ|ی').to.be.lessThan(0);
    });
    it("must place Persian letter Yeh at the same place as Arabic Yeh with two dots below", () => {
        expect_letter_compare('ي|ی').to.be.eq(0);
    });
    it('must place Arabic letter Yeh with Hamza above after Persian Yeh', () => {
        expect_letter_compare('ی|ئ').to.be.lessThan(0);
    });

    it('must handle words with same first letters', () => {
        chai.expect(compare('کردکوی', 'کرمانشاه')).to.be.lessThan(0);
    });

    it('must ignore Arabic diacritics', () => {
        chai.expect(compare('امّا', 'اما')).to.be.eq(0);
    });

    it('must ignore Arabic diacritics at the end of the strings', () => {
        chai.expect(compare('مثلاٌ', 'مثلا')).to.be.eq(0);        
    });
});
