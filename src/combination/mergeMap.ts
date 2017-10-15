import {from} from 'rxjs/Observable/from';
import {interval} from 'rxjs/Observable/interval';
import {of} from 'rxjs/Observable/of';
import {mapTo, mergeMap} from 'rxjs/operators';

// merge(input: Observable): Observable
// 將多個 observables 轉換成單個 observable。
// 產生值的順序不是首要考慮的。
// https://rxjs-cn.github.io/learn-rxjs-operators/operators/combination/merge.html

// 資料來源
// 每 1 秒發出值
const source1$ = from([1, 1]);
// 每 2.5 秒發出值
const source2$ = from([10, 20, 30]);

// ---1s--1s--2.5s--1s--1s---
source1$.pipe(mergeMap(val => source2$)).subscribe(val => console.log(val));
