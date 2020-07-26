# lioneuswebapp
Lioneus React GraphQL site

**Web-Page**


This is the repository containing the web app for Lioneus. 


**Documents**

You will need these documents:


Enhancement 0.1: https://docs.google.com/document/d/1vGZICIuK8ILDk4LkJndFk9T_Mk73yFS7evvJYASm8w8/edit?usp=sharing


Milestone 1.0: https://docs.google.com/document/d/1PjOPbpZ5Tw2l9FpXjZ2MD_NEgOxBXAXYGd7Js3nmRzs/edit?usp=sharing


Milestone 1.6: https://docs.google.com/document/d/1mOH52sNL4XvnOihvH4nnRaMGqxu3pQoouxEUySdj8Vw/edit?usp=sharing


Project progress: https://docs.google.com/spreadsheets/d/1WS0Obi--CFEziPLpk3x5bGLXu0NosJPUumZvJv-VRw8/edit#gid=1161341563

**Installing the project**

First, you need the following programs :


Git to clone the project on your local machine.

Nodejs and  npm to bundle up the project, run it and manage dependencies.
Run npm install create-react-app to install react scripts.
A text editor or IDE. It really doesnt matter which one you use. I suggest Atom, Sublime Text or my favorite VSCode.  (PS: Notepad and Notepad++ works too)
The command-line for windows or terminal for mac/linux. (PS: Both are built in)

Second, You need to clone the project on your machine:

**Open the terminal**

Run git clone https://gitlab.com/lioneus/lioneuswebapp.git to get files locally. (You might get prompted for your gitub credentials)
Run cd lioneuswebapp to move into the newly cloned directory. (You might want to keep track of those files on your computer)
Run npm install to install the project's dependencies.




Running the project locally
Just start the dev server:
* Run npm start to start serving the page on dev-mode.
* If it didn't happen automatically, open your browser and go to http://localhost:3000/ (which is your local machine on port 3000). You should see the page up.
> **PS:** If you cloned the repository, make sure to stay up to date with the changes on the new-start branch, and try not to push directly to it but instead, create your own branch and create a merger request. 
Any participant should try and familiarize with git a bit if you aren't already, as it **will** make the process smoother. [Here](https://www.youtube.com/watch?v=HVsySz-h9r4&t=405s) is a video covering fundamentals. 

Running the project inside a Docker Container
You first need to install Docker, then:

Build the image from the Dockerfile. Run docker build -t lioneus:latest .

Start a container from built image. Run docker run --name lioneus_app -v [absolute_path_to_src_file_on_your_machine]:/lioneus/src -p 3000:3000 -d  lioneus:latest



PS: Check-out reference for docker run tags for explaination on the different tags. The -v tag creates a mounting point for the src/ volume. That allows you to write code on your machine, and let the dev server on the container see the changes.


Open your browser, and go to localhost:3000.
