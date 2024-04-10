package org.choinhet.demohilla.endpoint

import com.vaadin.flow.server.auth.AnonymousAllowed
import dev.hilla.BrowserCallable
import dev.hilla.Endpoint
import org.slf4j.LoggerFactory


@Endpoint
@BrowserCallable
@AnonymousAllowed
class HelloEndpoint {

    fun buttonClicked(which: String): Unit = log.info("Button clicked: $which")

    private companion object {
        private val log = LoggerFactory.getLogger(HelloEndpoint::class.java)
    }
}