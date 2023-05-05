import {FormControl} from "@angular/forms";

export interface VerificationTokenForm {
  confirmationToken: FormControl<string | null>
}
