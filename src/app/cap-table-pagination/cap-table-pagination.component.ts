import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'cap-table-pagination',
  templateUrl: './cap-table-pagination.component.html',
  styleUrls: ['./cap-table-pagination.component.css']
})
export class CapTablePaginationComponent implements OnInit {

  @Input() items: any
  @Input() columns: any
  @Input() itemsPerPage: number = 10;
  @Input() currentPage: number;
  @Input() labelPaginas: string
  @Input() rowOptions: any
  @Input() tableTitle: string
  @Input() tableSubTitle: string
  @Input() hasSearch: boolean = true
  @Input() baixarPdf: boolean
  @Input() baixarXls: boolean
  @Input() nameColumn: string;

  @Output() itemOptionClick = new EventEmitter<any>()
  @Output() gerarPdf = new EventEmitter<any>()
  @Output() gerarXls = new EventEmitter<any>()

  @HostListener('document:click', ['$event'])
  onDocumentClick(event) {
    let nonAffectedClasses = ['row-options', 'cap-grid-options', 'cap-grid-item-option']
    if (nonAffectedClasses.indexOf(event.target.className) < 0) this.showItemOptions = null
  }

  //pagination
  totalPages: number;
  pagedItens: any;
  totalPaged: number;
  firstItem: number;
  lastItem: number;
  showItemOptions: number;
  numeroItens: number;

  constructor() {
    this.totalPages = 1
    this.pagedItens = []
    if (!this.itemsPerPage) this.itemsPerPage = 10
  }

  ngOnInit() {
    this.currentPage = 1
    this.setPage();
  }

  setPage(isNew = false) {
    if (isNew) {
      this.currentPage = 1
      this.totalPages = Math.ceil(this.items.length / this.itemsPerPage)
    }
    this.pagedItens = this.items.slice((this.currentPage - 1) * this.itemsPerPage, ((this.currentPage - 1) * this.itemsPerPage) + this.itemsPerPage)
    this.firstItem = (10 * (this.currentPage - 1)) + 1
    this.lastItem = this.firstItem + ((this.pagedItens.length) - 1)
    this.numeroItens = this.items.length;
  }

  prevPage() {
    this.currentPage -= 1;
    this.setPage();
  }

  nextPage() {
    this.currentPage += 1;
    this.setPage();
  }

  firstPage() {
    this.currentPage = 1;
    this.setPage();
  }

  lastPage() {
    this.currentPage = this.totalPages;
    this.setPage();
  }

  clickItem(index) {
    if (this.showItemOptions == index) {
      this.showItemOptions = null;
    } else {
      this.showItemOptions = index;
    }
  }

  clickItemOption(opt, idx) {
    this.itemOptionClick.emit({ "option": opt, "index": (idx + ((this.currentPage - 1) * 10)) })
    this.showItemOptions = null
  }

  exportarPdf() {
    this.gerarPdf.emit(true);
  }

  exportarXls() {
    this.gerarXls.emit(true);
  }

  pesquisar(string) {
    
  }

}
