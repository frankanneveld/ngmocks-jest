import { discardPeriodicTasks, fakeAsync, tick } from '@angular/core/testing';
import { concatMap, delay, from, map, of, tap } from 'rxjs';

describe('testing arrays', () => {
  it('testing rxjs', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const obs$ = from(arr).pipe(map((r) => r + 1));
    const expected = 55;

    let count = 0;
    obs$.subscribe((res) => (count += res));

    expect(count).toEqual(expected);
    expect(count).toBe(expected);
    expect(count).not.toBe(0);
  });

  it('testing fakeAsync', fakeAsync(() => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const obs$ = from(arr).pipe(
      concatMap((item) => of(item).pipe(delay(100))),
      tap(console.log)
    );

    let result = null;
    obs$.subscribe((res) => {
      // console.log(res, res === 1);
      result = res;
    });

    // Elke tick zorgt voor een timeout op de volgende itteratie.
    // Met een tussen dalay van 100 ms. op elke itteratie.
    tick(100);
    expect(result).toBe(1);
    tick(100);
    expect(result).toBe(2);
    tick(100);
    expect(result).toBe(3);
    tick(700);
    expect(result).toBe(10);

    // Op dit punt blijft er nog 1 periodic timer in de queue.
    // Omdat de totale tijd 1000 ms zou dit uitkomen op positie 10 in de array.
    // Waarde 11 wordt meegenomen in de queue maar wordt vervolgens niet afgehandelt in de tick().
    // Om de periodieke timers te stoppen : discardPeriodicTasks();
    tick(100);
    // discardPeriodicTasks();
  }));
});
