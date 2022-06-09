import { LightningElement, api } from "lwc";

export default class Child extends LightningElement {

  handleClick(){
    alert('Sair')
    modal = false;
  }
}
