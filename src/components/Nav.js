import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Nav = () => {
 const { keycloak, initialized } = useKeycloak();

 return (
   <div>
     <div>
       <section>
         <nav>
           <div>
             <h1>
               Keycloak React AUTH.
             </h1>
             <ul>
               <li>
                 <a href="/">
                   Home
                 </a>
               </li>
               <li>
                 <a href="/secured">
                   Secured Page
                 </a>
               </li>
             </ul>
             <div>
               <div>
                 {!keycloak.authenticated && (
                   <button
                     type="button"
                     onClick={() => keycloak.login()}
                   >
                     Login
                   </button>
                 )}

                 {!!keycloak.authenticated && (
                   <button
                     type="button"
                     onClick={() => keycloak.logout()}
                   >
                     Logout ({keycloak.tokenParsed.preferred_username})
                   </button>
                 )}
               </div>
             </div>
           </div>
         </nav>
       </section>
     </div>
   </div>
 );
};

export default Nav;