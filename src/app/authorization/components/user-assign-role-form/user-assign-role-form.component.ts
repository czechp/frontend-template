import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../models/user.model";
import {Observable, tap} from "rxjs";
import {FormGroup} from "@angular/forms";
import {createUserAssignForm, UserAssignRoleForm} from "../../forms/user-assign-role.form";
import {USER_ROLES} from "../../models/user.roles";
import {UserAssignRoleModel} from "../../models/user-assign-role.model";

@Component({
  selector: 'app-user-assign-role-form',
  templateUrl: './user-assign-role-form.component.html',
  styleUrls: ['./user-assign-role-form.component.css']
})
export class UserAssignRoleFormComponent implements OnInit {
  @Input()
  user$: Observable<UserModel> | undefined;
  @Output()
  formSubmitted = new EventEmitter<UserAssignRoleModel>();
  userId: number = 0;
  userAssignRoleForm: FormGroup<UserAssignRoleForm>;
  protected readonly USER_ROLES = USER_ROLES;

  constructor() {
    this.userAssignRoleForm = createUserAssignForm();
  }

  ngOnInit(): void {
    this.user$?.pipe(tap((userModel) => {
      this.userId = userModel.id;
      this.userAssignRoleForm.patchValue({role: userModel.userRole})
    })).subscribe();
  }

  assignRoleOnClick() {
    this.formSubmitted.emit({userId: this.userId, role: this.userAssignRoleForm.get("role")?.value as string});
  }
}
