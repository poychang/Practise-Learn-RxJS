import { of } from 'rxjs';
import { last, tap } from 'rxjs/operators';

// last(predicate: function): Observable
// 根據提供的表達式，在源 observable 完成時發出它的最後一個值。
// http://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-last

// 資料來源
const source$ = of(1, 2, 3, 4, 5, 6);
const sourceObject$ = of(
    { name: 'poy', age: 32 },
    { name: 'john', age: 28 },
    { name: 'tom', age: 25 }
);

// 取最後一個值
source$
    .pipe(
        last(),
        tap(p => console.log(p))
    )
    .subscribe();
sourceObject$
    .pipe(
        last(),
        tap(p => console.log(p))
    )
    .subscribe();

// 符合條件(predicate)的最後一個值
source$
    .pipe(
        last(p => p % 2 === 0),
        tap(p => console.log(p))
    )
    .subscribe();
sourceObject$
    .pipe(
        last(p => p.age < 30),
        tap(p => console.log(p))
    )
    .subscribe();

// 第二個參數為預設值，如沒有資料時，則輸出第三個參數值
source$
    .pipe(
        last(p => p < 0, 'NOTHING!!'),
        tap(p => console.log(p))
    )
    .subscribe();
