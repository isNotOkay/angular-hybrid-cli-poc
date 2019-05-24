import * as angular from 'angular';

import './app.module.ng1.ts';

import './app-ng1/ng1-test/ng1-test.component';
import './app-ng1/services/log-service';

import './upgraded-services.module.ng1';
import {downgradeComponent} from '@angular/upgrade/static';
import {Ng7TextfieldComponent} from './app-ng7/ng7-textfield/ng7-textfield.component';

angular.module('ngHybridApp', [
  'ngHybridApp.log',
  'ngHybridApp.ng1test'
]).directive(
  'ng7Textfield',
  downgradeComponent({component: Ng7TextfieldComponent}) as angular.IDirectiveFactory
);
