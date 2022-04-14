/** @format */

import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './SideDrawer.css';

export const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit>
      <aside className='side-drawer' onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;

//create portal allows to render the ui differently (at different position/ somewehere else)
/*That is possible by .
1. Create new root div in html 
2. import ReactDOM on js . page. 
3. return ReactDOM.createPortal(content - const , document.getElementByID('drawer-hook') - html root div id ) */
//Mount in / out to remove component from dom or to add. other vise just animation is moved .
