import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export interface IProps {
  name: string;
}

const PrimaryLayout = ({name}: IProps) => (
  <div className="primary-layout">
    <header>
      Our React Router 4 {name}
    </header>
    <main>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/users" component={UsersPageLayout} />
      </Switch>
    </main>
  </div>
)

const UsersPageLayout = (props: any) => (
  <div className="sublayout">
    <aside>
      <p>a</p>
      <p>b</p>
      <p>{props.match.url}</p>
    </aside>
    <div className="primary">
      <Switch>
        <Route path={props.match.path} exact={true} component={UsersPage} />
        <Route path={`${props.match.path}/:uid`} component={UserProfilePage} />
      </Switch>
    </div>
  </div>
)

const HomePage = ({name}: IProps) => <div>Home Page {name}</div>
const UsersPage = ({name}: IProps) => <div>Users Page {name}</div>
const UserProfilePage = (props: any) => <>
  <div>user profile {props.match.params.uid}</div>
  <div>url: {props.match.url}</div>
  <div>path: {props.match.path}</div>
</>

const App = ({name}: IProps) => (
  <BrowserRouter>
    <PrimaryLayout name={name} />
  </BrowserRouter>
)

export default App
