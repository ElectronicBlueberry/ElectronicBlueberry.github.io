---
date: 2024-07-01
titleImage: /images/title_images/ui_sandbox.png
titleImageAlt: 'Yellow to turquoise gradient with black text reading: "Available Sandboxes"'
titleImageSize:
  - 300
  - 50
---

# UI Sandbox - Front-End Teaching Tool

UI Sandbox is a teaching tool for front-end development. It can be used to teach vue and related web-technologies.

::image-group
![overview page of ui-sandbox showing all available sandboxes](/images/posts/ui_sandbox/sandboxes.png)
![the default sandbox for reactivity, with the browser console open showing a test-case error](/images/posts/ui_sandbox/testing.png)
::

I developed UI Sandbox to assist me in teaching in workshops.
The Software allows me to quickly author sandboxes and test cases for students to follow along in workshops.

The software consists of a standard vite dev server, coupled with a node server which orchestrates the creation of sandboxes, by copying files in the correct dev directories.
It also features a testing framework which is inspired by jests syntax and runs in the browser, so students can test if they completed a task successfully independently.

The test results are displayed in the browser console, to get students used to using it as a tool.

::color-button{to="https://github.com/ElectronicBlueberry/UI-Sandbox" target="\_blank"}
UI-Sandbox on Github
::
