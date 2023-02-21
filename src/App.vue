<template>
  <div id="app" class="h-100" :class="[skinClasses]">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>

// This will be populated in `beforeCreate` hook
import { $themeColors, $themeBreakpoints, $themeConfig } from '@themeConfig'
import { provideToast } from 'vue-toastification/composition'
import { watch } from '@vue/composition-api'
import useAppConfig from '@core/app-config/useAppConfig'

import { useWindowSize, useCssVar } from '@vueuse/core'

import store from '@/store'

const LayoutVertical = () => import('@/layouts/vertical/LayoutVertical.vue')
const LayoutHorizontal = () => import('@/layouts/horizontal/LayoutHorizontal.vue')
const LayoutFull = () => import('@/layouts/full/LayoutFull.vue')

export default {
  components: {

    // Layouts
    LayoutHorizontal,
    LayoutVertical,
    LayoutFull,

  },
  // ! We can move this computed: layout & contentLayoutType once we get to use Vue 3
  // Currently, router.currentRoute is not reactive and doesn't trigger any change
  computed: {
    layout() {
      if (this.$route.meta.layout === 'full') return 'layout-full'
      return `layout-${this.contentLayoutType}`
    },
    contentLayoutType() {
      return this.$store.state.appConfig.layout.type
    },
  },
  beforeCreate() {
    // Set colors in theme
    const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark']

    // eslint-disable-next-line no-plusplus
    for (let i = 0, len = colors.length; i < len; i++) {
      $themeColors[colors[i]] = useCssVar(`--${colors[i]}`, document.documentElement).value.trim()
    }

    // Set Theme Breakpoints
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']

    // eslint-disable-next-line no-plusplus
    for (let i = 0, len = breakpoints.length; i < len; i++) {
      $themeBreakpoints[breakpoints[i]] = Number(useCssVar(`--breakpoint-${breakpoints[i]}`, document.documentElement).value.slice(0, -2))
    }

    // Set RTL
    const { isRTL } = $themeConfig.layout
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
  },
  setup() {
    const { skin, skinClasses } = useAppConfig()

    // If skin is dark when initialized => Add class to body
    if (skin.value === 'dark') document.body.classList.add('dark-layout')

    // Provide toast for Composition API usage
    // This for those apps/components which uses composition API
    // Demos will still use Options API for ease
    provideToast({
      hideProgressBar: true,
      closeOnClick: false,
      closeButton: false,
      icon: false,
      timeout: 3000,
      transition: 'Vue-Toastification__fade',
    })

    // Set Window Width in store
    store.commit('app/UPDATE_WINDOW_WIDTH', window.innerWidth)
    const { width: windowWidth } = useWindowSize()
    watch(windowWidth, val => {
      store.commit('app/UPDATE_WINDOW_WIDTH', val)
    })

    return {
      skinClasses,
    }
  },
}
</script>
<style>
.swal2-popup {
  background-color: #fff;
}
.dark-layout .swal2-popup {
  border: 1px solid #404656;
  background-color: #283046;
}
.el-input__inner .el-input.is-disabled {
  background-color: #fff;
}
.dark-layout .el-input__inner {
  border: 1px solid #404656;
  background-color: #283046;
}

.el-picker-panel {
  background-color: #fff;
}
.dark-layout .el-picker-panel {
  background-color: #283046;
  border: 1px solid #404656;
}
.el-cascader__dropdown {
  background-color: #fff;
}
.dark-layout .el-cascader__dropdown {
  background-color: #283046;
  border: 1px solid #404656;
}

.dark-layout .el-input-number span {
  background-color: #283046;
  border: 1px solid #404656 !important;
}
.el-select-dropdown {
  background-color: #fff;
}
.dark-layout .el-select-dropdown {
  background-color: #283046;
}
.dark-layout .el-input.is-disabled .el-input__inner {
  background-color: #283046;
  border: 1px solid #404656 !important;
}
/* 日期选择 */
.el-date-table td.end-date span,
.el-date-table td.start-date span {
  background-color: #006aeb !important;
}
.dark-layout .el-date-table td.end-date span,
.dark-layout .el-date-table td.start-date span {
  background-color: #006aeb;
}
.dark-layout .el-picker-panel__shortcut {
  color: silver;
}
.dark-layout .el-picker-panel__icon-btn {
  color: silver;
}
.dark-layout .el-date-table td {
  color: silver;
}
.dark-layout .el-date-table td.next-month,
.dark-layout .el-date-table td.prev-month {
  color: grey;
}
.dark-layout .el-date-range-picker__header {
  color: silver;
}
.dark-layout .el-date-table th {
  border-bottom: solid 1px #474748;
  color: silver;
}
.dark-layout .el-date-table td.in-range div,
.dark-layout .el-date-table td.in-range div:hover {
  background-color: #283046;
}
.dark-layout .el-date-editor .el-range-separator {
  color: silver;
}
.dark-layout .el-date-range-picker__content.is-left {
  border-color: #404656;
}
.dark-layout .has-sidebar {
  border-color: #394057;
}
.dark-layout .el-picker-panel__sidebar + .el-picker-panel__body {
  background-color: #161d31;
}
.dark-layout .el-picker-panel__sidebar {
  border-color: #404656;
  background-color: #161d31;
}
.dark-layout .el-range-editor.el-input__inner {
  background-color: #283046;
  border-color: #404656;
}
.dark-layout .el-date-editor .el-range-input {
  background-color: #283046;
  color: silver;
}
</style>