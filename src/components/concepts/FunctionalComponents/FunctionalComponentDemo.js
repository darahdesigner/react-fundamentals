  const FunctionalComponentDemo = () => {
      return(
          <div className='main'>
              <div className='mainDiv'>
                  <div>
                 <h1>Functional Component</h1>
                 <p>Functional Components are the primary tool in React to build a small, modular piece of your page.</p>
              </div>
              <div>
                  <dl>
                      <dt><b>Can use state</b></dt>
                      <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                      <dt><b>No 'this' keyword</b></dt>
                      <dd>Older class components use 'this', functional components have no 'this' object.</dd>
                      <dt><b>Can use effects</b></dt>
                      <dd>With the 'useEffect hook, functional components can perform side effect with any props of state changes.</dd>
                      <dt><b>return()</b></dt>
                      <dd>Must return a single element, but this element may have nested elements inside.</dd>
                  </dl>
                  <h2>Functional Syntax versus Arrow Function</h2>
                </div>
              </div>
          </div>
      );
  };

  export default FunctionalComponentDemo;