import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// tslint:disable-next-line:no-submodule-imports
import {UpgradeModule} from '@angular/upgrade/static';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {Ng7TestComponent} from './ng7-test/ng7-test.component';
import {Ng1TestDirective} from './ng1-test-upgraded.directive';
import {logServiceProvider} from '../upgraded-services.module.ng1';
import {Ng7TextfieldComponent} from './ng7-textfield/ng7-textfield.component';
import {Ng7ContentService} from './services/ng7-content-service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Ng7TestComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Ng7TestComponent,
    Ng7TextfieldComponent,
    Ng1TestDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    UpgradeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    Ng7ContentService,
    logServiceProvider,
    {provide: '$scope', useExisting: '$rootScope'}
  ],
  bootstrap: [AppComponent],
  // @TODO: do we really need to add all components that we want to use in AngularJS here?
  entryComponents: [Ng7TextfieldComponent]
})
export class AppModule {

  constructor(upgrade: UpgradeModule) {
    // I needed to bootstrap the application here instead of the main.ts because of the error:
    // Trying to get the AngularJS injector before it being set
    upgrade.bootstrap(document.documentElement, ['ngHybridApp']);
  }

  ngDoBootstrap() {
    // empty
  }
}
