import Keycloak from "keycloak-js";

const hostname = window.location.hostname;
console.log(window.location);

const keycloak = new Keycloak(
    {
        url: `http://${hostname}:8080/` ,
        realm: 'myserverrealm' ,
        clientId: 'myclient' ,
    }
);

export default keycloak;