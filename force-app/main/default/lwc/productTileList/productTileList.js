import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import {CurrentPageReference} from 'lightning/navigation';
import getProducts from '@salesforce/apex/ProductController.getProducts';

const PAGE_SIZE = 8;

export default class ProductTileList extends LightningElement {
/* @wire(getProducts)
products((result,error) => {
    if(result){
       this.products = result;
   }else if(error){
       console.log(error);
   }
}); */
//wire getProduct avec return data in products variable 
@wire(getProducts)products((data)=>{
    if(data){
        console.log(products.data)
    }
});


//create methode to handel the event from child component
  /* handleProductSelected(ev){
       const selectedProductId = ev.detail.id;
       this.handleSelected(selectedProductId);
   }*/

}