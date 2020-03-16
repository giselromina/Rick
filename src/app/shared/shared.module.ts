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
import { FormsModule } from '@angular/forms';
import { SharedListComponent } from './shared-list/shared-list.component';
@NgModule({
  declarations: [
    BlockTemplateComponent,
    SharedListComponent
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
  FormsModule,
  BlockUIModule.forRoot(
    {
      template: BlockTemplateComponent
    }
  )
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
  MatProgressBarModule,
  SharedListComponent,
  BlockUIModule,
  FormsModule,
  ],
  entryComponents: [
    BlockTemplateComponent
  ]
})
export class SharedModule { }
