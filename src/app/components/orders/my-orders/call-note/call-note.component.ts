import { Component, OnInit, Inject } from '@angular/core';
import { MyOrderService } from '../../services/my-order.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatAutocompleteSelectedEvent,MatChipInputEvent } from '@angular/material';
import { AuthService } from '../../../../authentication/services/auth.service';

@Component({
  selector: 'app-call-note',
  templateUrl: './call-note.component.html',
  styleUrls: ['./call-note.component.css']
})
export class CallNoteComponent implements OnInit {
  id;
  title;
  Call_Note : any = "" ;
  Order_Shipping_Employee_Calls_Note : any = "" ;
  current_call_number : number = 0 ;
  constructor(
    public authService: AuthService,
    public myOrderService: MyOrderService,
    public notificationService: NotificationService,
    public dialogRef: MatDialogRef<CallNoteComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) {
    this.title = data.title;
    this.id=data.id
  }

  ngOnInit() {
    this.myOrderService.getShippingCallNotes({orderID : this.id }).subscribe((response:any)=>{
      this.Order_Shipping_Employee_Calls_Note = response.Order_Shipping_Employee_Calls_Note ;
      this.current_call_number = response.Order_Shipping_Employee_Calls_Number + 1 ;
    })
  }

  onSubmit() {
    console.log("Call_Note",this.Call_Note);
    let dataToSend={
       Call_Note : "",
       orderID : this.id 
    }
    let callDate = new Date();
    dataToSend.Call_Note += "<p>call Attempt Number " + this.current_call_number +"</p>"+ " <p>Date is : " + callDate+"</p>" +'<p>'+ this.Call_Note+'</p>';
    console.log("dataToSend.Call_Note ",dataToSend.Call_Note)
    this.myOrderService.saveShippingCallNote(dataToSend).subscribe((status:Boolean)=>{
      console.log("status",status)
      if(status){
        this.notificationService.success("Call Note Saved Successfully")
      }else{
        this.notificationService.failed("Call Note Couldn't be Saved,Please try again later")
      }
    })
    this.onClose();
    
  }
  onClose() {
    this.dialogRef.close();
  }
 


}
