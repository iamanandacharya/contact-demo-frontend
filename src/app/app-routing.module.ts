import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'projects/auth/src/lib/auth.guard';
import { LoginComponent } from 'projects/auth/src/lib/components/login/login.component';
import { TodoComponent } from 'projects/todo/src/public-api';
import { ContactComponent } from './componenets/contact/contact.component';
import { HomeComponent } from './shared/home/home.component';
import { MasterComponent } from './shared/master/master.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "home"},
  { path: '',
  canActivate: [AuthGuard],
  component: MasterComponent, 
    children: [
      {
        path: 'todo',
        component: TodoComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },
    
    {
  path: '',
  children: [
    {
      path: 'login',
      component: LoginComponent
    }
  ]
}, 
];
// { path: '', 
//     component: MasterComponent,
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: '',
//         component: HomeComponent
//       },
//       {
//         path: 'contact',
//         component: ContactComponent,
//         children: [
//           {
//             path: 'contact/:id',
//             component: ContactComponent
//           }
//         ]
//       }
//     ]
// },
// {
//   path: '',
//   children: [
//     {
//       path: 'login',
//       component: LoginComponent
//     }
//   ]
// }, 
// {path: '**', redirectTo: ''}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
 }
