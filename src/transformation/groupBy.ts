import { of } from 'rxjs';
import {
    concat,
    groupBy,
    last,
    mergeMap,
    reduce,
    take,
    tap
} from 'rxjs/operators';

// groupBy(keySelector: Function, elementSelector: Function): Observable
// 基於提供的值分組成多個 observables。
// http://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-groupBy

// 資料來源
const source$ = of(1, 2, 3, 4, 5);
const sourceObject$ = of(
    { name: 'poy', age: 32 },
    { name: 'john', age: 23 },
    { name: 'lisa', age: 28 },
    { name: 'bob', age: 28 },
    { name: 'tom', age: 32 }
);

// 練習
sourceObject$
    .pipe(
        groupBy(val => val.age),
        take(2),
        tap(group => group.pipe(tap(p => console.log(p))).subscribe())
    )
    .subscribe();
