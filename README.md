# new-tab-page
The name "new-tab" **is temporary**.

## What is new-tab
new-tab aims to be the optimal new tab extension for chrome and firefox (maybe even edge 👀). new-tab wants to give full control to the user, what widgets should be used, where they should be placed and creating their own theme. new-tab will not launch with the full package on day one, we will launch it with the most barebone features and iterative new version based on feedback from our users.

New tab want to help our users in their everyday life by just making it a little bit easier.

## Why?
New-tab was created from the frustration of not finding a new tab extension for chrome or firefox that was clean and customizable. It was either clean and minimalistic and lacking useful features like todolists, or it was cluttered with all the features that you could imagine. There was no sweet-spot.

## Goal
As mentioned previously we want to improve the everyday workflow, want an easy reminder? Create a todo and see it everytime you open a new tab. Want to have easy access to your favorite websites? Have them all collected in one place. Just want some information about the weather before you go and get lunch? Have the weather widget to see if you need to bring a jacket or not.

The goal to implement as many widgets as we can and make them customizable.

- [ ] Todolist
- [ ] Username greeting
- [ ] Weather widget
- [ ] Customizable background
- [ ] Favorite website links
- [ ] Inspirational quote
- [ ] Drag-and-drop widgets

*(These are not in a specific order)*

## Getting started
These instructions will walk you through how to get the project up and running on your machine for development and testing purposes.

### Prerequisites
These are the tools you need to build the extension

- Latest LTS version of Node.js (14.x.x)
- Latest version of npm
- Firefox

### Installing
 
Follow the instructions for your platform

### Linux
Download the repository to your computer

```bash
git clone https://github.com/MSaurus/new-tab-page.git
cd new-tab-page
```

Installing Mozillas extension tool with npm

```bash
# Install web-ext globally
npm install -g web-ext
```

Use Mozillas tool to start a new Firefox window and install the extensions as a temporary extensions. It then watches the files for changes and reload the extension when files been changed.

```bash
# Start the extension
web-ext run
```

### Building
First lint the extension to make sure it doesn't have any errors regarding the manifest.json file.

```bash
# Lint manifest.json
web-ext lint
```

Build the extension and package it inside a zip file. The command will put the zip file inside the `web-ext-artifacts` directory that it creates.

```bash
# Build and package the extension
web-ext build
```

## Feedback
Feedback is super important to us!!!
The easiest way to make your feedback heard right now is to create a new issue or pull request. If you want to ask us something you can always contact either of us ( @MSaurus / @jonathan-lindqvist ).

And when we launch the extension you will be able to give us feedback in the extension/addon browser.
