import { Component, OnDestroy } from '@angular/core';
import { retry, take, map, filter, Subscription} from 'rxjs';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor() {
    
    /*
    this.retornaOnservable().pipe(
      retry()
    ).subscribe(
      valor => console.log('Subs', valor),
      error => console.log(error),
      () => console.log('fi obs')
    );
    */
  this.intervalSubs = this.retornaIntervalo()
                       .subscribe(
                          (valor) => console.log( valor )
                       )

  }
  ngOnDestroy(): void {

    this.intervalSubs.unsubscribe();

  }

  retornaIntervalo(){

    const intervalo$ = interval(1000)
    .pipe(
      map( valor => {
        return valor + 1
      }),
      filter(valor => (valor % 2 === 0) ? true : false),
      //take(4), 
    );

    return intervalo$;
  }

  retornaOnservable(): Observable<number>{
    let i = -1;

    const obs$ = new Observable<number>(observer => {


      const interval = setInterval(() => {

        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000)

    });

    return obs$;
  }

}


