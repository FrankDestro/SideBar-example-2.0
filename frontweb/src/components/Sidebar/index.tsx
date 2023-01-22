import { useState } from "react";
import { FaGem, FaHeart } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import './styles.css';

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);

  // added styles
  const styles = {
    sideBarHeight: {
      height: "100vh",
      backgroundColor: "rgb(0, 249, 249, 0.7)"
    },
    menuIcon: {
      float: "right",
      margin: "10px"
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
      </SidebarHeader>
      <Menu iconShape="square" >
        <MenuItem icon={<FaGem />}> Dashboard</MenuItem>
        <MenuItem icon={<FaGem />}> Projetos</MenuItem>
        <SubMenu title="Teams" icon={<FaHeart />}>
          <MenuItem>Cadastrar Clientes</MenuItem>
          <MenuItem>Consultar Clientes</MenuItem>
          <MenuItem>Customer Report</MenuItem>
        </SubMenu>
        <SubMenu title="Account" icon={<FaHeart />}>
          <MenuItem>Permissions</MenuItem>
          <MenuItem>Settings</MenuItem>
        </SubMenu>
        <SubMenu title="Email" icon={<FaHeart />}>
          <MenuItem>Notification</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default SideNavigation;
