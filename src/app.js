import { LightningElement } from "lwc";

export default class App extends LightningElement {
  modal = false;
  
  handleClick(){
    alert('clicado');
    modal = true;
  }

}
