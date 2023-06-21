import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { bookstoreComponent } from './bookstore/bookstore.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AddbookComponent } from './addbook/addbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';

const routes: Routes = [{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'adminregister',component:AdminregisterComponent},
{path:'adminpage',component:AdminpageComponent},
{path:'addbook',component:AddbookComponent},
{path:'deletebook',component:DeletebookComponent},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path: 'all-books', component: AllBooksComponent },
{path: 'bookstore', component: bookstoreComponent },
{path: 'wishlist', component: WishlistComponent },
{path: '**', component: PageNotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
