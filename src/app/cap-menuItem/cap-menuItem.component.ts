import { Component, Input, ViewChild, ElementRef, OnInit, Output, EventEmitter } from "@angular/core";
import { ValueTransformer } from "@angular/compiler/src/util";

@Component({
  selector: "cap-menuItem",
  templateUrl: "./cap-menuItem.component.html",
  styleUrls: ["./cap-menuItem.component.css"]
})
export class CapMenuItemComponent {
  @Input("id")
  id: string;
  @Input("value")
  value: any;
  @Input("link")
  link: string;
  @Input("styleClass")
  styleClass: string;
  @Input("principal")
  principal: boolean;
  @ViewChild("items")
  items: ElementRef;
  @ViewChild("menuItem")
  menuItem: ElementRef;


  @Input("blocSelecionado")
  blocSelecionado
  @Input("itemSelecionado")
  itemSelecionado

  @Output()
  selecionar = new EventEmitter();

  @Output()
  selecionarToggle = new EventEmitter();

  

  codigoTrat: string;

  exibir = false;
  icone;
  mod = "";
  status = "";
  subClass = "";
  exibido = false;

  constructor() {}

  ngOnInit(){
    let codigoDividido = this.value.codigo.split('#',2);
    this.codigoTrat = codigoDividido[1];
  }

  public getIconUrl(icone) {
    return icone ? icone.replace(/#/g, "%23") : null;
  }

  toggleClass(hasChild) {

    let codigoDividido = this.value.codigo.split('#',2);
    this.codigoTrat = codigoDividido[1];

    this.selecionar.emit(hasChild[0].codigo);

    if (hasChild) {
      this.exibir = !this.exibir;
    }
   
    // console.log("codigoTrat = "+ this.codigoTrat);
    // console.log("blocSelecionado = "+ this.blocSelecionado);
    // console.log("hasChild.codigo = "+hasChild[0].codigo);
  }
 

  select(item)
   { 
    this.subClass = "ativado"
    this.selecionar.emit(item.codigo);
  }
   
}
