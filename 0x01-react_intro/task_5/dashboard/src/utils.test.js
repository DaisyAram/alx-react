import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Get full year", function() {
  it("should return the correct year", function() {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
})


describe("Get footer copy", function() {
    it('returns "Holberton School" when isIndex is true', function() {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    it('returns "Holberton School main dashboard" when isIndex is false', function() {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
});

describe("Get latest notification", function() {
  it("should return the urgent message text", function() {
    const message = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(message).toBe(getLatestNotification());
  });
})
