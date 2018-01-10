import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/home/home';
import { TabComponent } from '../pages/tab/tab.component';
import { MusicComponent } from '../pages/music/music.component';
import { VideoComponent } from '../pages/video/video.component';
import { UserCenterComponent } from '../pages/user-center/user-center.component';

const appRoutes: Routes = [{
    path: 'tab',
    component: TabComponent,
    children: [{
        path: 'home',
        component: HomeComponent,
        outlet: 'route1'
    }, {
        path: 'music',
        component: MusicComponent,
        outlet: 'route2'
    }, {
        path: 'video',
        component: VideoComponent,
        outlet: 'route3'
    }, {
        path: 'user-center',
        component: UserCenterComponent,
        outlet: 'route4'
    }]
}, {
    path: '',
    redirectTo: '/tab/(route1:home//route2:music//route3:video//route4:user-center)',
    pathMatch: 'full'
}];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
