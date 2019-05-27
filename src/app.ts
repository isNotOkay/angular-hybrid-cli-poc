import * as angular from 'angular';

import './app.module.ng1.ts';

import './app-ng1/ng1-test/ng1-test.component';
import './app-ng1/services/log-service';

import './upgraded-services.module.ng1';
import {downgradeComponent, downgradeInjectable} from '@angular/upgrade/static';
import {Ng7TextfieldComponent} from './app-ng7/ng7-textfield/ng7-textfield.component';
import {Ng7ContentService} from './app-ng7/services/ng7-content-service';

angular.module('ngHybridApp', [
  'ngHybridApp.log',
  'ngHybridApp.ng1test',
  'ngHybridApp.legacy'
]).directive(
  'ng7Textfield',
  downgradeComponent({component: Ng7TextfieldComponent}) as angular.IDirectiveFactory
).factory('ng7ContentService', downgradeInjectable(Ng7ContentService));
