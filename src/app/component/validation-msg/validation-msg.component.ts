import {Component, DoCheck, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-validation-msg',
  templateUrl: './validation-msg.component.html',
  styleUrls: ['./validation-msg.component.css']
})
export class ValidationMsgComponent implements DoCheck {
  @Input()
  control: any;
  visibility: boolean | undefined = false;
  text: string = "Invalid form";

  ngDoCheck(): void {
    const formControl = this.control as FormControl;
    this.visibility = formControl.touched && !formControl.valid;

    if(formControl.hasError("required"))
      this.text = "To pole jest wymagane";
    if(formControl.hasError("minlength"))
      this.text = "To pole jest za krótkie";
  }


}
