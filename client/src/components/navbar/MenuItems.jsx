// import React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import { Link } from 'react-router-dom';

// const MenuItems = ( {navItems} ) => {
//   return (
//     <Tabs value={false} textColor="inherit" indicatorColor="secondary">
//       {navItems.map((item, index) => (
//         <Tab key={index} label={item} component={Link} to={`/${item.toLowerCase()}`} />
//       ))}
//     </Tabs>
//   );
// };

// export default MenuItems;

import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

const MenuItems = ({ navItems }) => {
  return (
    <Tabs value={false} textColor="inherit" indicatorColor="secondary">
      {navItems.map((item, index) => (
        <Tab
          key={index}
          label={item}
          component={Link}
          to={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
        />
      ))}
    </Tabs>
  );
};

export default MenuItems;
