import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { AuthService } from '../../../authentication/services/auth.service';
import { CodeNumbersService } from '../services/code-numbers.service';
import { CodeNumberFormComponent } from './code-numbers-form/code-numbers-form.component';

@Component({
  selector: 'app-code-number',
  templateUrl: './code-numbers.component.html',
  styleUrls: ['./code-numbers.component.css']
})
export class CodeNumberComponent implements OnInit {

  codeNumbers;
  data;
  searchKey: string;
  displayedColumns: string[] = [
    "ACN_Numbers",
    "Actions"
  ];
  isLoading = true;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private codeNumbersService: CodeNumbersService,
    public authService :AuthService,

  ) {}

  ngOnInit() {
    this.initialize();
  }
  initialize() {
    this.codeNumbersService.getCodeNumbers().subscribe((codeNumbers: []) => {
      this.isLoading = false;
      this.codeNumbers = new MatTableDataSource(codeNumbers);
      this.codeNumbers.sort = this.sort;
      this.codeNumbers.paginator = this.paginator;
    });
  }
  onAdd() {
    this.codeNumbersService.form.reset();
    console.log(" this.codeNumbers", this.codeNumbers)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Code Number"};
    let dialogRef=this.dialog.open(CodeNumberFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data)=>{
      this.initialize()
    })
  }
  onEdit(element) {
    this.codeNumbersService.popualteForm(element)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Code Number" ,id:element._id };

    let dialogRef=this.dialog.open(CodeNumberFormComponent, dialogConfig);
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
      this.codeNumbers.filter = this.searchKey.trim().toLowerCase();
  }


}
