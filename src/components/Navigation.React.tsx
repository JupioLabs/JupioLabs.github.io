import * as React from 'react';
import { Link } from 'gatsby';

import { connect } from 'react-redux';
import { Hamburger } from '../ui/Hamburger.React';
import './Navigation.scss';

interface NavigationProps {}

// export const Navigation: React.SFC<NavigationProps> = ({ isOpen }) => {

//   const clickHandler = () => { return; };
//   const openClass: string = isOpen ? 'open' : '';

//   return (

//   );
// };

interface NavigationState {
  isOpen: boolean;
}

export class Navigation extends React.Component<NavigationProps, NavigationState> {

  constructor (props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  private toggleHandler () {
    return () => {
      this.setState({isOpen: !this.state.isOpen });
    };
  }

  render () {
    const { isOpen } = this.state;
    return (
      <nav className={`navigation ${ isOpen ? 'open' : '' }`}>
      {/* <div className='fixed-hamburger'>
        <Hamburger clickHandler={this.toggleHandler()} />
      </div>
      <div className='diamond-shape' /> */}
      <Link to="/">
        <h1 className='jupio-wordmark'>
          JUPIO LABS
        </h1>
      </Link>
    </nav>
    );
  }
}