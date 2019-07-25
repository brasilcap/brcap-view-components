import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "cap-loading",
  templateUrl: "./cap-loading.component.html",
  styleUrls: ["./cap-loading.component.scss"]
})
export class CapLoadingComponent implements OnInit {
  @Input("loading") loading: boolean;
  @Input("texto") texto: string;
  @Input("sistema") sistema: string;

  produtos;
  posvenda;
  malthus;
  monitor;
  financeiro;
  contabilidade;
  atendimento;

  contentLarge;
  large;

  constructor() { }

  ngOnInit() {
    if (this.sistema === "posvenda") {
      this.posvenda = true;
    }
    if (this.sistema === "malthus") {
      this.malthus = true;
    }
    if (this.sistema === "monitor") {
      this.monitor = true;
    }
    if (this.sistema === "financeiro") {
      this.financeiro = true;
    }
    if (this.sistema === "produtos") {
      this.produtos = true;
    }
    if (this.sistema === "contabilidade") {
      this.contabilidade = true;
    }
    if (this.sistema === "atendimento") {
      this.atendimento = true;
    }

    this.checkContentHeaderLarge();
  }

  checkContentHeaderLarge() {
    this.contentLarge = document.querySelector(".content-header-large");

    if(this.contentLarge !== null){
      this.large = true;
    }

  }
}
