import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';


const routes: Routes = [
  {path:'',redirectTo:'templateform',pathMatch:'full'},
  {path:'templateform',component:TemplateFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
