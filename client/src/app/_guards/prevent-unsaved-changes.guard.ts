import { inject } from '@angular/core';
import { ConfirmService } from '../_services/confirm.service';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { CanDeactivateFn } from '@angular/router';

export const preventUnsavedChangesGuard: CanDeactivateFn<
  MemberEditComponent
> = (component) => {
  const confirmService = inject(ConfirmService);

  if (component.editForm?.dirty) {
    return confirmService.confirm();
  }

  return true;
};
