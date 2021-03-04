import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { AuthService } from '../../../authentication/services/auth.service';
import { TypesService } from '../services/types.service';
import { TypeFormComponent } from './types-form/types-form.component';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  isLoading=true
  public types;
  data;
  searchKey: string;
  displayedColumns: string[] = [ "AT_Number", "AT_Desc", "Actions"];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private typesService: TypesService,
    public authService :AuthService
  ) {}

  ngOnInit() {
    this.initializeTable();
  }
  initializeTable() {
    this.typesService.getTypes().subscribe((types: any) => {
      this.isLoading = false;
      this.types = new MatTableDataSource(types);
      this.types.sort = this.sort;
      this.types.paginator = this.paginator;
    });
  }
  onAdd() {
    this.typesService.form.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Type" };
    let dalogRef=this.dialog.open(TypeFormComponent, dialogConfig);
    dalogRef.afterClosed().subscribe((data)=>{
      this.initializeTable();
    })
  }
  onEdit(element) {
  
    this.typesService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit A Type",id:element._id };

    this.dialog.open(TypeFormComponent, dialogConfig);
    let dalogRef=this.dialog.open(TypeFormComponent, dialogConfig);
    dalogRef.afterClosed().subscribe((data)=>{
      this.initializeTable();
    })
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.types.filter = this.searchKey.trim().toLowerCase();
  }

}
