import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartProduct} from '../../models/cart-product.model';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
        phone: {
            required: 'Please enter your phone number',
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

    private buildForm() {
        this.formGroup = this.fb.group({
            firstName: ['',
                [Validators.required, Validators.maxLength(50)]],
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
            phone: ['',
                [Validators.required, Validators.maxLength(12)]],
            comment: ''
        });
    }

    private watchValueChanges() {
        const controls = this.formGroup.controls;

        Object.keys(controls).map((key) => {
            const subControl = controls[key];
            this.sub.add(subControl.valueChanges.subscribe(data => {
                this.setValidationMessage(subControl, key);
            }));
        });
    }

    private setValidationMessage(control: AbstractControl, controlName: string): void {
        this.validationMessages[controlName] = '';

        if ((control.touched) && control.errors) {
            this.validationMessages[controlName] = Object.keys(control.errors)
                .map(key => this.validationMessagesTemplate[controlName][key])
                .join(' ');
        }
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}
