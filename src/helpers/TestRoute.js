import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Navigate, Route } from 'react-router-dom';


const TestRoute = ({ component: Component, roles, ...rest }) => {
    const [keycloak] = useKeycloak();

    const isAutherized = (roles) => {
        if (keycloak && roles) {
            return roles.some(r => {
                const realm =  keycloak.hasRealmRole(r);
                const resource = keycloak.hasResourceRole(r);
                return realm || resource;
            });
        }
        return false;
    }

    return (
        <Route
            {...rest}
            render={props => {
                return isAutherized(roles)
                    ? <Component {...props} />
                    : <Navigate to={{ pathname: '/', }} />
            }}
        />
    )
};

export default TestRoute;