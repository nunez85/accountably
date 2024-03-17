import {AfterViewChecked, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appActivityType]',
  standalone: true,
})
export class ActivityTypeDirective implements AfterViewChecked {
  constructor(private element: ElementRef) {}

  ngAfterViewChecked(): void {
    const activityType = this.element.nativeElement.innerText;
    this.addClass(activityType);
  }

  addClass(activityType: string): void {
    let className: string;
    switch (activityType) {
      case 'Education':
        className = 'bg-orange-100';
        break;
      case 'Fitness':
        className = 'bg-red-100';
        break;
      case 'Hobby':
        className = 'bg-blue-100';
        break;
      case 'Work':
        className = 'bg-gray-200';
        break;
      default:
        return;
    }
    this.element.nativeElement.classList.add(className);
  }
}
