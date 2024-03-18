import {AfterViewChecked, Directive, ElementRef, Input} from '@angular/core';
import {ActivityTypes} from '../utilities/activity-types';
import {CssClassNames} from '../utilities/color-classes';

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
      case ActivityTypes.EDUCATION:
        className = CssClassNames.EDUCATION;
        break;
      case ActivityTypes.FITNESS:
        className = CssClassNames.FITNESS;
        break;
      case ActivityTypes.HOBBY:
        className = CssClassNames.HOBBY;
        break;
      case ActivityTypes.WORK:
        className = CssClassNames.WORK;
        break;
      default:
        return;
    }
    this.element.nativeElement.classList.add(className);
  }
}
