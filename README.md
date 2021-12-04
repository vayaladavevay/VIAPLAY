# VIAPLAY

Project Description:

Creating a Project:

Install the Angular CLI using NPM

npm install -g @angular/cli

Project Creation usin Angular CLI:

ng new viaplay-app

The ng new command prompts you for information about features to include in the initial application project. Accept the defaults by pressing the Enter or Return key.
The Angular CLI installs the necessary Angular npm packages and other dependencies. This can take a few minutes.
It also creates the following workspace and starter project files:
•	A new workspace, with a root folder named viaplay-app.
•	An initial skeleton app project in the src/app subfolder.
•	Related configuration files.

Then open the project in the preferred Editor 
Then install global support of TypeScript language executing this command in your terminal:
npm install -g typescript
The flag -g (the short form from the — global) indicates that this package will be installed globally in the system
Then next open the project using the command:
Ng serve –open

Steps(commands) to Run the solution:
Please note that the latest version of node JS has to be installed
To install all the packages and relevant references:
npm i
Then to run and open the solution:
Ng serve – open

Application Screen Shot:

 


Second Screen Shot

 



Affected Pages:
The U- Pages are newly added for the project: 
The M- Pages are modified pages to support the newly added component, CSS and HTML
 
Code Structure:

1.	Added the Separate components for Header and Footer. So that, it will be easy to make any additional changes to those components like adding the copyright to the footer as an example
2.	Added a app.routing module to create any routes from the main page to the other pages, if we add any in future
3.	Added a separate component to show the series details in a single. Again, the same reason as like header and footer components for adding it as a separate component.



4.	To Avoid tbe CORS error, A Proxy JSON is included in the source folder as well as in the root angular.json file
5.	{
6.	  "/api/*": {
7.	      "target": "https://content.viaplay.se/",
8.	      "secure": false,
9.	      "logLevel": "debug"
10.	  }
11.	}

12.	The page is kept with display:flex to make the screen responsive even in mobile resolution. Few screenshots in different mobile resolutions.
13.	It is verified in Ipad, Iphone, android Phone and the latest Samsung galaxy fold Resolution




         

            


Key Selection of Series:
1.	Key Movement between the different titles is enabled.
2.	On the page load itself, a focus is set on the 1st title so that, we can move between the other titles easily
3.	Enter button click is also added and a brief synopsis will be shown.
4.	Jquery Library is used to set the focus on first title on page load
