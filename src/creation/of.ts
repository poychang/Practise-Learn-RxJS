import {interval} from 'rxjs/Observable/interval';
import {of} from 'rxjs/Observable/of';

// of(...values, scheduler: Scheduler): Observable
// 按順序發出任意數量的值。
// 值可以是 number, object... 甚至是 function
// https://rxjs-cn.github.io/learn-rxjs-operators/operators/creation/of.html

// 資料來源：每 1 秒發出數字序列中的值
const source$ = of(0, 1, 2, 3, 4);
// ---0--1--2--3--4|
source$.subscribe(val => console.log(val));

const sourceObj$ =
  of<any>({ name: 'Brian' }, [1, 2, 3], function hello() { return 'Hello'; });
sourceObj$.subscribe(val => console.log(val));
