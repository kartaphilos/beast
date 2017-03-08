"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const material_1 = require('@angular/material');
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const http_1 = require('@angular/http');
// Imports for loading & configuring the in-memory web api
const angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
const in_memory_data_service_1 = require('./in-memory-data.service');
const app_routing_module_1 = require('./app-routing.module');
const beast_app_component_1 = require('./beast-app.component');
const shared_module_1 = require('./shared/shared.module');
const animal_module_1 = require('./animal/animal.module');
const animal_service_1 = require('./animal/animal.service');
//import {APP_BASE_HREF} from '@angular/common';
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            material_1.MaterialModule.forRoot(),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            shared_module_1.SharedModule,
            animal_module_1.AnimalModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            beast_app_component_1.BeastApp,
        ],
        /* For dialogs
          entryComponents: [
            AnimalDetailComponent
          ],
          */
        providers: [
            animal_service_1.AnimalService
        ],
        bootstrap: [beast_app_component_1.BeastApp]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map