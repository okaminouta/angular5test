import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  loadedFeature = 'recipe';
  showButton = true;
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  // ngOnInit() {
  //     console.log('init');
  //     if (localStorage.getItem('list') !== null) {
  //       this.staffArr = (JSON.parse(localStorage.getItem('list')));
  //     }
  // }
  //
  // title: string = 'app';
  // staffArr = [];
  // titleArr = [];
  // hey = {};
  //
  //
  //
  // onHedderClick(index) {
  //   this.staffArr.splice(index, 1);
  //   localStorage.setItem('list', JSON.stringify(this.staffArr));
  // }
  //
  // pushToArr() {
  //   this.staffArr.push(Object.assign({}, this.hey));
  //   localStorage.setItem('list', JSON.stringify(this.staffArr));
  // }
}
