import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfoilio',
  templateUrl: './portfoilio.component.html',
  styleUrls: ['./portfoilio.component.css']
})
export class PortfoilioComponent implements OnInit {

  commandInput: string[] = ['Welcome to the My portfolio terminal!','Supported commands are : ','- help: cry for help!!', '- clear: clear the terminal screen'];
  computerStart: boolean = false;
  onEnters: boolean = true;
  prompt: string = 'prompt'

  constructor() {

  }

  ngOnInit(): void {
  }

  onEnter(command:any) {
    this.prompt = 'unprompt'
    if(this.commandInput.length >= 17){
      this.commandInput.shift();
    }
    this.commandInput.push(`$ ${command.value}`);
    if(command.value == 'clear'){
      this.commandInput = []
    }
  }
}
