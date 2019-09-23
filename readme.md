#Git commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits 

# STEPS for using thunk 

thunk is a middleware
1. apply in the configurestore file simply using applyMiddleware(thunk)
2. change the action.
3. change the action name in the components file 


#cross-env, to help us write a script that works in all different OS

# create a test env for firebase
1. we install cross-env module and then we change the script in package.json file for test  we put cross-env NODE_ENV=test before jest

2. we create 2 files which are .env.test and .env.development 
in .env.development we put our database info into there and 
for .env.test, we create a new project in firebase called expensify-test and create a new database in that project and put that info into .env.test

3. in the webpack file, we write a if statement for process.env.NODE_ENV
process.env.NODE_ENV here means when we run test, process.env.NODE_ENV will be test, -----because in the package.json,scripts. we have already set the NODE_ENV=test in the test scripts--------- 

when we run dev-server, it will be development as default.

in Heroku, it is by default production


 before we have our if statement, we need to install dotenv module,  basically we want to put everything in env.xxx file into here. while dotenv package helps us to put all info in .env.xxx file into here without manually typing it

 so here we have our if statement, 

    if(process.env.NODE_ENV === 'test') {

        require('dotenv').config({ path:'.env.test' });

    }else if (process.env.NODE_ENV === 'development'){

        require('dotenv').config({ path:'.env.development' });
    }


#now we have set the different process.env.FIREBASE_API:.... all that info based on different env

so for test we have all process.env.FIREBASE_API:....  set equal to the value in .env.test file. and 

for development we have all process.env.FIREBASE_API:....  set equal to the value in .env.development file. 

4. next we need to add a new plugin below called  new webpack.DefinePlugin

Our node environment variables,(like process.env.FIREBASE_API) the ones that exist in the webpack file they do not get passed down to the client side javascript. if they did, it would cause security concerns.

so we need to pass theses values down into our client side javascript in bundle.js file.

at this point we are correctly passing down those values, 
and at last we just need to use these values


5. at last in the firebase file we dont need the static setting into, instead we change it to relative process.env.XXX, 
    #the one we have already set in webpack definePlugin （冒号左边的）
 so its value will be changed based on different process.env.NODE_ENV and the data will be saved to different database as well



#  for production mode database, we need to MANUALLY set them onto HEROKU from the Command line

before we set the database env for test and development seperately 

for production env on Heroku, we open the command line and check

1. heroku config 
    it will show how many configs we have created. 
2. heroku config:set KEY=VALUE
    now we can set the value VALUE with the key KEY
3. heroku config:unset KEY
    we delete the key KEY vale
4. heroku config:set FIREBASE_API_KEY=AIzaSyBce3ZLJFH-z69nCMEutxLMQDXnlMWvTKU FIREBASE_AUTH_DOMAIN=expensify-apps.firebaseapp.com FIREBASE_DATABASE_URL=https://expensify-apps.firebaseio.com FIREBASE_PROJECT_ID=expensify-apps FIREBASE_STORAGE_BUCKET=expensify-apps.appspot.com FIREBASE_MESSAGING_SENDER_ID=544946611190 FIREBASE_APP_ID=1:544946611190:web:df67d235b388fe3a


#SET UP FIREBASE AUTHENTICATION

1. enable auth by Google or somthing else on the firebase website
2. in the firebase.js set googleauthprovider and export it
3. in the app.js set on authstatechange fun() and give it an callback function(dont forget to change login page as home page)
4. create a new action file named auth.js to connect to the firebase
5. inside the loginpage component, access auth.js via redux connect 

# TO ALLOW HEROKU SITE LOGIN 
我们只需在firebase上 authentication 里面 添加授权域名即可，把我们deploy到heroku的网址网上去


#LOGOUT AND LOGIN REDIRECT

1. in action / auth.js we create a new action called start log out
2. we band the action in the header component
3. in order to allow other file to use history props built in browserrouter ithin approuter.js.    we installed npm history module
4. in approuter.js we change browserrouter to router and manually put history init.
5. in app.js we can use history, so we redirect logout to 
history.push('/')
6. in order to avoid re rendering we made some changes in the app.js 
    for details we create renderapp func() and also render and redirect in the if statement below


# Auth reducer
1. this is real authentication, we have created the auth action now is for reducer.

2. for each login user there is an id ,we can check it by user.uid console.log in the app.js firebase function

3. we create the action login logout in the action auth.js

4. we create reducer auth.js in reducer 

5. we combine the reducer in the configurestore.js 
6. last in the app.js we just need to simply dispatch it in the firebase.auth().onAuthStateChanged

#private only routes

1. import privateRoute component from router folder and change 3 route for dashboard and create and edit to private route
2. create privateroute component 
3. connect them to the redux store for state.auth.uid, 
4. eventually we can put header component from the approuter.js to the private route.js file. to print the header only when authenticated

#public routes

1. very similar as private routes 
2. dont forget to change the navlink in header from '/' to 'dashboard'

#Private Firebase Data
1. now our database structure is like
    #expenses:{
        id:xxxxxxx {
            description.....
        }
    }

2. we want it to be like 
    #users {
        uid{
            expenses:{
                expenses-id:{
                    xxxxxxxx
                }
            }
        }
    }

3. to do this we need to fetch to the expenses.js in action and change startAddExpense from 
    return database.ref(`expenses`).push(expense).then
    to 
    return database.ref(`users/${uid}/expenses`).push(expense).then\
4. for the startSetExpense, startRemoveExpense, StartEditExpense we do the same thing as above

5. for the uid above we create a new const uid and give it an value of getState().auth.uid  getState() is also one of the function from thunk

6. fix the test cases

7. at last set the rules in the firebasedatabase, the guides can be found from the firebase guides

#validate right before the data is written 
Currently we have managed client side validation

server side validation is to make sure nothing that's NOT VALID gets saved
1. in the firebase rules, we created an $other at the end, it means except read write and expenses, others goes below
    unlike $user_id and $expense_id, these 2 means the only child in users and expenses respectively

2. .validate : false means even if logged in, u can only write "expenses" listed above, for others we gonna consider it as invalid


# our project not works in IE 11 cause it doesn't support functions like array.include()
1. we install babel-polyfill and set up in webpack config file in the entry;

2. testing for changing repo name