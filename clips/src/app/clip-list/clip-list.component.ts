import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clip-list',
  templateUrl: './clip-list.component.html',
  styleUrls: ['./clip-list.component.css']
})
export class ClipListComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll)
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { scrollTop, offsetHeight} = document.documentElement
    const { innerHeight } = window
    const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight

    if (bottomOfWindow) {

    }
  }

}
