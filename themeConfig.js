// Theme Colors
// 最初这将是空白的。稍后，当应用程序初始化时，我们将从CSS变量为其分配引导颜色。
export const $themeColors = {};

// App Breakpoints
// Initially this will be blank. Later on when app is initialized we will assign bootstrap breakpoints to this object from CSS variables.
export const $themeBreakpoints = {};

// APP CONFIG
export const $themeConfig = {
  app: {
    appName: "销售管理系统", // 将更新导航菜单中的名称（品牌）
    // eslint-disable-next-line global-require
    appLogoImage: require("@/assets/images/logo/az-logo-min.jpg"), // 将更新导航菜单中的徽标（品牌）
  },
  layout: {
    isRTL: false,
    skin: "light", // light, dark, bordered, semi-dark
    // 路由过度效果
    routerTransition: "zoom-fade", // zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none
    // 菜单展示效果
    type: "vertical", // vertical, horizontal
    contentWidth: "full", // full, boxed
    menu: {
      hidden: false,
      isCollapsed: false,
    },
    navbar: {
      // ? For horizontal menu, navbar type will work for navMenu type
      type: "floating", // static , sticky , floating, hidden
      backgroundColor: "", // BS color options [primary, success, etc]
    },
    footer: {
      type: "hidden", // static, sticky, hidden
    },
    customizer: true,
    enableScrollToTop: true,
  },
};
