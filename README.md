![InfoGraph AI (1)](https://github.com/Gliz23/InfoGraphAI/blob/main/src/assets/banner.png)

# InfoGraph AI

InfoGraph AI is a tool that you can use to create simple and customized infographics.

## Installation

Get a copy of the repo by cloning it.

```bash
git clone https://github.com/Gliz23/InfoGraphAI.git
```

How to run it locally.

1. Install Node and a package manager.
   Node is a JavaScript runtime which allows you to run JavaScript code outside a browser.
   You need a package manager like npm(node package manager) to manage the packages in the React App.
   Visit the official Node.js website and download the latest version for your operating system.
   Install it by clicking on the downloaded file and following the instructions.

2. You can verify the instalation by running.

   ```bash
   node --version
   ```

   ```bash
   npm --version
   ```

3. Chose a text editor or and IDE (integrated Development Environment) like Visual Studio Code and configure it to run JavaScript and React code.

4. Open the cloned repo in Visual Studio code.

   - Navigate to the directory

   ```bash
   cd InfoGraphAI
   ```

   - Open it in Visual Studio Code

   ```bash
   code .
   ```

5. In the terminal, navigate to the directory of the repository you cloned and run

   ```bash
   npm run dev
   ```

   You can acces the app by pasting the diplayed link in your browser.

6. You need an API key from openAI to run this app.

   - Go to the official site (https://platform.openai.com)

   -Sign up and locate the API keys section by moving the mouse pointer to the 'Your Profile' icon (P) at the top left section of the page.

   - Click on create new secret key and copy the key and paste it in a secure place you can acces later.

   - In the root directory of the cloned app, create a .env file and put the key in the file.

   ```bash
   VITE_MY_API_KEY = YOUR_API_KEY
   ```

   Replace YOUR_API_KEY with the api key you generated.

7. You need internect connection to generate the Summary and the InfoGraphic.

![Logo](https://github.com/Gliz23/InfoGraphAI/blob/main/src/assets/flogo.png)

## Usage

- On the home page, start creating your infographic by clicking on the create button.

- Type/Paste your text in the text box

- This will generate a summary you can edit in oder to create the infographic.

- To edit the summarized text, click on the edit buutton and make your edit and click save.

- You can copy the summary unto the clipboard with the copy button.

- If you want to generate a new summary, you must delete the old one first.

- Paste the copied summary text into the text box under InfoGraphic Maker.

- Click generate to produce your infographic.

- Edit thee infographic by dragging and dropping the image into the image editor below.
