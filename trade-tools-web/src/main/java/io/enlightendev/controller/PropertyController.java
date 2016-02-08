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

    @RequestMapping("/property")
    public String showSpecialProperty() {
        return "The property is: " + specialProperty;
    }
}