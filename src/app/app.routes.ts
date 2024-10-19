import { Routes } from '@angular/router';
import { FirstPageComponent } from './component/first-page/first-page.component';
import { TopComponent } from './component/top/top.component';
import { BottomComponent } from './component/bottom/bottom.component';

export const routes: Routes = [
    {path:'homepage',component:FirstPageComponent },
    {path:'',pathMatch:'full',component:FirstPageComponent},
    {path:'navigations',component:TopComponent },
    {path:'footer',component:BottomComponent }
];
