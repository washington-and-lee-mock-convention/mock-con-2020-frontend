# mock-con-2020-frontend
Frontend for mockconventiondata.com

## basic structure of the front-end ##
The index.html houses the different components of the view. These components are the different pages that complete the site.
The rest of the components exist inside of the src/app directory as is standard for most angular apps. Each component contains
one html, one typescript (ts), one spec.ts, and one css file. There is a global stylesheet called styles.css that contains styles
that are held constant over the entire app. 

## services ##
In the src/app folder, there is a folder called _services. The function of a service file (written in typescript) is to provide
a single instance for certain variables whose scope contains the entire application. This is where we query our api and parse
(if need be) the responses. Once the data is in the <...>.service.ts file, we can include it in the appropriate <...>.component.ts
file for the component in question (i.e. library.component.ts).

## development ##
If you would like to make changes please submit a new feature branch and open a new Pull Request.
Changes will be merged to beta in order to run usage testing.
After beta, changes will be updated in our cPanel for production.
