import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AppCommonModule } from 'projects/app-common/src/public-api';
import { ContactComponent } from 'src/app/componenets/contact/contact.component';
import { TodoComponent } from './todo.component';
ContactComponent


@NgModule({
  declarations: [
    TodoComponent,
  ],
  imports: [
    AppCommonModule,
  ],
  exports: [
    TodoComponent,
  ]
})
export class TodoModule { }
