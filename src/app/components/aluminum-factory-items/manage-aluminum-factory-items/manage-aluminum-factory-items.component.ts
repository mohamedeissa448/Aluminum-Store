import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { AuthService } from '../../../authentication/services/auth.service';
import { AluminumFactoryItemsService } from '../services/aluminum-factory-items.service';
import { FactoryItemsFormComponent } from '../aluminum-factory-items-form/aluminum-factory-items-form.component';

@Component({
  selector: 'app-manage-aluminum-factory-items',
  templateUrl: './manage-aluminum-factory-items.component.html',
  styleUrls: ['./manage-aluminum-factory-items.component.css']
})
export class ManageFactoryItemsComponent implements OnInit {

  factoryItems;
  data;
  searchKey: string;
  displayedColumns: string[] = [
    "AFI_Seri",
    "AFI_AFN_Seri",
    "AFI_OriginalNumber",
    "AFI_ACT_Seri",
    "AFI_AI_Seri",
    "Actions"
  ];
  isLoading = true;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private aluminumFactoryItemsService: AluminumFactoryItemsService,
    public authService :AuthService
  ) {}

  ngOnInit() {
      this.initialize();
  }
  initialize() {
    this.aluminumFactoryItemsService.getFactoryItems().subscribe((factoryItems: []) => {
      this.isLoading = false;
      this.factoryItems = new MatTableDataSource(factoryItems);
      this.factoryItems.sort = this.sort;
      this.factoryItems.paginator = this.paginator;
    });
  }
  onAdd() {
    this.aluminumFactoryItemsService.form.reset();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Factory Item" };
    let dialogRef=this.dialog.open(FactoryItemsFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data)=>{
      this.initialize()
    })
  }
  onEdit(element) {
    this.aluminumFactoryItemsService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Factory Item",id:element._id };

    let dialogRef=this.dialog.open(FactoryItemsFormComponent, dialogConfig);
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
      this.factoryItems.filter = this.searchKey.trim().toLowerCase();
  }

}
