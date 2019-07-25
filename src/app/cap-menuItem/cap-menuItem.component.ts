import { Component, Input, ViewChild, ElementRef, OnInit, Output, EventEmitter, OnChanges } from "@angular/core";
import { ValueTransformer } from "@angular/compiler/src/util";

@Component({
  selector: "cap-menuItem",
  templateUrl: "./cap-menuItem.component.html",
  styleUrls: ["./cap-menuItem.component.css"]
})
export class CapMenuItemComponent implements OnChanges {
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
  @Input("exibir")
  exibir
  @Input("itemSelecionado")
  itemSelecionado

  @Output()
  selecionar = new EventEmitter();
  selecionar2 = new EventEmitter();

  codigoTrat: string;

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
 
    //this.ngOnChanges();

    let codigoDividido = this.value.codigo.split('#',2);
    this.codigoTrat = codigoDividido[1];
    if (hasChild) {
      this.selecionar.emit(hasChild[0].codigo);
    }
    
    this.exibir = !this.exibir;
  
    // console.log("codigoTrat = "+ this.codigoTrat);
    // console.log("blocSelecionado = "+ this.blocSelecionado);
    // console.log("hasChild0.codigo = "+hasChild[0].codigo);
  }
 
  ngOnChanges(changes): void{
     
      if(changes.blocSelecionado){
        if(this.codigoTrat !== changes.blocSelecionado.currentValue){
          this.exibir = false
        }
      }
     
  }
  
  select(item)
   { 
    this.subClass = "ativado"
    this.selecionar.emit(item.codigo);
  
    // console.log("codigoTrat2 = "+ this.codigoTrat);
    // console.log("blocSelecionado2 = "+ this.blocSelecionado);
  }
   
}
