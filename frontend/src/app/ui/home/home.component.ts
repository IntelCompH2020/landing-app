import { Component, OnInit } from '@angular/core';
import { Service } from '@app/core/model/service/service.model';
import { BaseComponent } from '@common/base/base.component';
import { InstallationConfigurationService } from '@common/installation-configuration/installation-configuration.service';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent implements OnInit{

	services:Partial<Service>[];


	constructor(
		private installationConfigurationService: InstallationConfigurationService
	) {
		super();
		this.services = this.installationConfigurationService.availableServices;
	}

	ngOnInit(): void {
	}

}