import { of } from 'rxjs';
import { concat } from 'rxjs/operators';

// concat(observables: ...*): Observable
// 按照順序，前一個 observable 完成了再訂閱下一個 observable 並發出值。
// https://rxjs-cn.github.io/learn-rxjs-operators/operators/combination/concat.html

// 資料來源
const source1$ = of(1, 2, 3);
const source2$ = of(4, 5);
const sourceObject$ = of(
    { name: 'poy', age: 32 },
    { name: 'john', age: 28 },
    { name: 'tom', age: 25 }
);
const concatSource1and2$ = source1$.pipe(concat(source2$));
concatSource1and2$.subscribe(val => console.log(val));

sourceObject$
    .pipe(concat(source1$, source2$))
    .subscribe(val => console.log(val));
