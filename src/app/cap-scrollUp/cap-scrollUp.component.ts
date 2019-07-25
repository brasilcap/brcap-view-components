import { Component, forwardRef, Input, OnInit, ElementRef, AfterViewInit, ViewChild } from "@angular/core";

@Component({
    selector: "cap-scrollUp",
    templateUrl: "./cap-scrollUp.component.html",
    styleUrls: ["./cap-scrollUp.component.css"]
})
export class CapScrollUpComponent implements OnInit {

    pageTop = true;

    constructor() { }

    ngOnInit() {
        window.addEventListener('scroll', this.scrollEvent, true);
    }

    scrollEvent = (event: any): void => {
        if (event.target.scrollTop > 1 && event.target == document.body) {
            this.pageTop = false;
        } else {
            this.pageTop = true;
        }
    }

    scroll(el) {
        el.scrollIntoView({ behavior: "smooth" });
    }

}
