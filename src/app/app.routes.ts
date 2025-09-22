import { Contacts } from './Components/contacts/contacts';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Products } from './Components/products/products';
import { About } from './Components/about/about';
import { NotFound } from './Components/not-found/not-found';
import { ProductDetails } from './Components/product-details/product-details';
import { ProductSearch } from './Components/product-search/product-search';
import { UserRegestration } from './Components/user-regestration/user-regestration';
import { UserLogin } from './Components/user-login/user-login';
import { guestGuardGuard } from './guards/guest-guard-guard';
import { authGardGuard } from './guards/auth-gard-guard';

export const routes: Routes = [

  {
     path: '',
     redirectTo: '/home',
     pathMatch: 'full'
  },
  { 
    path: 'register',
    component: UserRegestration, 
    canActivate: [guestGuardGuard]
   },
  { 
    path: 'login',
    component: UserLogin,
    canActivate: [guestGuardGuard]
    },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'productSearch',
    component: ProductSearch,
    canActivate: [authGardGuard],
  },
  {
     path: 'products/:id',
     component: ProductDetails,
     canActivate: [authGardGuard] },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contacts',
    component: Contacts,
  },

  {
    path: '**',
    component: NotFound,
  },
];
