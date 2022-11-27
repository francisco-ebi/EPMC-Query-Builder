#  EPMC Query Builder
## Prerequisites
- Node.js version 18.0.0 or later
- Yarn
## Running the project
1. After cloning the repository, move to the newly created directory and run `yarn install`
2. To start the proyect, use `yarn start` and open http://localhost:1234 in a browser
3. To run unit test, use `yarn test`

## Reusable components
The first component I suggest to be reusable would be a button. The main advantage is consolidating styling and behavior in a single component, while also facilitating updates or fixes to it. In my exercise, I didn't do it, because there was only 2 of them in the entire app (It would have more sense to do it in a larger app).
The second reusable component would be a component to visualize a single search result. Given all the different attributes from a publication to being able to replicate how it should look like as the examples provided, it would hide that complexity from the outside while having small, composeable units that are more easily understood.