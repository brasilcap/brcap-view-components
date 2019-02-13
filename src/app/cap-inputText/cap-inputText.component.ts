import {
  Component,
  forwardRef,
  Input,
  OnInit,
  ElementRef,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgModel } from "@angular/forms";

import BRCapUtil from "../../brcap-util";

const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CapInputTextComponent),
  multi: true
};

import * as jqueryProxy from "jquery";
const $: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy;

@Component({
  selector: "cap-inputText",
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  templateUrl: "./cap-inputText.component.html",
  styleUrls: ["./cap-inputText.component.css"]
})
export class CapInputTextComponent implements AfterViewInit, ControlValueAccessor, OnInit {
  @Input("id")
  id: string;
  @Input("label")
  label: string;
  @Input("placeholder")
  placeholder: string;
  @Input("mask")
  mask: string;
  @Input("reverseMask")
  reverseMask: string;
  @Input("styleClass")
  styleClass: string;
  @Input("maxlength")
  maxlength: string;
  @Input("styleInline")
  styleInline: string;
  @Input("textHelper")
  textHelper: string;
  @Input("disabled")
  disabled: boolean;
  @Input("required")
  required: boolean;
  @Input("icon")
  icon: string;
  @Input("erroMessage")
  erroMessage: string;
  @Input("isValid")
  isValid: boolean;

  @Output()
  keyup = new EventEmitter();
  @Output()
  keydown = new EventEmitter();
  @Output()
  mousedown = new EventEmitter();
  @Output()
  mouseover = new EventEmitter();
  @Output()
  mouseout = new EventEmitter();
  @Output()
  focus = new EventEmitter();
  @Output()
  blur = new EventEmitter();

  @ViewChild("input")
  input;

  @ViewChild(NgModel)
  inputModel;

  textError;

  escrevendo = false;
  emptyMessage;
  filtrando = false;

  private $el: any;
  private innerValue: any = "";

  constructor(private el: ElementRef) {
    this.$el = $(el.nativeElement);
  }

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  ngOnInit() {
    if (!this.id) {
      this.id = BRCapUtil.guid();
    } else {
      this.id += "_input";
    }
    if (this.styleClass && this.styleClass.indexOf("error") !== -1) {
      this.textError = "error";
    }
  }

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  typing(){
    this.escrevendo = true;
    if(this.value == ""){
      this.escrevendo = false;
    }
  }

  erase(){
    this.value = "";
    this.escrevendo = false;
    this.emptyMessage = false;
    this.filtrando = false;
  }

  onKeyup(event) {
    return this.keyup.emit(event);
  }

  onFocus(event) {
    return this.focus.emit(event);
  }

  onKeyDown(event) {
    return this.keydown.emit(event);
  }

  onMouseOver(event) {
    return this.mouseover.emit(event);
  }
  onMouseDown(event) {
    return this.mousedown.emit(event);
  }
  onMouseOut(event) {
    return this.mouseout.emit(event);
  }

  onBlurJS(event) {
    return this.blur.emit(event);
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  public ngAfterViewInit() {
    if(this.reverseMask){
      $(this.input.nativeElement).mask(this.reverseMask, {reverse: true});
    }
    else if (this.mask) {
      $(this.input.nativeElement).mask(this.mask);
    }
  }

  public ngOnChanges() {
    if(this.mask){
      $(this.input.nativeElement).unmask();
      $(this.input.nativeElement).mask(this.mask);
    }

  }

  hasError(): boolean {
    return this.inputModel.invalid && (this.inputModel.dirty || this.inputModel.touched);
  }
}
