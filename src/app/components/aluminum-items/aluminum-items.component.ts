import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { systemSettings } from "../../app-config"
import { AuthService } from '../../authentication/services/auth.service';
import { AluminumItemsService } from './services/aluminum-items.service';
import { AluminumItemsFormComponent } from './aluminum-items-form/aluminum-items-form.component';

@Component({
  selector: 'app-aluminum-items',
  templateUrl: './aluminum-items.component.html',
  styleUrls: ['./aluminum-items.component.css']
})
export class AluminumItemsComponent implements OnInit {
  serverURL=""
  isLoading=true
  public aluminumItems;
  data;
  searchKey: string;
  displayedColumns: string[] = ["AI_Seri","AI_MasterNo","AI_ArabicName","AI_HebrewName", "Image", "Actions"];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private aluminumItemsService: AluminumItemsService,
    public authService :AuthService
  ) {}

  ngOnInit() {
    this.serverURL=systemSettings.serverURL;
    this.initializeTable();
  }
  initializeTable() {
    this.aluminumItemsService.getAluminumItems().subscribe((items: any) => {
      this.isLoading = false;
      this.aluminumItems = new MatTableDataSource(items);
      this.aluminumItems.sort = this.sort;
      this.aluminumItems.paginator = this.paginator;
    });
  }
  onAdd() {
    this.aluminumItemsService.form.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Aluminum Item" };
    let dalogRef=this.dialog.open(AluminumItemsFormComponent, dialogConfig);
    dalogRef.afterClosed().subscribe((data)=>{
      this.initializeTable();
    })
  }
  onEdit(element) {
    console.log("element to edit ",element)
    this.aluminumItemsService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    
    dialogConfig.width = "60%";
    dialogConfig.data = { 
      title: "Edit An Aluminum Item",
      ImageUrl: element.AI_PictureNo,
      id:element._id
     };

    let dalogRef=this.dialog.open(AluminumItemsFormComponent, dialogConfig);
    dalogRef.afterClosed().subscribe((data)=>{
      this.initializeTable();
    })
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.aluminumItems.filter = this.searchKey.trim().toLowerCase();
  }

}
