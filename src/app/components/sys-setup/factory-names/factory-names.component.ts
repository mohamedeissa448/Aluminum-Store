import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { AuthService } from '../../../authentication/services/auth.service';
import { FactoryNamesService } from '../services/factory-names.service';
import { FactoryNamesFormComponent } from './factory-names-form/factory-names-form.component';

@Component({
  selector: 'app-factory-names',
  templateUrl: './factory-names.component.html',
  styleUrls: ['./factory-names.component.css']
})
export class FactoryNamesComponent implements OnInit {

  factoryNames;
  data;
  searchKey: string;
  displayedColumns: string[] = [
    "AFN_Desc",
    "Actions"
  ];
  isLoading = true;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private factoryNamesService: FactoryNamesService,
    public authService :AuthService
  ) {}

  ngOnInit() {
    this.initialize();
  }
  initialize() {
    this.factoryNamesService.getFactoryNames().subscribe((factoryNames: []) => {
      this.isLoading = false;
      this.factoryNames = new MatTableDataSource(factoryNames);
      this.factoryNames.sort = this.sort;
      this.factoryNames.paginator = this.paginator;
    });
  }
  onAdd() {
    this.factoryNamesService.form.reset();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Factory Name" };
    let dialogRef=this.dialog.open(FactoryNamesFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data)=>{
      this.initialize()
    })
  }
  onEdit(element) {
    this.factoryNamesService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Factory Name",id:element._id };

    let dialogRef=this.dialog.open(FactoryNamesFormComponent, dialogConfig);
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
      this.factoryNames.filter = this.searchKey.trim().toLowerCase();
  }


}
