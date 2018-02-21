# DailyFramework

## Setting up your local test environment

The following is a tutorial to set up your own local test enviornment to
develop and test DailyFramework code. These instructions are assuming an
 enviornment, can be easily abstracted to a unix-like enviornment.

1. Install the node js server runtime and mongodb. My preferred method is to
use a package manager like brew. To get brew you can run the following command
in the terminal
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
Afterwards node and mongo are easily installed with
```
brew install node
```
and
```
brew install mongodb
```
Note: if you already have brew installed it never hurts to update brew first.

2. With node installed, you can now run
```
npm install
```
In both the top-level and client directories. This will pull in all the needed
dependencies including react and react-dom.

3. Inside the client directory, you can build the application with
```
node run build
```
This will compile the web application and nicely place it the app in its own
directory called 'build.' Other instructions for creating a optimized server
deployable build is also presetend by default.

Note: You will need the XCode command line tools to compile and build the
application.

4. Now we move onto configuring mongodb.



