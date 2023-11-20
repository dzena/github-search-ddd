import { NgModule } from '@angular/core';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';

@NgModule({
  imports: [
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatProgressBarModule,
  ],
  exports: [
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatProgressBarModule,
  ],
})
export class MaterialModule {}
