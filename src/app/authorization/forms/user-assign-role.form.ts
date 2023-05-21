import {FormControl, FormGroup} from "@angular/forms";

export interface UserAssignRoleForm {
  role: FormControl<string | null>
}

export function createUserAssignForm(initRole: string = "") {
  return new FormGroup<UserAssignRoleForm>({
      role: new FormControl(initRole)
    }
  );
}
