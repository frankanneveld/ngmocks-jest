import { from, map } from "rxjs";

describe('Arrays to test with RxJs', () => {
it('should do something', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const obs$ = from(arr).pipe(map((r) => r + 1));
    const expected = 55;

    let count = 0;
    obs$.subscribe((res) => (count += res));

    expect(count).toEqual(expected);
    expect(count).toBe(expected);
    expect(count).not.toBeNull();
  });

  it('should do something with array subscribtion', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const obs$ = from(arr);

    obs$.subscribe((res) => {
      console.log(res, res === 1);
      expect(res).not.toBe(56)
    });

  });
});
