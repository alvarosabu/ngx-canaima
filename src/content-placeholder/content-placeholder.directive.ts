import {
    Directive,
    ElementRef,
    Renderer2,
    Input,
    OnInit,
    OnChanges
} from '@angular/core';

@Directive({
    selector: '[contentPlaceholder]',
})
export class ContentPlaceholderDirective implements OnInit, OnChanges {
    private cardContentPlaceholderEl = `<div class="card content-placeholder shadow-1">
        <div class="content-placeholder__header">
            <div class="content-placeholder__avatar animated-background">
            </div>
            <div class="content-placeholder__titles">
                <div class="content-placeholder__title animated-background"></div>
                <div class="content-placeholder__subtitle animated-background"></div>
            </div>
        </div>
        <div class="content-placeholder__body">
            <div class="content-placeholder__paragraph animated-background"
            *ngFor="let line of [10,6,7,4,5]" [ngStyle]="{ 'width.%' : line * 10}">
            </div>
        </div>
        <div class="content-placeholder__footer">
            <div class="content-placeholder__action animated-background"></div>
            <div class="content-placeholder__action animated-background"></div>
        </div>
    </div>`
    private cardDataContentPlaceholderEl = `<div class="card content-placeholder content-placeholder--data shadow-1">
    <div class="content-placeholder__thumb" >
       <div class="content-placeholder--data__img circle animated-background"></div>
    </div>
    <div class="content-placeholder__content">
        <div class="content-placeholder--data__title animated-background"></div>
        <span class="content-placeholder--data__subtitle animated-background"></span>
    </div>
    <div class="content-placeholder--data__actions" >
    </div>
    </div>`
    private cardImageContentPlaceholderEl = `<div class="card content-placeholder content-placeholder--image shadow-1">
        <div class="content-placeholder__header">
            <div class="content-placeholder--image__img animated-background">
            </div>
            <div class="content-placeholder--image__titles">
                <div class="content-placeholder__title animated-background"></div>
                <div class="content-placeholder__subtitle animated-background"></div>
            </div>
        </div>
        <div class="content-placeholder__body">
            <div class="content-placeholder__paragraph animated-background"
            *ngFor="let line of [10,6,7,4,5]" [ngStyle]="{ 'width.%' : line * 10}">
            </div>
        </div>
        <div class="content-placeholder__footer">
            <div class="content-placeholder__action animated-background"></div>
            <div class="content-placeholder__action animated-background"></div>
        </div>
    </div>`;
    private cardIllustrationContentPlaceholderEl = `<div class="card content-placeholder content-placeholder--illustration shadow-1">
        <div class="content-placeholder__header">
            <div class="content-placeholder--illustration__img animated-background">
            </div>
            <div class="content-placeholder--illustration__titles">
                <div class="content-placeholder__title animated-background"></div>
                <div class="content-placeholder__subtitle animated-background"></div>
            </div>
        </div>
        <div class="content-placeholder__body">
            <div class="content-placeholder__paragraph animated-background"
            *ngFor="let line of [10,6,7,4,5]" [ngStyle]="{ 'width.%' : line * 10}">
            </div>
        </div>
        <div class="content-placeholder__footer">
            <div class="content-placeholder__action animated-background"></div>
            <div class="content-placeholder__action animated-background"></div>
        </div>
    </div>`
    @Input('contentPlaceholder') contentPlaceholder;

    private nativeElement: any;
    constructor(public renderer: Renderer2, public hostElement: ElementRef) {
        this.nativeElement = hostElement.nativeElement;
    }
    public ngOnInit() {
        if (this.checkInput(this.contentPlaceholder)) {
            this.appendContentPlaceholder();
        }
    }
    public ngOnChanges(changes) {
        for (const key in changes) {
            if (changes.hasOwnProperty(key) && !changes[key].firstChange) {
                this[key] = changes[key].currentValue;
                if (key === 'contentPlaceholder') {
                    changes['contentPlaceholder'].currentValue ?
                        this.appendContentPlaceholder() : this.removeContentPlaceholder();
                }
            }
        }

    }
    private checkInput(input) {
        return (input === true || input === '');
    }
    private appendContentPlaceholder() {
        let template = ``;
        switch (this.nativeElement.localName) {
            case 'as-card':
                template = this.cardContentPlaceholderEl;
                break;
            case 'as-card-data':
                template = this.cardDataContentPlaceholderEl;
                break;
            case 'as-card-image':
                template = this.cardImageContentPlaceholderEl;
                break;
            case 'as-card-illustration':
                template = this.cardIllustrationContentPlaceholderEl;
                break;
            default:
                template = this.cardContentPlaceholderEl;
                break;
        }
        this.nativeElement.childNodes[0].style.display = 'none';
        /* let child = this.renderer.createElement(this.cardContentPlaceholderEl); */
        this.nativeElement.insertAdjacentHTML('beforeend', template);
        this.renderer.addClass(this.nativeElement, `content-placeholder`);
    }
    private removeContentPlaceholder() {
        this.nativeElement.childNodes[0].style.display = 'flex';
        this.renderer.removeChild(this.nativeElement, this.nativeElement.childNodes[1]);
        this.renderer.removeClass(this.nativeElement, `content-placeholder`);
    }
    private addClass(current: string, prev = null) {
        if (prev) {
            this.renderer.removeClass(this.nativeElement, prev);
        }
        if (this.nativeElement.classList.contains(current)) {
            this.renderer.removeClass(this.nativeElement, current);
        } else {
            this.renderer.addClass(this.nativeElement, current);
        }
    }
}