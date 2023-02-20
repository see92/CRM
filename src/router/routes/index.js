export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {
      pageTitle: "Home",
      breadcrumb: [
        {
          text: "Home",
          active: true,
        },
      ],
    },
  },
  {
    path: "/second-page",
    name: "second-page",
    component: () => import("@/views/SecondPage.vue"),
    meta: {
      pageTitle: "Second Page",
      breadcrumb: [
        {
          text: "Second Page",
          active: true,
        },
      ],
    },
  },
  {
    path: "/sms",
    name: "sms",
    component: () => import("@/views/pages/SMS/index"),
    meta: {
      pageTitle: "用户管理",
      basePage: true,
      breadcrumb: [
        {
          text: "用户管理",
          active: true,
        },
      ],
    },
  },
  {
    path: "/sms/add",
    name: "smsAdd",
    component: () => import("@/views/pages/SMS/userInfo"),
    meta: {
      pageTitle: "新增",
      navActiveLink: "sms",
      basePage: true,
      breadcrumb: [
        { text: "人员管理", to: "/sms" },
        { text: "新增", active: true },
      ],
    },
  },
  {
    path: "/sms/edit",
    name: "smsEdit",
    component: () => import("@/views/pages/SMS/userInfo"),
    meta: {
      pageTitle: "修改",
      navActiveLink: "sms",
      basePage: true,
      breadcrumb: [
        { text: "人员管理", to: "/sms" },
        { text: "修改", active: true },
      ],
    },
  },
  {
    path: "/agent",
    name: "agent",
    component: () => import("@/views/pages/AGENT/index"),
    meta: {
      pageTitle: "代理商管理",
      basePage: true,
      breadcrumb: [
        {
          text: "代理商管理",
          active: true,
        },
      ],
    },
  },

  {
    path: "/agent/add",
    name: "agentAdd",
    component: () => import("@/views/pages/AGENT/agentInfo"),
    meta: {
      pageTitle: "新增",
      navActiveLink: "agent",
      basePage: true,
      breadcrumb: [
        { text: "代理商管理", to: "/agent" },
        { text: "新增", active: true },
      ],
    },
  },
  {
    path: "/agent/edit",
    name: "agentEdit",
    component: () => import("@/views/pages/AGENT/agentInfo"),
    meta: {
      pageTitle: "修改",
      navActiveLink: "agent",
      basePage: true,
      breadcrumb: [
        { text: "代理商管理", to: "/agent" },
        { text: "修改", active: true },
      ],
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: {
      layout: "full",
    },
  },
  {
    path: "/error-404",
    name: "error-404",
    component: () => import("@/views/error/Error404.vue"),
    meta: {
      layout: "full",
    },
  },
  {
    path: "*",
    redirect: "error-404",
  },
];

// // ? For splash screen
// // Remove afterEach hook if you are not using splash screen
// router.afterEach(() => {
//   // Remove initial loading
//   const appLoading = document.getElementById("loading-bg");
//   if (appLoading) {
//     appLoading.style.display = "none";
//   }
// });

// export default router;
