import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OTPInterface, SignupInterface } from 'src/app/models/auth';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-one',
  templateUrl: './modal-one.component.html',
  styleUrls: ['./modal-one.component.scss'],
})
export class ModalOneComponent implements OnInit {
  signupForm: FormGroup;
  IDs: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: ModalService
  ) {
    this.signupForm = this.formBuilder.group({
      pin: ['', [Validators.required, Validators.minLength(5)]],
      mobile_number: [
        '',
        [Validators.required, Validators.pattern(/^-?([0-9]\d*)?$/)],
      ],
      surname: ['', [Validators.required]],
      id_type: ['', [Validators.required]],
      other_names: ['', [Validators.required]],
      id_number: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {
    this.getIdType();
  }

  getIdType() {
    this.authService.getIDTypes().subscribe((id: any) => {
      this.IDs = id['details'];
      console.log(this.IDs);
    });
  }

  // Getter functions
  get ctry_code() {
    return this.signupForm.get('ctry_code');
  }
  get pin() {
    return this.signupForm.get('pin');
  }
  get mobile_number() {
    return this.signupForm.get('mobile_number');
  }
  get surname() {
    return this.signupForm.get('surname');
  }
  get other_names() {
    return this.signupForm.get('other_names');
  }
  get id_type() {
    return this.signupForm.get('id_type');
  }
  get id_number() {
    return this.signupForm.get('id_type');
  }

  handleSignup(): void {
    console.log(this.mobile_number?.value);

    const signupPayload: SignupInterface = {
      ctry_code: this.mobile_number?.value.CountryModel.CountryPhoneCode,
      mobile_number: this.mobile_number?.value.Number.split(' ')
        .join('')
        .slice(-9),
      surname: this.surname?.value,
      other_names: this.other_names?.value,
      pin: this.pin?.value,
      id_type: this.id_type?.value,
      id_number: this.id_number?.value,
    };
    const otpPayload: OTPInterface = {
      ctry_code:
        this.mobile_number?.value.CountryModel.CountryPhoneCode.slice(-4),
      mobile_number: this.mobile_number?.value.Number.split(' ')
        .join('')
        .slice(-9),
    };
    this.authService.sendOTP(otpPayload);
  }
}
