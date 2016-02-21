package io.enlightendev.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * simple controller to validate spring cloud config client/server setup.
 */
@RestController
public class PropertyController {

    @Value("${specialprop}")
    String specialProperty;

    @Value("${aws-region}")
    String region;

    @RequestMapping("/property")
    public String showSpecialProperty() {

        String str =
            String.format("Special prop: %s; region: %s",
            new Object[]{specialProperty, region});

        return str;
    }
}