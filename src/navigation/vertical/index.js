export default [
  {
    title: "首页",
    route: "home",
    icon: "HomeIcon",
  },
  // {
  //   title: "角色管理",
  //   route: "second-page",
  //   icon: "FileIcon",
  // },
  {
    title: "用户管理",
    route: "sms",
    icon: "UsersIcon",
  },
  {
    title: "一级菜单",
    icon: "MenuIcon",
    children: [
      {
        title: "二级菜单",
        // icon: "MenuIcon",
        route: null,
        tag: "new",
        tagVariant: "light-success",
      },
    ],
  },
  {
    title: "代理商管理",
    icon: "GitlabIcon",
    route: "agent",
  },
  {
    title: "分组管理",
    icon: "ListIcon",
    route: "group",
  },
];
