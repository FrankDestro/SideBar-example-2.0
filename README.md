# SideBar-example-2.0
Codigo font /src 

# SideBar-example-1.0 below

```js 

/* eslint-disable prettier/prettier */
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from 'react-pro-sidebar';
import collapse from '../../assets/collapseicon.png';
import {ReactComponent as Icon} from "../../assets/po.svg";

function Side() {

  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar transitionDuration={1000}>
        <Menu>
          <Menu>
            <SubMenu label="Charts" icon={<Icon name="iconhome" />}> 
              <MenuItem> Pie charts</MenuItem>
              <MenuItem> Line charts</MenuItem>
              <MenuItem> Bar charts</MenuItem>
            </SubMenu>
            <SubMenu label="Maps">
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu label="Theme">
              <MenuItem> Dark</MenuItem>
              <MenuItem> Light</MenuItem>
            </SubMenu>
          </Menu>

        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          <img
            src={collapse}
            alt="Profile"
            onClick={() => collapseSidebar()}
            id="logout-img"
            className="image-logout brightness blur saturate grayscale contrast"
          />
        </div>
      </main>
    </div>
  )
}

export default Side;

```
