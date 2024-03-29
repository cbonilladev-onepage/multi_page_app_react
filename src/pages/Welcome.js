import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome here!</h1>
      <Route path="/welcome/new-user">
        <p>Hello, new user.</p>
      </Route>
    </section>
  )
}

export default Welcome;