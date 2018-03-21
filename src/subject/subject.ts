import {Subject} from 'rxjs/Subject';

const subject$: Subject<number> = new Subject<number>();
let i = 0;

const interval = setInterval(() => {
  subject$.next(i++);
}, 1000);

subject$.subscribe(data => {
  if (data === 3)
    clearInterval(interval);
  console.log(data);
});
