package org.choinhet.demohilla.service

import com.vaadin.flow.server.auth.AnonymousAllowed
import dev.hilla.BrowserCallable
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service


@Service
@BrowserCallable
@AnonymousAllowed
class HelloService {

    fun buttonClicked(which: String): Unit = log.info("Button clicked: $which")

    private companion object {
        private val log = LoggerFactory.getLogger(HelloService::class.java)
    }
}