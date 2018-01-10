import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule }  from '@angular/platform-browser';
import { UIComponentsModule } from 'tanbo-ui-native';
import { hybrid } from 'hybrid-api';

import { AppComponent } from './app';
import { routing } from './app.routing';
import { ApiInterceptor } from './api-interceptor';

import { TabComponent } from '../pages/tab/tab.component';
import { HomeComponent } from '../pages/home/home';
import { MusicComponent } from '../pages/music/music.component';
import { VideoComponent } from '../pages/video/video.component';
import { UserCenterComponent } from '../pages/user-center/user-center.component';

hybrid.navigation.hide();

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        UIComponentsModule.forRoot(),
        routing
    ],
    declarations: [
        AppComponent,
        TabComponent,
        HomeComponent,
        MusicComponent,
        VideoComponent,
        UserCenterComponent
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: ApiInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
