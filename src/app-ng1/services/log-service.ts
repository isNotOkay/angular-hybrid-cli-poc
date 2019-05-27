// tslint:disable
import * as angular from 'angular';
import {IHttpService} from 'angular';

export class LogService {

	constructor(private $http: IHttpService) {}
	
	sayHello(name: string) {
	  console.log(this.$http);
		return "You Just call the Ng1 Service (LogService), Hello " + name;
	}
}

var app = angular.module('ngHybridApp.log', [])
	.service('logService', LogService);
