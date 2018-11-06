package edu.tdt.it.footcare.payload.auth;

import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class JwtAuthResponse {

    @NonNull
    private String accessToken;
    private String tokenType = "Bearer";
}
