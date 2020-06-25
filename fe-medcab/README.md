## Introduction

In this challenge you will be working from the `WeEat` homepage to create a functional `Taco?` button that leads to a build your own taco custom form.

## **Self-Study Questions**

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

1. In 1-2 sentences, explain what React's `useRouteMatch` hook is used for.
2. How would you explain form validation to someone who has never programmed before?
3. In 1-2 sentences, define end to end testing.

You are expected to be able to answer all these questions. Your responses contribute to your Sprint Challenge grade. Skipping this section **will** prevent you from passing this challenge.

## Instructions

### Task 1: Set Up The Project With Git

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add your project manager as collaborator on Github.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] CD into the project base directory.
- [ ] Download project dependencies by running `npm install`
- [ ] Start up the app using `npm start`
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`. Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

### Task 2: Minimum Viable Product

Your MVP should include, at a minimum, the following components.

- [ 1] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable)
- [ 2] A form with a "/taco" route
- [ 3] A name text input field
- [ 4] Validation for name - name must be at least 2 characters
- [ 5] Dropdown form component for taco size (with a quantity #)
- [ 6] Checklist form component for toppings - at least 4 (hint: name each separately!)
- [ 7] Text input form component for special instructions
- [ 8] An Add to Order button that submits form and returns a database record of name, taco order size, toppings sauce, and special instructions

#### Testing MVP

Implement the following tests in Cypress:

- [ ] test that you can add text to the box
- [ ] test that you can select multiple toppings
- [ ] test that you can submit the form

You may use the wireframes in the folder as a starting point or for guidance.

## Task 3: Stretch Goals

If you complete the MVP, move on to the following stretch goals. As usual, these goals represent a mix of additional at-level work in addition to work that is beyond the scope of what you've learned, but attainable with your current knowledge (and google).

- [ ] Toggle form component for gluten free tortilla
- [ ] Turn your form into a modal that pops up on the home page
- [ ] Turn form element sections into nested routes
- [ ] Create a `cart` page with additional form options like: delivery or pickup, the option to add utensils and straws, add a tip, etc.
- [ ] Test more of the application with Cypress
- [ ] Add functionality to your order button that it leads to a Congrats! Tacos are on their way! page **and** returns a database record of the whole order

**"Tacos are on their Way" Wireframe:**

> Get the gif: https://giphy.com/gifs/thedodo-cute-dog-the-dodo-1X8XxTMDxh1xanPVGX

## FAQs

**How do I return a database record of the order?**

One of your goals is to return a database record of the order - for this you'll need to write a post request. For more detailed steps, use the below:

1. Create a new state
2. Post to [reqres](https://reqres.in/) database with `axios`
3. Log data in console

## Resources

👀 [Peek at Uber Eats for Inspiration](https://ubereats.com/)

[NEED TO ADD: Sprint challenge grading rubric](https://www.notion.so/e7b32e56ebad4f57b3521efb886f4508)
