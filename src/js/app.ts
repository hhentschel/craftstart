// import css
import '~/css/app.pcss'

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept(() => {
      console.log('HMR active')
  })
}