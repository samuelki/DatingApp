import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { CanDeactivateFn } from '@angular/router';

export const preventUnsavedChangesGuard: CanDeactivateFn<
  MemberEditComponent
> = (component) => {
  if (component.editForm?.dirty) {
    return confirm(
      'Are you sure you want to continue? Any unsaved changes will be lost.'
    );
  }
  return true;
};
