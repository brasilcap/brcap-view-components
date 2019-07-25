import { Component, OnInit, forwardRef, Input, ElementRef, ViewChild, Output, EventEmitter  } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'
import BRCapUtil from "../../brcap-util";
import * as jqueryProxy from "jquery";
const $: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy;

const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CapSelectMultComponent),
  multi: true
};

@Component({
  selector: 'cap-select-mult',
  host: {
    class: "cap-select-mult"
  },
  templateUrl: './cap-select-mult.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  styleUrls: ['./cap-select-mult.component.css']
})

export class CapSelectMultComponent implements ControlValueAccessor, OnInit {

  @Input("placeholder")
  placeholder: string;
  @Input("disabled")
  disable: boolean = false;
  @Input("data")
  data: any[];
  @Input("id")
  id: string;
  @Input("textField")
  textField: string;
  @Input("label")
  label: string;
  @Output()
  focus = new EventEmitter();
  @ViewChild("select")
  select;

  private $el: any;
  private innerValue: Array<any> = [];

  constructor(private el: ElementRef) {
    this.$el = $(el.nativeElement);
  }

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  dropdownSettings = {};

  ngOnInit(){

    if (!this.id) {
      this.id = BRCapUtil.guid();
    } else {
      this.id += "_input";
    }

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'value',
      textField: 'label',
      selectAllText: 'Selecionar todos.',
      unSelectAllText: 'Remover seleção.',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
  }

  onFocus(event) {
    return this.focus.emit(event);
  }

  get value(): any[] {
    return this.innerValue;
  }

  onBlur() {
    this.onTouchedCallback();
  }

  set value(v: any[] ) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(value: any[]) {
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

  onItemSelect(item: any[]) {
    return this.innerValue;
  }

  onSelectAll(items: any[]) {
    return this.innerValue;
  }
}
