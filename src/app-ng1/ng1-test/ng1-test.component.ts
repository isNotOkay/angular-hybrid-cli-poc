// tslint:disable
import * as angular from 'angular';
import {Ng7ContentService} from '../../app-ng7/services/ng7-content-service';
import {IController} from 'angular';

export class Ng1TestController implements IController {

  version: string;

  static $inject: string[] = ['ng7ContentService', 'legacyService'];

  public onChange(event: string) {
    if (typeof event === 'string') {
      console.log(event);
      this.ng7ContentService.getGoogle();
    }
  }

  constructor(private ng7ContentService: Ng7ContentService, private legacyService: any) {
    console.log('Calling Ng1Controller Constructor');
    console.log(this.legacyService.doSomething());
    this.version = angular.version.full;
  }
}

export default angular.module('ngHybridApp.ng1test', [])
  .component('ng1Test', {
    templateUrl: 'ng1-test.template.html',
    controller: Ng1TestController,
    controllerAs: 'ng1TestCtrl'
  });
