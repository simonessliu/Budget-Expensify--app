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

as all these process.env.AAAAA is proceed on the server side, to enable it securely run on the client site we need to convert env value into string. 

5. at last in the firebase file we dont need the static setting into, instead we change it to relative process.env.XXX, so its value will be changed based on different process.env.NODE_ENV and the data will be saved to different database as well