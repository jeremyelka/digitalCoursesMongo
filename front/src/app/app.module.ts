import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shareds/header/header.component';
import { FooterComponent } from './components/shareds/footer/footer.component';
import { TableBoardComponent } from './components/table-board/table-board.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { FilterPipe } from './pipes/filter.pipe';
import { FormlyModule } from '@ngx-formly/core';
import { DatepickerTypeComponent } from './models/datepicker-type.component';
import { FormlyMaterialModule } from '@ngx-formly/material';
import {FlexLayoutModule} from '@angular/flex-layout';
const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableBoardComponent,
    AddCourseComponent,
    FilterPipe,
    DatepickerTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      types: [{
        name: 'datepicker',
        component: DatepickerTypeComponent,
        wrappers: ['form-field'],
        defaultOptions: {
          defaultValue: new Date(),
          templateOptions: {
            datepickerOptions: {},
          },
        },
      }]
    })
  ],
  providers: [[
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    },
  ],
    MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
