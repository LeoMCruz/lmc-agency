# :house: Cruz Agency - Real Estate Sales Website
This project consists of developing a website for selling properties. The application allows users to access properties of different categories, view property details and contact the real estate agency.

# :dart: Objective
Make a website for selling properties using HTML, CSS and JavaScript, respecting all design requiriments and specific features. 

# :hammer_and_wrench: Used Technologies
- HTML5 and CSS3: To struct and interface styling.
- JavaScript: DOM manipulation, forms validation and load all dynamic data.
- JSON: Data storage for properties.
#  🎨 Design
Design and layout must fallow [Figma](https://www.figma.com/design/DcN3r94ztepdaXn5ImudiV/Compass-UOL---PB-OUT24---Desafio-I?node-id=1-2&t=0tv36jX3JqGTl1oW-0) exemple.

# :bookmark_tabs: Features and Requirements
1.  **Login Screen**
Shows a login form:
	+ **Email:** Accept inputs on e-mail format only.
		 If e-mail format is not valid, shows a red message.
	+ **Password:** Minimun 8 characters.
		+ If password has less than 8 characters, shows a red message.

	+ **Credential Validation:**
		+ If e-mail and password are in correct format, shows a quickly green message
		  and redirect to "Home" page.
2. **Home Page**
	+ **Header:** Shows 2 more buttons than Login page:
		+ **Contact**
		+ **Logout**
	+ **Our Services: ** Shows 3 cards with Real Estate services:
		+ **Residential**
		+  **Commercial**
		+  **Hotel**
3. **Best Opportunities**
Consumes a JSON and show the properties in card format with the follow infos:
	+ **Price**
	+  **Size**
	+  **Bedrooms**
	+  **Bathrooms**
When properties card clicked, it shows a **modal** with the info details, and to close it, you must click on **X** or click out side of the modal.
4. **Footer**
	+ Includes a card with contact content
	+ Includes a button to return to top of the page
5. **Dynamic Data**
	**Best Opportunities** must load dynamic data using JavaScript. The data are on a JSON file (data.json), on root project folder.
	The file data.json must follow this struc: 
````
[
	{

	"image":"image-location.jpg",

	"price":"R$ 456.500.000",

	"size":1.564,

	"bedrooms":11,

	"bathrooms":6

	},
	{

	"image":"image-location.jpg",

	"price":"R$ 456.500.000",

	"size":1.564,

	"bedrooms":11,

	"bathrooms":6

	}

]
````
# :rocket: How to Run the Project
1. Clone the git repository:
	+ git clone https://github.com/LeoMCruz/lmc-agency.git
2. Open the index.html in your browse. File located on "pages" folder.

# :warning: Aditional info to Run the Project
You must run the project using a local server, for example, the Live Server extension on VS Code, otherway, you gonna have a CORS problem, and the dynamic data on best opportunities wont load.

