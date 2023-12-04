import {Contact} from '../models/contact';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
value: any;
  constructor() {  
    this.setMarkContactStyle(); 
    this.createContact(); 
  } 
  isMarked = true; 
  isFriendContact = true; 
  isFamilyContact = false; 
  isWorkContact = true; 
 
  markContactStyle: Record<string, string> = {}; 
setMarkContactStyle() { 
this.markContactStyle = { 
'font-style': this.isFriendContact ? 'italic' : 'normal', 
'font-weight': !this.isFamilyContact ? 'bold' : 'normal', 
'font-size': this.isWorkContact ? '24 px' : '12px'  
} 
  
  } 
  ngOnInit(): void {
  }
  deleteContact(id:number):void{
  
 

    let index:number=-1;
    for(let c of this.listContacts){
      index = index+1;
      if(c.id==id){
      break;
      }
      
      }
      if(index!=-1){
      this.listContacts.splice(index,1);
      }
  }
  editContact():void{
    
    if(confirm("voulez-vous ajouter le contact")){
      alert("work")
    }
  }
  
  listContacts: Array<Contact> = new Array<Contact>(); 
  createContact() { 
    this.listContacts.push({id:0,type:"Work",firstName:"HAMMEMI  ",lastName:"amin",email:"amin.ham@gmail.com",description:"Travail",phone:"98 014 121"});
    this.listContacts.push({id:1,type:"Work",firstName:"mouna  ",lastName:"mou",email:"mouna22@gmail.com",description:"Travail",phone:"98 225 985"});
    this.listContacts.push({id:2,type:"Family",firstName:"najeh  ",lastName:"majd",email:"najeh778@gmail.com",description:"Famille",phone:"25 879 314"});
    this.listContacts.push({id:3,type:"Family",firstName:"imed  ",lastName:"med",email:"imed96@gmail.com",description:"Famille",phone:"54 014 114"});
    this.listContacts.push({id:4,type:"Friend",firstName:"issa ",lastName:"karim",email:"issa001@gmail.com",description:"Amis",phone:"25 489 756"});
    this.listContacts.push({id:6,type:"Friend",firstName:"iyed  ",lastName:"aziz",email:"iyed7@gmail.com",description:"Amis",phone:"22 745 882"});
  } 
}