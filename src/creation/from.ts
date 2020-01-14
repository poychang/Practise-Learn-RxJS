import { from, interval } from 'rxjs';

// from(ish: ObservableInput, mapFn: function, thisArg: any,
// scheduler:Scheduler): Observable
//
// 將數組、promise 或迭代器轉換成 observable 。
// https://rxjs-cn.github.io/learn-rxjs-operators/operators/creation/from.html

// 將陣列轉成 Observable，並將值依序發出
const source$ = from([0, 1, 2, 3, 4]);
// ---0--1--2--3--4|
source$.subscribe(val => console.log(val));

// 將字串轉成 Observable，並將字元依序發出
const sourceString$ = from<string>('Hello World');
sourceString$.subscribe(val => console.log(val));

// 將集合轉成 Observable，並將值依序發出
const map = new Map();
map.set(1, { name: 'poy', age: 32 });
map.set(2, { name: 'john', age: 28 });
map.set(3, { name: 'tom', age: 25 });
const sourceMapObject$ = from(map);
sourceMapObject$.subscribe(val => console.log(val));
