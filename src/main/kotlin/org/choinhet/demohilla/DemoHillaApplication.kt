package org.choinhet.demohilla

import com.vaadin.flow.component.page.AppShellConfigurator
import com.vaadin.flow.theme.Theme
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
@Theme(value = "hilla-react-app")
class DemoHillaApplication: AppShellConfigurator

fun main(args: Array<String>) {
    runApplication<DemoHillaApplication>(*args)
}