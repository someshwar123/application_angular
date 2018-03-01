import { Component } from '@angular/core';
// import { FilterPipe } from '../filter-pipe';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  myControl: FormControl = new FormControl();
  title: String;
  constructor() {
    this.title = 'Search Your area';
  }
  options = ['MARATHAHALLI', 'SILKBOARD', 'HSR LAYOUT', 'K.R.PURAM', 'KORAMANGALA', 'KUNDALAHALLI', 'WHITEFIELD', 'INDIRANAGAR'];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
      startWith(''),
      map(val => this.filter(val))
      );
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

}













  //   title: String;
//   names: any;
//   constructor() {
//     this.title = 'Search Your area' ;
//         this.names = ['MARATHAHALLI', 'SILKBOARD', 'HSR LAYOUT', 'K.R.PURAM', 'KORAMANGALA', 'KUNDALAHALLI', 'WHITEFIELD', 'INDIRANAGAR',
//       'MADIWALA' ];
//   }
// }


//   myControl: FormControl = new FormControl();

//   options = ['MARATHAHALLI', 'SILKBOARD', 'HSR LAYOUT', 'K.R.PURAM', 'KORAMANGALA', 'KUNDALAHALLI', 'WHITEFIELD', 'INDIRANAGAR' ];

//   filteredOptions: Observable<string[]>;
//   constructor() {}
//   ngOnInit() {
//     this.filteredOptions = this.myControl.valueChanges
//       .pipe(
//         startWith(''),
//         map(val => this.filter(val))
//       );
//   }

//   filter(val: string): string[] {
//     return this.options.filter(option =>
//       option.toLowerCase().indexOf(val.toLowerCase()) === 0);
//   }
//    }