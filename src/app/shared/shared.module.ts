import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule],
  exports: [ProfileComponent],
})
export class SharedModule {}
