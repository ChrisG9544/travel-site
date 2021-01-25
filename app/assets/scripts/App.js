import '../styles/styles.css'
/* comment:
webpac-dev-server allows URL localhost to be used to 
lunch the app module.hot in webpack.config
 */    

if (module.hot) {
    module.hot.accept()
}