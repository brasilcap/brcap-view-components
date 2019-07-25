import {
  Component,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'cap-pagination',
  templateUrl: './cap-pagination.component.html',
  styleUrls: ['./cap-pagination.component.scss']
})
export class CapPaginationComponent {

  @Input() page: number;
  @Input() count: number;
  @Input() contagemPaginasTotal: number;
  @Input() primeiraLinha: number;
  @Input() ultimaLinha: number
  @Input() perPage: number;
  @Input() loading: boolean;
  @Input() pagesToShow: number;
  @Input() numeroItens: number;

  @Output() goPrev = new EventEmitter < boolean > ();
  @Output() goNext = new EventEmitter < boolean > ();
  @Output() goPage = new EventEmitter < number > ();
  @Output() goFirst = new EventEmitter < boolean > ();
  @Output() goLast = new EventEmitter < boolean > ();

  needPagination = true;

  constructor() {}

  getMin(): number {
    return ((this.perPage * this.page) - this.perPage) + 1;
  }

  getMax(): number {
    let max = this.perPage * this.page;
    if (max > this.count) {
      max = this.count;
    }
    return max;
  }

  onPage(n: number): void {
    this.goPage.emit(n);
  }

  onPrev(): void {
    this.goPrev.emit(true);
  }

  onNext(next: boolean): void {
    this.goNext.emit(next);
  }

  onFirst(): void {
    this.goFirst.emit(true);
  }

  onLast(): void {
    this.goLast.emit(true);
  }

  totalPages(): number {
    return Math.ceil(this.contagemPaginasTotal / this.perPage) || 0;
  }

  lastPage(): boolean {
    return this.page >= this.contagemPaginasTotal;
  }

  getPages(): number[] {
    const c = Math.ceil(this.contagemPaginasTotal / this.perPage);
    const p = this.page || 1;
    const pagesToShow = this.pagesToShow || 9;
    const pages: number[] = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  }
}
