import { Component, OnInit } from '@angular/core';
import { FooterUrls } from '@app/core/model/footer/footer.model';
import { InstallationConfigurationService } from '@common/installation-configuration/installation-configuration.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerUrls: FooterUrls;

  constructor(private installaticonConfigurationService: InstallationConfigurationService) {

    this.footerUrls = {
      facebook: '#',
      twitter: '#',
      privacyPolicy: '#',
      termsOfUse: '#',
      ...this.installaticonConfigurationService.footerURLS
    };
  }

  ngOnInit(): void {
  }

}
