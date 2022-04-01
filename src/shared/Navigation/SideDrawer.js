/** @format */

import react from 'react';
import ReactDOM from 'react-dom';

export const SideDrawer = (props) => {
  const content = <aside className='side-drawer'>{props.children}</aside>;

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;

//create portal allows to render the ui differently (at different position/ somewehere else)
/*That is possible by .
1. Create new root div in html 
2. import ReactDOM on js . page. 
3. return ReactDOM.createPortal(content - const , document.getElementByID('drawer-hook') - html root div id ) */
