import Keycloak from "keycloak-js";

const keycloak = new Keycloak(
    {
        url: 'http://172.30.1.224:8080/' ,
        realm: 'myrealm' ,
        clientId: 'myclient' ,
    }
);

export default keycloak;