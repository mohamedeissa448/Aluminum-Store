import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { AuthService } from '../../../authentication/services/auth.service';
import { CategoryTypesService } from './../services/category-types.service';
import { CategoryTypesFormComponent } from './category-types-form/category-types-form.component';

@Component({
  selector: 'app-category-types',
  templateUrl: './category-types.component.html',
  styleUrls: ['./category-types.component.css']
})
export class CategoryTypesComponent implements OnInit {

  categoryTypes;
  data;
  searchKey: string;
  displayedColumns: string[] = [
    "ACT_ACat_Seri",
    "ACT_AT_Seri",
    "Actions"
  ];
  isLoading = true;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private categoryTypesService: CategoryTypesService,
    public authService :AuthService
  ) {}

  ngOnInit() {
    this.initialize();
  }
  initialize() {
    this.categoryTypesService.getCategoryTypes().subscribe((categoryTypes: []) => {
      this.isLoading = false;
      this.categoryTypes = new MatTableDataSource(categoryTypes);
      this.categoryTypes.sort = this.sort;
      this.categoryTypes.paginator = this.paginator;
    });
  }
  onAdd() {
    this.categoryTypesService.form.reset();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Category Type" };
    let dialogRef=this.dialog.open(CategoryTypesFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data)=>{
      this.initialize()
    })
  }
  onEdit(element) {
    this.categoryTypesService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Category Type",id:element._id };

    let dialogRef=this.dialog.open(CategoryTypesFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data)=>{
      this.initialize()
    })
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    if (this.searchKey)
      this.categoryTypes.filter = this.searchKey.trim().toLowerCase();
  }


}
