import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ConfigOptionService, ConstantsService, Generator, GeneratorService, LocalStorageService} from '../../../core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [{provide: Generator, useFactory: GeneratorService(10)}]
})
export class ContactUsComponent implements OnInit {
  title: string;
  email: string;
  login: string;
  records: Array<any>;

  constructor(private localeStorage: LocalStorageService,
              @Inject(Generator) private generator: Generator,
              public configOption: ConfigOptionService,
              private constants: ConstantsService
  ) { }

  ngOnInit() {
    this.title = this.constants.getObj();
    this.email = this.configOption.getObject().email;
    this.login = this.configOption.getObject().login;
    this.localeStorage.findAll().subscribe((data) => this.records = data);
  }


  onSendFeedback(item: any) {
    item.id = this.generator;
    this.localeStorage.pushItem(item);
  }
}
