package gr.cite.intelcomp.landingapp.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({
        "gr.cite.intelcomp.landingapp",
		"gr.cite.tools",
		"gr.cite.commons"})
@EntityScan({
		"gr.cite.intelcomp.stiviewer.data"})
public class LandingAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(LandingAppApplication.class, args);
	}

}
