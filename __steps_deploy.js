/**
 * -----------------------
 * ONE TIME your computer
 * -----------------------
 * Create heroku account
 * Verify your email account
 * Select your language and proceed
 * Go their documentation
 * Install heroku CLI
 * heroku login
 * -----------------
 * FOR EACH PROJECT
 * -----------------
 * First of all check your server cmd
 * heroku create
 * git add . git commit -m"" git push
 * git push heroku main
 * Go heroku dashboard > Current Project > Settings > Reveal Config Vars
 * Copy paste .env file for config key and value
 * Make sure your whitelisted ip address to access mongodb
 * --------------
 * UPDATE SERVER
 * --------------
 * Make change
 * git add . git commit -m"" git push
 * git push heroku main
 * --------------------
 * CONNECT CLIENT SITE
 * --------------------
 * Open client site npm start
 * Replace localhost:5000 by heroku link
 * ----------------
 * FIREBASE DEPLOY
 * ----------------
 * Client site server npm run build
 * firebase deploy
 */