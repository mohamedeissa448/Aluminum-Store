import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { AuthService } from '../../../authentication/services/auth.service';
import { BromoCodeService } from '../services/bromo-code.service';
import { BromoCodeFormComponent } from '../bromo-code-form/bromo-code-form.component';

@Component({
  selector: 'app-manage-bromo-code',
  templateUrl: './manage-bromo-code.component.html',
  styleUrls: ['./manage-bromo-code.component.css']
})
export class ManageBromoCodeComponent implements OnInit {

  bromoCodes;
  data;
  searchKey: string;
  displayedColumns: string[] = [
    "Code Description",
    "Start Date",
    "End Date",
    "Usage Times",
    "Discount",
    "Actions"
  ];
  isLoading = true;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private bromoCodeService: BromoCodeService,
    public authService :AuthService
  ) {}

  ngOnInit() {
    this.initialize();
  }
  initialize() {
    this.bromoCodeService.getBromoCodes().subscribe((countries: []) => {
      this.isLoading = false;
      this.bromoCodes = new MatTableDataSource(countries);
      this.bromoCodes.sort = this.sort;
      this.bromoCodes.paginator = this.paginator;
    });
  }
  onAdd() {
    this.bromoCodeService.form.reset();

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Bromo Code" };
    let dialogRef=this.dialog.open(BromoCodeFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data)=>{
      this.initialize()
    })
  }
  onEdit(element) {
    this.bromoCodeService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Bromo Code",id:element._id };

    let dialogRef=this.dialog.open(BromoCodeFormComponent, dialogConfig);
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
      this.bromoCodes.filter = this.searchKey.trim().toLowerCase();
  }


}
