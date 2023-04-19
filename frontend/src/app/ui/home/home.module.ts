import { NgModule } from '@angular/core';
import { HomeRoutingModule } from '@app/ui/home/home-routing.module';
import { HomeComponent } from '@app/ui/home/home.component';
import { CommonUiModule } from '@common/ui/common-ui.module';
import { GaugeComponent } from './gauge/gauge.component';
import { ServiceCardComponent } from './service-card/service-card.component';

@NgModule({
	imports: [
		CommonUiModule,
		HomeRoutingModule
	],
	declarations: [
		HomeComponent,
  GaugeComponent,
  ServiceCardComponent,
	]
})
export class HomeModule { }
