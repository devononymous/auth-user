Frontend Task


Task
User Role Management with Redux and React using TypeScript
Objective
Create a React + TypeScript application that fetches user data from an API, updates the user role in Redux, and conditionally renders given UIs based on the user role. 
Requirement
1.	API Interaction:
	•	Implement a function to fetch user data from a provided API endpoint.
	•	The API will return a JSON object with username and role.
2.	Redux Setup:
	•	Setup Redux Toolkit in your application.
	•	Create actions and reducers to handle updating the user role in the Redux store.
	•	The initial state should include an empty user object with username and role.
3.	Role Update:
	•	Implement functionality to update the user role in the Redux store based on some user interaction (e.g., a button click).
4.	Conditional Rendering:
	•	Create two different UI components: one for an “admin” role and one for a “user” role.
	•	Conditionally render these components based on the role stored in Redux.
Resources
API Endpoint:- https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/
Mock Response:-
{
	username: “john Doe”,
	role: “admin”
}
Wireframe:- https://excalidraw.com/#json=sPMJ2tUkTNAjohtj8ixPi,uiaH_46u_IaDxuDzSGO1Tg
