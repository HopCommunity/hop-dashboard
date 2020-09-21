export declare namespace CognitoModel {
  export interface Client {
    endpoint: string;
    fetchOptions: any;
  }
  export interface CognitoUserPoolModel {
    userPoolId: string;
    clientId: string;
    client: Client;
    advancedSecurityDataCollectionFlag: boolean;
    storage: Storage;
  }
  export interface CognitoUserSessionModel {
    idToken: CognitoIdTokenModel;
    refreshToken: CognitoRefreshTokenModel;
    accessToken: CognitoAccessTokenModel;
  }
  export interface CognitoAccessTokenModel {
    jwtToken: string;
    payload: {
      auth_time: number;
      client_id: string;
      event_id: string;
      exp: number;
      iat: number;
      iss: string;
      jti: string;
      scope: string;
      sub: string;
      token_use: string;
      username: string;
    };
    clockDrift: number;
  }
  export interface CognitoIdTokenModel {
    jwtToken: string;
    payload: {
      aud: string;
      auth_time: number;
      'cognito:username': string;
      email: string;
      email_verified: boolean;
      event_id: string;
      exp: number;
      iat: number;
      iss: string;
      sub: string;
      token_use: string;
    };
  }
  export interface CognitoRefreshTokenModel {
    token: string;
  }
  export interface CognitoUserModel {
    Session: any;
    attributes: {
      sub: string;
      email_verified: Boolean;
      email: string;
    };
    authenticationFlowType: string;
    client: Client;
    keyPrefix: string;
    pool: CognitoUserPoolModel;
    preferredMFA: string;
    signInUserSession: CognitoUserSessionModel;
    userDataKey: string;
    username: string;
  }

  export interface AuthState {
    state: string;
    user: CognitoUserModel;
  }

  export interface CognitoConfigModel {
    Auth: {
      mandatorySignIn: Boolean;
      region: string;
      userPoolId: string;
      userPoolWebClientId: string;
    };
  }
  export interface ISignUpResult {
    user: CognitoUserModel;
    userConfirmed: boolean;
    userSub: string;
  }
}

