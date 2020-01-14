// CAUTION!! -------------------------------------------------------------------
// Starting in version 5.5, do operator renamed to tap.
// REF: https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md
// -----------------------------------------------------------------------------

import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// tap(nextOrObserver: function, error: function, complete: function):
// Observable 透明地執行操作，不會影響元素的值，例如執行 console.log()。
// http://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-do

// 資料來源
const source$ = of(1, 2, 3, 4, 5);
const sourceObject$ = of(
    { name: 'poy', age: 32 },
    { name: 'john', age: 28 },
    { name: 'tom', age: 25 }
);

source$.pipe(tap(val => console.log(val))).subscribe();

// 練習
sourceObject$
    .pipe(
        tap(val => console.log(val)),
        map(val => val.age * 10),
        tap(val => console.log(val))
    )
    .subscribe();
