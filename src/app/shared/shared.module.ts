import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatSelectModule,
  MatTooltipModule,
  MatTableModule,
  MatCheckboxModule
} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from './templates/block-template/block-template.component';
@NgModule({
  declarations: [
    BlockTemplateComponent
  ],
  imports: [
  CommonModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatSelectModule,
  MatTooltipModule,
  MatTableModule,
  MatCheckboxModule,
  ReactiveFormsModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  BlockUIModule.forRoot({
    template: BlockTemplateComponent
  })
  ],
  exports: [
  ReactiveFormsModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatSelectModule,
  MatTooltipModule,
  MatTableModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
  ],
  entryComponents: [
    BlockTemplateComponent
  ]
})
export class SharedModule { }
