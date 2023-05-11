import {FormControl} from "@angular/forms";

export interface RegistrationForm {
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  passwordConfirmation: FormControl<string | null>;
}
