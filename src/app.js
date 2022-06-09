import { LightningElement } from "lwc";

export default class App extends LightningElement {
    
  handleClick(){
    modal = false;
    alert('clicado');
    modal = true;
  }

}
