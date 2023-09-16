# Course-Registration Assignment
# Questions: 
 # ---Project features---
1.Course Listing:

Display a list of 9 courses fetched from an API.

2.Cart Section:

Allow users to add courses to their cart.
Display the courses added to the cart.

3.Duplicate Course Handling:

Prevent users from adding the same course multiple times.
Display an alert when a duplicate course is attempted to be added.

4.Credit Hour Limitation:

Assign credit hours to each course (e.g., 7 hrs, 4 hrs, 3 hrs).
Enforce a maximum limit of 20 credit hours for a user's cart.

5.Credit Hour Calculation:

Dynamically update and display the total credit hours in the cart.

6.Modal for Credit Limit Exceeded:

Display a modal when the user tries to exceed the 20-hour credit limit.
Inform the user that they cannot add more courses due to credit limit constraints.

# How state management is handled in this code project:

1. Props: The component receives data through props, including select, credit, price, and timeremain. These props are essentially the external state that is passed down to the component from a parent component. The state is managed at a higher level in the component hierarchy and is then passed as props to Purches. This is a common approach in React for sharing state between parent and child components.

2. Prop Types: The component uses PropTypes to specify the expected data types for each prop. PropTypes are a way to document the expected shape of the props, which helps catch potential errors during development if the props don't match the expected types.

3. Rendering: Inside the component, it renders the data received through props. For example, it displays the course names from the select prop, the total credit hours from the credit prop, the total price from the price prop, and the remaining time from the timeremain prop. These values are rendered in the JSX without any state management logic within the component itself.
