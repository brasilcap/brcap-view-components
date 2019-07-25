import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "cap-menu",
  templateUrl: "./cap-menu.component.html",
  styleUrls: ["./cap-menu.component.css"]
})
export class CapMenuComponent implements OnInit {
  @Input("id")
  id: string;
  @Input("value")
  value: Array<any>;
  @Input("width")
  width: number;
  @Input("modulo")
  modulo: string;
  @ViewChild("divMenu")
  divMenu: ElementRef;

  blocSelecionado;
  exibir;
  itemSelecionado;

  constructor() {}

  ngOnInit() {

    if (this.width) {
      this.divMenu.nativeElement.style.width = this.width + "px";
    } else {
      this.divMenu.nativeElement.style.width = "230px";  //
    }
    this.exibir = false;
  }

  public selecionarItem(item) {
    let blocDividido = item.split('#',2);
    this.blocSelecionado = blocDividido[1];
    this.itemSelecionado = item;

  }

}
