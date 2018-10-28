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

    private validationMessages = {
        firstName: {
            required: 'Please enter your email address.',
            maxLength: 'Make sure that your name less then 50 characters'
        },

        lastName: {
            required: 'Please enter your last name',
            maxLength: 'Make sure that your name less then 50 characters'
        },
    };

    private sub: Subscription = new Subscription();
    private validationMessage: string;

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
                [Validators.required, Validators.maxLength(50)]],
            address: ['',
                [Validators.required, Validators.maxLength(20)]],
            email: ['',
                [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.email]
            ],
            phone: ['',
                [Validators.required, Validators.maxLength(12)]],
            comment: ''
        });
    }

    private watchValueChanges() {
        const firstName = this.formGroup.get('firstName');

        const subFirstName = firstName.valueChanges.subscribe(data => {
                this.setValidationMessage(firstName, 'firstName');
            }
        );

        this.sub.add(subFirstName);
    }

    private setValidationMessage(control: AbstractControl, controlName: string): void {
        this.validationMessage = '';

        if ((control.touched || control.dirty) && control.errors) {
            console.log('e', control);
            this.validationMessage = Object.keys(control.errors)
                .map(key => this.validationMessages[controlName][key])
                .join(' ');
        }
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}
