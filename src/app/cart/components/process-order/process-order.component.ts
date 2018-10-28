import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartProduct} from '../../models/cart-product.model';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-process-order',
    templateUrl: './process-order.component.html',
    styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit, OnDestroy {

    products: CartProduct[];

    formGroup: FormGroup;

    private validationMessagesTemplate = {
        firstName: {
            required: 'Please enter your first name.',
            maxlength: 'Make sure that your name less then 50 characters'
        },

        lastName: {
            required: 'Please enter your last name',
            maxlength: 'Make sure that your name less then 50 characters'
        },
        city: {
            required: 'Please enter the city',
            maxlength: 'Make sure that your name less then 10 characters'
        },
        address: {
            required: 'Please enter your address',
            maxlength: 'Make sure that your name less then 50 characters'
        },
        email: {
            required: 'Please enter your email',
            pattern: 'Please make sure that you are in bound of following pattern mail@example',
            maxlength: 'Make sure that your name less then 30 characters'
        },
        phones: {
            required: 'Please enter your phones number',
            maxlength: 'Make sure that your name less then 12 characters'
        }
    };

    private sub: Subscription = new Subscription();
    validationMessages = [];

    constructor(private cartService: CartService,
                private fb: FormBuilder) {
        cartService.findAll().subscribe(data => this.products = data);
    }

    ngOnInit() {
        this.buildForm();
        this.watchValueChanges();
    }

    onAddPhone() {
        (<FormArray>this.formGroup.get('phones')).push(this.buildPhoneGroup());
    }

    get phones(): FormArray {
        return <FormArray>this.formGroup.get('phones');
    }

    private buildForm() {
        this.formGroup = this.fb.group({
            firstName: new FormControl('',
                {validators: [Validators.required, Validators.maxLength(3)], updateOn: 'blur'}),
            lastName: ['',
                [Validators.required, Validators.maxLength(50)]],
            city: ['',
                [Validators.required, Validators.maxLength(10)]],
            address: ['',
                [Validators.required, Validators.maxLength(20)]],
            email: ['',
                [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'),
                    Validators.maxLength(30)]
            ],
            phones: this.fb.array([this.buildPhoneGroup()]),
            comment: ''
        });
    }

    private buildPhoneGroup(): FormGroup {
        return this.fb.group({
            phone: ['', [Validators.required, Validators.maxLength(12)]]
        });
    }

    private watchValueChanges() {
        const controls = this.formGroup.controls;

        Object.keys(controls).map((key) => {
            const subControl = controls[key];
            this.sub.add(subControl.valueChanges
                .subscribe(data => {
                    this.processValidation(subControl, key);
                }));
        });
    }

    private processValidation(control: AbstractControl, controlName: string): void {

        if (control instanceof FormArray) {
            let groupMsg = '';
            control.controls.forEach(c => {
                const group = (<FormGroup>c).controls;
                const keys = Object.keys(group);
                keys.forEach(key => {
                    groupMsg = groupMsg + ' ' + this.setMessage(group[key], controlName);
                });
                this.validationMessages[controlName] = groupMsg;
            });

            return;
        }

        this.validationMessages[controlName] = this.setMessage(control, controlName);

    }

    private setMessage(control: AbstractControl, controlName: string): string {
        if ((control.touched || control.dirty) && control.errors) {
            return Object.keys(control.errors)
                .map(key => this.validationMessagesTemplate[controlName][key])
                .join(' ');
        }

        return '';
    }

    onBlur() {

    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}
