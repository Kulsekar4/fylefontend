import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import {  MatSidenavModule, MatToolbarModule,
  MatIconModule, MatButtonModule,MatListModule, MatMenuModule
  ,MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule,
  MatSortModule ,MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule, MatSortModule,
    MatSidenavModule, MatToolbarModule,MatIconModule,
     MatPaginatorModule,
    MatButtonModule,MatListModule, MatMenuModule ,MatTableModule, MatFormFieldModule, MatInputModule
    ,MatSelectModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule, MatSortModule, MatPaginatorModule,
    MatToolbarModule,MatIconModule, MatButtonModule,MatListModule, MatMenuModule
    ,MatSelectModule ,MatTableModule, MatFormFieldModule, MatInputModule
  ],
})
export class MaterialModule {}
