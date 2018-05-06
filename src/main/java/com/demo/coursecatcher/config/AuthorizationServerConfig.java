package com.demo.coursecatcher.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;

@EnableAuthorizationServer
@Configuration
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    private AuthenticationManager authenticationManager;

    private static final Logger logger = LoggerFactory.getLogger(AuthorizationServerConfig.class);
    private static final String DEFAULT_CLIENT_ID = "oauth2-client";
    private static final String DEFAULT_CLIENT_SECRET = "oauth2-secret";
    private static final String[] DEFAULT_AUTHORITIES = {"CLIENT", "ADMIN"};
    private static final String[] DEFAULT_SCOPES = {"read", "write"};


    public AuthorizationServerConfig() {
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        security.checkTokenAccess("isAuthenticated()");
    }

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        logger.debug("Configuring OAuth2 client with properties [{}]",
                DEFAULT_CLIENT_ID);
        clients.inMemory()
                .withClient(DEFAULT_CLIENT_ID)
                .authorizedGrantTypes("password", "refresh_token")
                .authorities(DEFAULT_AUTHORITIES)
                .secret(DEFAULT_CLIENT_SECRET)
                .accessTokenValiditySeconds(500)
                .scopes(DEFAULT_SCOPES);
    }

    @Bean
    public AuthenticationManager customAuthenticationManager() throws Exception {
        return authenticationManager;
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        endpoints.authenticationManager(customAuthenticationManager());
    }
}
