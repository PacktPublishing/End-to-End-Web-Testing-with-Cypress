describe('Our Passing Test', () => {
    it('returns true', () => {
        expect(true).to.equal(true);
    });
});

describe('Our Failing Test', () => {
    it('returns false', () => {
        expect(true).to.equal(false);
    });
});

describe.skip('Our Skipped Tests', () => {
    it('does not execute', () => {
        expect(true).to.equal(false);
    });
    it.skip('is skipped', () => {
        expect(true).to.equal(false);
    });
});
