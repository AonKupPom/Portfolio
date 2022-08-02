import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-portfoilio',
  templateUrl: './portfoilio.component.html',
  styleUrls: ['./portfoilio.component.css']
})
export class PortfoilioComponent implements OnInit {

  commandInput: string[] = ['Welcome to the My portfolio terminal!', 'Supported commands are : ', '- about: to get you know about me', '- clear: clear the terminal screen'];
  computerStart: boolean = false;
  prompt: string = 'prompt';
  power
  terminalInput = '';
  shift: boolean = false;
  contactForm: FormGroup;
  contactForm_submit = false;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.contactForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      tel: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
    window.addEventListener("keydown", function (e) {
      if (e.keyCode === 112 || e.keyCode === 113 || e.keyCode === 114 || e.keyCode === 115 || e.keyCode === 117 || e.keyCode === 118 || e.keyCode === 119 ||
        e.keyCode === 120 || e.keyCode === 121 || e.keyCode === 122 || e.keyCode === 18 || e.keyCode === 13 || e.keyCode === 32) {
        e.preventDefault();
      }
    })

    document.body.addEventListener("keydown", (event) => {
      let key = document.getElementById(event.code.toString())
      key?.children[0].classList.add('inner-active')
      key?.classList.add('active')
      key?.click()
      if (event.keyCode === 16) {
        this.shift = true
      }
    })


    document.body.addEventListener("keyup", (event) => {
      let key = document.getElementById(event.code.toString())
      key?.children[0].classList.remove('inner-active')
      key?.classList.remove('active')
      if (event.keyCode === 16) {
        this.shift = false
      }
    })

  }

  KeyboardOnclick(key) {
    let keyInput = (<HTMLInputElement>document.getElementById(key.id));
    if (this.computerStart) {

      if ((keyInput?.name !== undefined && keyInput?.name !== null) || (keyInput?.value !== undefined && keyInput?.value !== null)) {
        this.terminalInput = this.shift ? this.terminalInput + keyInput?.name : this.terminalInput + keyInput?.value
      }

      if (key.id == "Backspace") {
        this.terminalInput = this.terminalInput.slice(0, -1)
      }

      if (key.id == "Enter") {
        this.prompt = 'unprompt'
        this.commandInput.push(`$ ${this.terminalInput}`);
        if (this.commandInput.length >= 17) {
          this.commandInput.shift();
        }
        if (this.terminalInput == 'clear') {
          this.commandInput = []
        }
        try {
          this.scrollToElement(document.getElementById(this.terminalInput))
          this.terminalInput = ''
        }
        catch (err) {
          this.terminalInput = ''
        }
      }

    }
  }

  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  goto(location) {
    window.open(
      location,
      '_blank'
    );
  }

  contact_us() {
    if (this.contactForm.invalid) {
      this.contactForm_submit = true
    }
    else {
      this.contactForm_submit = false
      Swal.fire({
        icon: 'success',
        title: 'ส่งข้อมูลสำเร็จ',
        text: 'ทางเราจะรีบติดต่อกลับในภายหลัง',
        confirmButtonColor: '#4e4e4e'
      })
      this.contactForm.reset();
    }
  }

  get contact_Form() { return this.contactForm.controls }
}
