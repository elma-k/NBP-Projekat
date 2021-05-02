package com.example.musica.security.oauth2.user;


import com.example.musica.exception.*;
import com.example.musica.models.*;
import com.example.musica.exception.*;
import com.example.musica.models.*;


import java.util.*;

public class OAuth2UserInfoFactory {

    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
        if(registrationId.equalsIgnoreCase(AuthProvider.google.toString())) {
            return new GoogleOAuth2UserInfo(attributes);
        } else {
            throw new OAuth2AuthenticationProcessingException("Sorry! Login with " + registrationId + " is not supported yet.");
        }
    }
}
