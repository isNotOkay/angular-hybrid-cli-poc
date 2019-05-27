import * as angular from 'angular';
import * as LegacyService from './app-ng1/services/legacy-service';

angular.module('ngHybridApp.log', []);
angular.module('ngHybridApp.legacy', []);
angular.module('ngHybridApp.ng1test', []);
angular.module('ngHybridApp.legacy', []).service('legacyService', LegacyService);



