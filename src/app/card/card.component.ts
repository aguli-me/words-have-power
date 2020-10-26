import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class AppCardComponent {
    // Requires two inputs
    //1. Title of the poem
    //2. content
    editEle: ElementRef;

    @ViewChild('textarea')
    textarea: ElementRef;
    // TODOS - TBD
    // 1. Slide the dimensions out in case the poem is
    // too large to show in the dimensions set
    @Input() public card: any;

    editText() {
        let temp = this.textarea.nativeElement.readOnly;
        this.textarea.nativeElement.readOnly = !temp;
        if (temp)
            this.textarea.nativeElement.focus();
    }
}
