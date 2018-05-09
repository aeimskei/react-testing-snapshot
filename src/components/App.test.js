import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('App snapshot test', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// create a component variable and inside, hold the component
// then, transform component to JSON
// place the transformed JSON inside expect method
// and expect this variable to match our Snapshot

// ===================================================
// EXAMPLE
// ===================================================
// works with: import ReactDom from 'react-dom';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

// ===================================================
// NOTES
// ===================================================
// Jest Snapshot allows use to test UI in different points in time
// and prevent any unexpected changes
// when change happends, either intentional or not, our test
// will throw an error to let us know
// this way, we can decided whether to update the Snapshot or look into why the Snapshot changed
// Jest accomplishes this bc it renders our data to a JSON file
// and then takes a snapshot of this file
// then, whenever we run our test, JS compares the snapshot with the
// latest rendered output, if there is any difference between them,
// we get notified
// First, we need to install the packages and then we'll refactor App.test to do the Snapshots
// yarn add react-test-renderer
// yarn test to run test
