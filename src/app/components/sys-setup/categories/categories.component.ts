import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { AuthService } from '../../../authentication/services/auth.service';
import { CategoriesService } from './../services/categories.service';
import { CategoriesFormComponent } from './categories-form/categories-form.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories;
  data;
  searchKey: string;
  displayedColumns: string[] = [
    "ACat_ACN_Seri",
    "ACat_Desc",
    "Actions"
  ];
  isLoading = true;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private categoriesService: CategoriesService,
    public authService :AuthService
  ) {}

  ngOnInit() {
    this.initialize();
  }
  initialize() {
    this.categoriesService.getCategories().subscribe((categories: []) => {
      this.isLoading = false;
      this.categories = new MatTableDataSource(categories);
      this.categories.sort = this.sort;
      this.categories.paginator = this.paginator;
    });
  }
  onAdd() {
    this.categoriesService.form.reset();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Category" };
    let dialogRef=this.dialog.open(CategoriesFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data)=>{
      this.initialize()
    })
  }
  onEdit(element) {
    this.categoriesService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Category", ACat_Seri : this.categories.length ,id:element._id };

    let dialogRef=this.dialog.open(CategoriesFormComponent, dialogConfig);
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
      this.categories.filter = this.searchKey.trim().toLowerCase();
  }

}
