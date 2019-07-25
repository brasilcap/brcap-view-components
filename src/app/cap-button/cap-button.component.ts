import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as jqueryProxy from "jquery";
const $: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy;

@Component({
  selector: "cap-button",
  templateUrl: "./cap-button.component.html",
  styleUrls: ["./cap-button.component.scss"]
})
export class CapButtonComponent implements OnInit {
  @Input("id") id: string;
  @Input("label") label: string;
  @Input("disabled") disabled: boolean;
  @Input("icon") icon: string;
  @Input("loader") loader: boolean;
  @Input("styleClass") styleClass: string;
  @Input("type") type: string;

  @ViewChild("button") button: ElementRef;

  constructor() {}

  iconFontSize = 20;

  ngOnInit() {
    if (!this.type) {
      this.type = "button";
    }

    if (this.styleClass && this.styleClass.indexOf('xs') !== -1) {
      this.iconFontSize = 10;
    }
  }
}