export const mock = {
  state: 'signedIn',
  user: {
    username: '50a9392a-96f6-4877-89dd-6b21a61b13c8',
    pool: {
      userPoolId: 'us-east-1_1hM0zrzP1',
      clientId: 've7q25uthr00f2vpfe18ee593',
      client: {
        endpoint: 'https://cognito-idp.us-east-1.amazonaws.com/',
        fetchOptions: {},
      },
      advancedSecurityDataCollectionFlag: true,
      storage: {
        'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593.50a9392a-96f6-4877-89dd-6b21a61b13c8.clockDrift':
          '0',
        'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593.LastAuthUser':
          '50a9392a-96f6-4877-89dd-6b21a61b13c8',
        'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593.50a9392a-96f6-4877-89dd-6b21a61b13c8.accessToken':
          'eyJraWQiOiJSVDlyN1JhSXdPUVwvS2ZHTmE1Y25BbmFPaEZZa2Ixbm1MbDh3cmRoVEpQQT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1MGE5MzkyYS05NmY2LTQ4NzctODlkZC02YjIxYTYxYjEzYzgiLCJldmVudF9pZCI6IjliZmRjNjk3LWU5MmQtNDAzMy1hMDBiLWUxZGRmZmU4MzM5NiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1OTkwOTEwMzYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xXzFoTTB6cnpQMSIsImV4cCI6MTU5OTY2MTU3MSwiaWF0IjoxNTk5NjU3OTcxLCJqdGkiOiJlYzY1ODIxYS0wNzgwLTQ0NzgtOTkxMy0wYzgwMTdkZTYxNTgiLCJjbGllbnRfaWQiOiJ2ZTdxMjV1dGhyMDBmMnZwZmUxOGVlNTkzIiwidXNlcm5hbWUiOiI1MGE5MzkyYS05NmY2LTQ4NzctODlkZC02YjIxYTYxYjEzYzgifQ.JC2so-gtIdo-dwZVEKsZ1Nz2b4wa3wXHGJirWmtIb2lQB_VLg9UOroGfmnYyl8mlgz-ftUYixHgVaH4z-zYbqqpU-loTVufV0wy-qhaLSJdI_c5XnV4YACJN4RiH0kCborawtS9xw-A5Ets7WWi4xYc5BlOMEyNusc90_2NiW0ikxkET6nafLclRTJczavlR2R-JiW1NQFCJRlUkdodkWjyYJqumRRCm_DUbAQdhY3xK_tSQk5DXMj7Y6_vwF9YXLBRAB27zaeYEe8fN6vyPg49qrJxHPeHLV6m--LhQP3-RK6J_N2BqDZ2rWgfQqWSXQtrllBYPJkonLAdnF2iW_Q',
        'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593.50a9392a-96f6-4877-89dd-6b21a61b13c8.refreshToken':
          'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.CoOXCDLAwIM5wsCFuk-pyoRSaPuIHWz65QnMFFhZ5R93_y2LoyLP1_f1hPvHMrEYM_1sDqHBwDdH3iL9tZ1e__Y6hZHsdsorzsQ3aq1WnP5FL43rFjdoi7xY457GK-4T8rlc2-hkJp3F8CtSV04m7JrGYZ-99G3RRvrAmcvUrsCmsjPOJrNQvY7tfcK0FfJGYlUpnCJFUk0Hv2HyZE4kBKPoL42uzZZibSf1BqfT99eS5hASVj82WYCe9yjy3jjvaK8ppn6ma_WlLG7Vg4jA9Vc1jWsrqBYQU45LN6twL2oGsO4ohvpAWLbOY56nWRHMzmanOcg6RjmCUBY0j8IOzQ.rfqrwt5PtxvoVhFt.Ucr6V4vqYqqqKtrx5fE2PIDKVBOIAYZGGQIQwyi1S6byAeHKr66rPK7ke_oeCaES--5mhjEPKylWJXckTchNshXU5zk3MyY4SG3arrKfIEyy0EIcKwPGMqfGudQrhVPdF6XX_tqvr3FHHjcEmsk_cCR1ExzUnDfKyc206inW2zghbp1WmpwDQ9ngSXqRhnFOlWfrfUilGGenlPfexRQz-XoTFidM1HF06zPOOFX9UbyYbudfiio2zGsStc1vR7MDswt0fVLSJlW6lceucCALwtDfCDZ0sUcFmvkRCJFdW3_R2E7RTtpH9RWLGXJWDjezIAvvj30Tq6rwhas1B31pO3dAnaOQOdt6k4uZK4ZG_U5KvOVueLhwsQH2zDiBUBrsgYv5ffQifCFD1RNw_sdI_m70hRSv2Y0CqZRFKM5zTzkPYIke9RZ0kAliFInj8tWfKlM91mKIPtLeV3VspR8xVS2FKrohJ9hRYW0FtWlQS-6uyjC6JK9DHaI-zXg-7z5svXxjtV4p5pplAlIhXcYzDYecv1p8zHxLLKTm_RVibeXbtNpxXYxOLiYo9O86kH0mkZnBeHJChyGDsqVMrM3Z0imAGi6oiNATgS7cXj4ZjmAH6JfYVkRtM9ZunvfHGhJ7-Z5r81odxoz5i2zmt0VX20KZBJVlFoEJtRpe9pV5Rp7Fap6R5ILLsROttBMku13xinZE9fV-RN7Tv2tXbNDD-uJnAIGxzKZxCqWZHxrI1q_a5uk8E-Ji-0NVEKXHt_t1yuOtSzOOds9zLTQ8Lxk-mVwd6WS_C9bZsz9n82_PH9c_fU0YXBTePDeaB62NWWRqpLYpCsQ6UdJ4u5LuosQ4VKoh1j0BuyZgjoDdoHIGe6fNUpFTNqSZPH12EQl3dSifNMXTGgqWdYMMDG0yWLZmFokgr38phx40mZrs636DYPATqYEL1gYrxEVGUkp6M1UR_RflZAdfWvKROLeCBMDwRjCJ0lp7-hS126tTixaMs_RDwndnVTSM71DhKOOYxBeaLAF3bx5AZMRLY0W0y1ExZSVG41VOka4SJHkFEUfaZfqO41_JuPTXCNvYdsZUvwuoxK21yEfmdg6ypns-b0zRctQTTJaoEy5cS__aF4GgG1gjm1-GUCpgeza_whErNNFT-wtLFpZSYxRAR9-T0k6cWmO8P6RXzP4inwm67H3AuMOkMsaQqGCjXdn7T3HIe5VYWKoF6WE-YQ51QAf4A3cSgizIukEME9dHbcBQaW7ahoKPhvspcc8Y7LWj5tAtQIG7NoII_oYeoKLYCBdg8Svltjijk8Q0NpRPpVrLaMNngkuxzO5dvoMm6zyc.xEsZ1inwCcd4s_6hrRFMVQ',
        'amplify-signin-with-hostedUI': 'false',
        'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593.50a9392a-96f6-4877-89dd-6b21a61b13c8.idToken':
          'eyJraWQiOiI3eElEQXN4VnRxWWlDbitrbk1DXC9SV2FPTjZ5ZTdvMmI0ZUorT2V2NXJXST0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1MGE5MzkyYS05NmY2LTQ4NzctODlkZC02YjIxYTYxYjEzYzgiLCJhdWQiOiJ2ZTdxMjV1dGhyMDBmMnZwZmUxOGVlNTkzIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV2ZW50X2lkIjoiOWJmZGM2OTctZTkyZC00MDMzLWEwMGItZTFkZGZmZTgzMzk2IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1OTkwOTEwMzYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xXzFoTTB6cnpQMSIsImNvZ25pdG86dXNlcm5hbWUiOiI1MGE5MzkyYS05NmY2LTQ4NzctODlkZC02YjIxYTYxYjEzYzgiLCJleHAiOjE1OTk2NjE1NzEsImlhdCI6MTU5OTY1Nzk3MSwiZW1haWwiOiJjaGFycGVyQGhvcC5saWZlIn0.MTYdA9y--sftzo0tGl2mW2S_ur8ss6nvOJW2LDpb6BDCaxwNXNZn6KCRqPSF4LG3zCDVUMG4ZJ6QXlsxXOdIPv_LDCwtgI3fcbXW6pWQs4zfJzsQxzpO6RqcGqWi22JdpnY30hsjvx9cUQdni-JgE00jucKVz_fUHL8SvWECz4WbaOYiBvTuR7uZ00wysbLYVomjHA3rYE7iat5A4NPpSEIOlBBM5vQiOAALWZhXDydEwZzuT_oRP09r3sgI8Iq5YSQJa3DKl92iwWgGmMQRlEe2BqIBNn4t6UcJQC9-dV3ytbdLil_Y3ovtdwXXh6SsUvuZBl_nLRp-5t6DdiH5sg',
        'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593.50a9392a-96f6-4877-89dd-6b21a61b13c8.userData':
          '{"UserAttributes":[{"Name":"sub","Value":"50a9392a-96f6-4877-89dd-6b21a61b13c8"},{"Name":"email_verified","Value":"true"},{"Name":"email","Value":"blah@hop.life"}],"Username":"50a9392a-96f6-4877-89dd-6b21a61b13c8"}',
      },
    },
    Session: null,
    client: {
      endpoint: 'https://cognito-idp.us-east-1.amazonaws.com/',
      fetchOptions: {},
    },
    signInUserSession: {
      idToken: {
        jwtToken:
          'eyJraWQiOiI3eElEQXN4VnRxWWlDbitrbk1DXC9SV2FPTjZ5ZTdvMmI0ZUorT2V2NXJXST0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1MGE5MzkyYS05NmY2LTQ4NzctODlkZC02YjIxYTYxYjEzYzgiLCJhdWQiOiJ2ZTdxMjV1dGhyMDBmMnZwZmUxOGVlNTkzIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV2ZW50X2lkIjoiOWJmZGM2OTctZTkyZC00MDMzLWEwMGItZTFkZGZmZTgzMzk2IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1OTkwOTEwMzYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xXzFoTTB6cnpQMSIsImNvZ25pdG86dXNlcm5hbWUiOiI1MGE5MzkyYS05NmY2LTQ4NzctODlkZC02YjIxYTYxYjEzYzgiLCJleHAiOjE1OTk2NjE1NzEsImlhdCI6MTU5OTY1Nzk3MSwiZW1haWwiOiJjaGFycGVyQGhvcC5saWZlIn0.MTYdA9y--sftzo0tGl2mW2S_ur8ss6nvOJW2LDpb6BDCaxwNXNZn6KCRqPSF4LG3zCDVUMG4ZJ6QXlsxXOdIPv_LDCwtgI3fcbXW6pWQs4zfJzsQxzpO6RqcGqWi22JdpnY30hsjvx9cUQdni-JgE00jucKVz_fUHL8SvWECz4WbaOYiBvTuR7uZ00wysbLYVomjHA3rYE7iat5A4NPpSEIOlBBM5vQiOAALWZhXDydEwZzuT_oRP09r3sgI8Iq5YSQJa3DKl92iwWgGmMQRlEe2BqIBNn4t6UcJQC9-dV3ytbdLil_Y3ovtdwXXh6SsUvuZBl_nLRp-5t6DdiH5sg',
        payload: {
          sub: '50a9392a-96f6-4877-89dd-6b21a61b13c8',
          aud: 've7q25uthr00f2vpfe18ee593',
          email_verified: true,
          event_id: '9bfdc697-e92d-4033-a00b-e1ddffe83396',
          token_use: 'id',
          auth_time: 1599091036,
          iss:
            'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1hM0zrzP1',
          'cognito:username': '50a9392a-96f6-4877-89dd-6b21a61b13c8',
          exp: 1599661571,
          iat: 1599657971,
          email: 'blah@hop.life',
        },
      },
      refreshToken: {
        token:
          'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.CoOXCDLAwIM5wsCFuk-pyoRSaPuIHWz65QnMFFhZ5R93_y2LoyLP1_f1hPvHMrEYM_1sDqHBwDdH3iL9tZ1e__Y6hZHsdsorzsQ3aq1WnP5FL43rFjdoi7xY457GK-4T8rlc2-hkJp3F8CtSV04m7JrGYZ-99G3RRvrAmcvUrsCmsjPOJrNQvY7tfcK0FfJGYlUpnCJFUk0Hv2HyZE4kBKPoL42uzZZibSf1BqfT99eS5hASVj82WYCe9yjy3jjvaK8ppn6ma_WlLG7Vg4jA9Vc1jWsrqBYQU45LN6twL2oGsO4ohvpAWLbOY56nWRHMzmanOcg6RjmCUBY0j8IOzQ.rfqrwt5PtxvoVhFt.Ucr6V4vqYqqqKtrx5fE2PIDKVBOIAYZGGQIQwyi1S6byAeHKr66rPK7ke_oeCaES--5mhjEPKylWJXckTchNshXU5zk3MyY4SG3arrKfIEyy0EIcKwPGMqfGudQrhVPdF6XX_tqvr3FHHjcEmsk_cCR1ExzUnDfKyc206inW2zghbp1WmpwDQ9ngSXqRhnFOlWfrfUilGGenlPfexRQz-XoTFidM1HF06zPOOFX9UbyYbudfiio2zGsStc1vR7MDswt0fVLSJlW6lceucCALwtDfCDZ0sUcFmvkRCJFdW3_R2E7RTtpH9RWLGXJWDjezIAvvj30Tq6rwhas1B31pO3dAnaOQOdt6k4uZK4ZG_U5KvOVueLhwsQH2zDiBUBrsgYv5ffQifCFD1RNw_sdI_m70hRSv2Y0CqZRFKM5zTzkPYIke9RZ0kAliFInj8tWfKlM91mKIPtLeV3VspR8xVS2FKrohJ9hRYW0FtWlQS-6uyjC6JK9DHaI-zXg-7z5svXxjtV4p5pplAlIhXcYzDYecv1p8zHxLLKTm_RVibeXbtNpxXYxOLiYo9O86kH0mkZnBeHJChyGDsqVMrM3Z0imAGi6oiNATgS7cXj4ZjmAH6JfYVkRtM9ZunvfHGhJ7-Z5r81odxoz5i2zmt0VX20KZBJVlFoEJtRpe9pV5Rp7Fap6R5ILLsROttBMku13xinZE9fV-RN7Tv2tXbNDD-uJnAIGxzKZxCqWZHxrI1q_a5uk8E-Ji-0NVEKXHt_t1yuOtSzOOds9zLTQ8Lxk-mVwd6WS_C9bZsz9n82_PH9c_fU0YXBTePDeaB62NWWRqpLYpCsQ6UdJ4u5LuosQ4VKoh1j0BuyZgjoDdoHIGe6fNUpFTNqSZPH12EQl3dSifNMXTGgqWdYMMDG0yWLZmFokgr38phx40mZrs636DYPATqYEL1gYrxEVGUkp6M1UR_RflZAdfWvKROLeCBMDwRjCJ0lp7-hS126tTixaMs_RDwndnVTSM71DhKOOYxBeaLAF3bx5AZMRLY0W0y1ExZSVG41VOka4SJHkFEUfaZfqO41_JuPTXCNvYdsZUvwuoxK21yEfmdg6ypns-b0zRctQTTJaoEy5cS__aF4GgG1gjm1-GUCpgeza_whErNNFT-wtLFpZSYxRAR9-T0k6cWmO8P6RXzP4inwm67H3AuMOkMsaQqGCjXdn7T3HIe5VYWKoF6WE-YQ51QAf4A3cSgizIukEME9dHbcBQaW7ahoKPhvspcc8Y7LWj5tAtQIG7NoII_oYeoKLYCBdg8Svltjijk8Q0NpRPpVrLaMNngkuxzO5dvoMm6zyc.xEsZ1inwCcd4s_6hrRFMVQ',
      },
      accessToken: {
        jwtToken:
          'eyJraWQiOiJSVDlyN1JhSXdPUVwvS2ZHTmE1Y25BbmFPaEZZa2Ixbm1MbDh3cmRoVEpQQT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1MGE5MzkyYS05NmY2LTQ4NzctODlkZC02YjIxYTYxYjEzYzgiLCJldmVudF9pZCI6IjliZmRjNjk3LWU5MmQtNDAzMy1hMDBiLWUxZGRmZmU4MzM5NiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1OTkwOTEwMzYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xXzFoTTB6cnpQMSIsImV4cCI6MTU5OTY2MTU3MSwiaWF0IjoxNTk5NjU3OTcxLCJqdGkiOiJlYzY1ODIxYS0wNzgwLTQ0NzgtOTkxMy0wYzgwMTdkZTYxNTgiLCJjbGllbnRfaWQiOiJ2ZTdxMjV1dGhyMDBmMnZwZmUxOGVlNTkzIiwidXNlcm5hbWUiOiI1MGE5MzkyYS05NmY2LTQ4NzctODlkZC02YjIxYTYxYjEzYzgifQ.JC2so-gtIdo-dwZVEKsZ1Nz2b4wa3wXHGJirWmtIb2lQB_VLg9UOroGfmnYyl8mlgz-ftUYixHgVaH4z-zYbqqpU-loTVufV0wy-qhaLSJdI_c5XnV4YACJN4RiH0kCborawtS9xw-A5Ets7WWi4xYc5BlOMEyNusc90_2NiW0ikxkET6nafLclRTJczavlR2R-JiW1NQFCJRlUkdodkWjyYJqumRRCm_DUbAQdhY3xK_tSQk5DXMj7Y6_vwF9YXLBRAB27zaeYEe8fN6vyPg49qrJxHPeHLV6m--LhQP3-RK6J_N2BqDZ2rWgfQqWSXQtrllBYPJkonLAdnF2iW_Q',
        payload: {
          sub: '50a9392a-96f6-4877-89dd-6b21a61b13c8',
          event_id: '9bfdc697-e92d-4033-a00b-e1ddffe83396',
          token_use: 'access',
          scope: 'aws.cognito.signin.user.admin',
          auth_time: 1599091036,
          iss:
            'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1hM0zrzP1',
          exp: 1599661571,
          iat: 1599657971,
          jti: 'ec65821a-0780-4478-9913-0c8017de6158',
          client_id: 've7q25uthr00f2vpfe18ee593',
          username: '50a9392a-96f6-4877-89dd-6b21a61b13c8',
        },
      },
      clockDrift: 0,
    },
    authenticationFlowType: 'USER_SRP_AUTH',
    storage: {
      'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593.50a9392a-96f6-4877-89dd-6b21a61b13c8.clockDrift':
        '0',
      'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593.LastAuthUser':
        '50a9392a-96f6-4877-89dd-6b21a61b13c8',
      'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593.50a9392a-96f6-4877-89dd-6b21a61b13c8.accessToken':
        'eyJraWQiOiJSVDlyN1JhSXdPUVwvS2ZHTmE1Y25BbmFPaEZZa2Ixbm1MbDh3cmRoVEpQQT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1MGE5MzkyYS05NmY2LTQ4NzctODlkZC02YjIxYTYxYjEzYzgiLCJldmVudF9pZCI6IjliZmRjNjk3LWU5MmQtNDAzMy1hMDBiLWUxZGRmZmU4MzM5NiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1OTkwOTEwMzYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xXzFoTTB6cnpQMSIsImV4cCI6MTU5OTY2MTU3MSwiaWF0IjoxNTk5NjU3OTcxLCJqdGkiOiJlYzY1ODIxYS0wNzgwLTQ0NzgtOTkxMy0wYzgwMTdkZTYxNTgiLCJjbGllbnRfaWQiOiJ2ZTdxMjV1dGhyMDBmMnZwZmUxOGVlNTkzIiwidXNlcm5hbWUiOiI1MGE5MzkyYS05NmY2LTQ4NzctODlkZC02YjIxYTYxYjEzYzgifQ.JC2so-gtIdo-dwZVEKsZ1Nz2b4wa3wXHGJirWmtIb2lQB_VLg9UOroGfmnYyl8mlgz-ftUYixHgVaH4z-zYbqqpU-loTVufV0wy-qhaLSJdI_c5XnV4YACJN4RiH0kCborawtS9xw-A5Ets7WWi4xYc5BlOMEyNusc90_2NiW0ikxkET6nafLclRTJczavlR2R-JiW1NQFCJRlUkdodkWjyYJqumRRCm_DUbAQdhY3xK_tSQk5DXMj7Y6_vwF9YXLBRAB27zaeYEe8fN6vyPg49qrJxHPeHLV6m--LhQP3-RK6J_N2BqDZ2rWgfQqWSXQtrllBYPJkonLAdnF2iW_Q',
      'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593.50a9392a-96f6-4877-89dd-6b21a61b13c8.refreshToken':
        'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.CoOXCDLAwIM5wsCFuk-pyoRSaPuIHWz65QnMFFhZ5R93_y2LoyLP1_f1hPvHMrEYM_1sDqHBwDdH3iL9tZ1e__Y6hZHsdsorzsQ3aq1WnP5FL43rFjdoi7xY457GK-4T8rlc2-hkJp3F8CtSV04m7JrGYZ-99G3RRvrAmcvUrsCmsjPOJrNQvY7tfcK0FfJGYlUpnCJFUk0Hv2HyZE4kBKPoL42uzZZibSf1BqfT99eS5hASVj82WYCe9yjy3jjvaK8ppn6ma_WlLG7Vg4jA9Vc1jWsrqBYQU45LN6twL2oGsO4ohvpAWLbOY56nWRHMzmanOcg6RjmCUBY0j8IOzQ.rfqrwt5PtxvoVhFt.Ucr6V4vqYqqqKtrx5fE2PIDKVBOIAYZGGQIQwyi1S6byAeHKr66rPK7ke_oeCaES--5mhjEPKylWJXckTchNshXU5zk3MyY4SG3arrKfIEyy0EIcKwPGMqfGudQrhVPdF6XX_tqvr3FHHjcEmsk_cCR1ExzUnDfKyc206inW2zghbp1WmpwDQ9ngSXqRhnFOlWfrfUilGGenlPfexRQz-XoTFidM1HF06zPOOFX9UbyYbudfiio2zGsStc1vR7MDswt0fVLSJlW6lceucCALwtDfCDZ0sUcFmvkRCJFdW3_R2E7RTtpH9RWLGXJWDjezIAvvj30Tq6rwhas1B31pO3dAnaOQOdt6k4uZK4ZG_U5KvOVueLhwsQH2zDiBUBrsgYv5ffQifCFD1RNw_sdI_m70hRSv2Y0CqZRFKM5zTzkPYIke9RZ0kAliFInj8tWfKlM91mKIPtLeV3VspR8xVS2FKrohJ9hRYW0FtWlQS-6uyjC6JK9DHaI-zXg-7z5svXxjtV4p5pplAlIhXcYzDYecv1p8zHxLLKTm_RVibeXbtNpxXYxOLiYo9O86kH0mkZnBeHJChyGDsqVMrM3Z0imAGi6oiNATgS7cXj4ZjmAH6JfYVkRtM9ZunvfHGhJ7-Z5r81odxoz5i2zmt0VX20KZBJVlFoEJtRpe9pV5Rp7Fap6R5ILLsROttBMku13xinZE9fV-RN7Tv2tXbNDD-uJnAIGxzKZxCqWZHxrI1q_a5uk8E-Ji-0NVEKXHt_t1yuOtSzOOds9zLTQ8Lxk-mVwd6WS_C9bZsz9n82_PH9c_fU0YXBTePDeaB62NWWRqpLYpCsQ6UdJ4u5LuosQ4VKoh1j0BuyZgjoDdoHIGe6fNUpFTNqSZPH12EQl3dSifNMXTGgqWdYMMDG0yWLZmFokgr38phx40mZrs636DYPATqYEL1gYrxEVGUkp6M1UR_RflZAdfWvKROLeCBMDwRjCJ0lp7-hS126tTixaMs_RDwndnVTSM71DhKOOYxBeaLAF3bx5AZMRLY0W0y1ExZSVG41VOka4SJHkFEUfaZfqO41_JuPTXCNvYdsZUvwuoxK21yEfmdg6ypns-b0zRctQTTJaoEy5cS__aF4GgG1gjm1-GUCpgeza_whErNNFT-wtLFpZSYxRAR9-T0k6cWmO8P6RXzP4inwm67H3AuMOkMsaQqGCjXdn7T3HIe5VYWKoF6WE-YQ51QAf4A3cSgizIukEME9dHbcBQaW7ahoKPhvspcc8Y7LWj5tAtQIG7NoII_oYeoKLYCBdg8Svltjijk8Q0NpRPpVrLaMNngkuxzO5dvoMm6zyc.xEsZ1inwCcd4s_6hrRFMVQ',
      'amplify-signin-with-hostedUI': 'false',
      'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593.50a9392a-96f6-4877-89dd-6b21a61b13c8.idToken':
        'eyJraWQiOiI3eElEQXN4VnRxWWlDbitrbk1DXC9SV2FPTjZ5ZTdvMmI0ZUorT2V2NXJXST0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1MGE5MzkyYS05NmY2LTQ4NzctODlkZC02YjIxYTYxYjEzYzgiLCJhdWQiOiJ2ZTdxMjV1dGhyMDBmMnZwZmUxOGVlNTkzIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV2ZW50X2lkIjoiOWJmZGM2OTctZTkyZC00MDMzLWEwMGItZTFkZGZmZTgzMzk2IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1OTkwOTEwMzYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xXzFoTTB6cnpQMSIsImNvZ25pdG86dXNlcm5hbWUiOiI1MGE5MzkyYS05NmY2LTQ4NzctODlkZC02YjIxYTYxYjEzYzgiLCJleHAiOjE1OTk2NjE1NzEsImlhdCI6MTU5OTY1Nzk3MSwiZW1haWwiOiJjaGFycGVyQGhvcC5saWZlIn0.MTYdA9y--sftzo0tGl2mW2S_ur8ss6nvOJW2LDpb6BDCaxwNXNZn6KCRqPSF4LG3zCDVUMG4ZJ6QXlsxXOdIPv_LDCwtgI3fcbXW6pWQs4zfJzsQxzpO6RqcGqWi22JdpnY30hsjvx9cUQdni-JgE00jucKVz_fUHL8SvWECz4WbaOYiBvTuR7uZ00wysbLYVomjHA3rYE7iat5A4NPpSEIOlBBM5vQiOAALWZhXDydEwZzuT_oRP09r3sgI8Iq5YSQJa3DKl92iwWgGmMQRlEe2BqIBNn4t6UcJQC9-dV3ytbdLil_Y3ovtdwXXh6SsUvuZBl_nLRp-5t6DdiH5sg',
      'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593.50a9392a-96f6-4877-89dd-6b21a61b13c8.userData':
        '{"UserAttributes":[{"Name":"sub","Value":"50a9392a-96f6-4877-89dd-6b21a61b13c8"},{"Name":"email_verified","Value":"true"},{"Name":"email","Value":"blah@hop.life"}],"Username":"50a9392a-96f6-4877-89dd-6b21a61b13c8"}',
    },
    keyPrefix: 'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593',
    userDataKey:
      'CognitoIdentityServiceProvider.ve7q25uthr00f2vpfe18ee593.50a9392a-96f6-4877-89dd-6b21a61b13c8.userData',
    attributes: {
      sub: '50a9392a-96f6-4877-89dd-6b21a61b13c8',
      email_verified: true,
      email: 'blah@hop.life',
    },
    preferredMFA: 'NOMFA',
  },
};
