import {of} from 'rxjs/Observable/of';
import {map} from 'rxjs/operators';

// map(project: Function, thisArg: any): Observable
// 對源 observable 的每個值應用投射函式。
// https://rxjs-cn.github.io/learn-rxjs-operators/operators/transformation/map.html

// 資料來源
const source$ = of(1, 2, 3, 4, 5);
const sourceObject$ = of({ name: 'poy', age: 32 },
                         { name: 'john', age: 28 },
                         { name: 'tom', age: 25 });

source$.pipe(map(val => val * 10)).subscribe(p => console.log(p));

// 資料轉換
sourceObject$.pipe(map(val => val.age < 30)).subscribe(val => console.log(val));
sourceObject$.pipe(map(val => val.name)).subscribe(val => console.log(val));
