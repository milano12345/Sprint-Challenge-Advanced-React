- [ ] Why would you use class component over function components (removing hooks from the question)?
- [ ] Name three lifecycle methods and their purposes.
- [ ] What is the purpose of a custom hook?
- [ ] Why is it important to test our apps?

1. So that you can use State in your function, also so that you have access to react lifecycle methods.

2. Render() method is the most used lifecycle method, it handles the rendering of your component to            the UI. 
    ComponentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls, if you need to load data from a remote endpoint.
    ComponentDidUpdate() method is used for updating the DOM in response to prop or state changes.

3. These are normal javascript functions which can use other hooks inside of it and contain a common stateful logic that can be reused within multiple components. These functions are prefixed with the word use.

4. Testing determines whether the app can be successfully downloaded, executed and interacted with the supporting back-end content infrastructure. It's a vital factor in the development process that brings to market the high-quality product.