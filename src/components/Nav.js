import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import styles from '../styles.module.css'

const Nav = () => {
 const { keycloak } = useKeycloak();

 const handleLogin = () => {
  keycloak.login();
};

const handleLogout = () => {
  keycloak.logout();
};

const hasRealmAdminRole =
    keycloak.authenticated &&
    keycloak.tokenParsed?.realm_access?.roles.includes("RealmAdmin");

 return (
   <div>
     <div>
       <section>
         <nav>
           <div>
             <h1>
               Keycloak React AUTH.
             </h1>
             
               <button className={styles.myButton}>
                 <a href="/">
                   Home
                 </a>
                </button>
               {keycloak.authenticated && (
               <button className={styles.myButton}>
                 <a href="/secured">
                   Secured Page
                 </a>
                 </button>
               )}
               {keycloak.authenticated && hasRealmAdminRole && (
                <button className={styles.myButton}>
                 <a href="/admin">
                   Admin Page
                 </a>
                </button>
               )}
             
             <div>
               <div>
                 {!keycloak.authenticated && (
                   <button className={styles.myLoginButton} type="button" onClick={handleLogin}>
                     Login
                   </button>
                 )}
                
                 {keycloak.authenticated && (
                   <button className={styles.myButton} type="button" onClick={handleLogout}>
                     <a href="/">Logout ({keycloak.tokenParsed?.preferred_username})</a>
                   </button>
                   
                 )}

                { console.log(keycloak.tokenParsed)}
               </div>
             </div>
           </div>
         </nav>
       </section>
     </div>
   </div>
 );
};
//keycloak.tokenParsed.realm_access.roles για roles
export default Nav;