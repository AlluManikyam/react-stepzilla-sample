This project consists of multi-step insurance registration using react and redux.

### `Technologies Used`:
Redux,
React

## Folder Structure
After downloading, your project should look like this:
```
```
sample-insurance/
    node_modules/
    public/
        css/
          custom.css
          react-stepzilla.css
        index.html
        logo.ico
    src/
        components/
          common
            Header.js
            Footer.js
          insurance_registration-steps
            Map.js
            Step1_InsuranceType
            Step2_Business
            Step3_BusinessDetails
            Step4_PersonalAndBuildingInformation
            Step5_BusinessOwnersPolicy
            Step6_WorkersCamp
            Step7_AddtionalInfo
            Step8_Review
        containers/
            InsuranceRegistrationPage
        redux/
            initialState.js
            redux_insurance.js
            store.js
        App.js
        index.js  
    package.json
    README.md    


```
For the project to build, **these files must exist with exact filenames**:
* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.
You can delete or rename the other files.
You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise webpack won’t see them.
Only files inside `public` can be used from `public/index.html`.<br>
You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

Please follows the steps to run this sample,

1. Go to the project folder

2. To install the node-modules dependencies you can type the command

   ### `npm install`

3. After these, you can run the project to use the command

   ### `npm start`

4. Open [http://localhost:7000] to view it in the browser.


For Reference:
Javascript: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics,
Redux: https://redux.js.org/,
ReactJS: https://reactjs.org/,
React-StepZilla: https://www.npmjs.com/package/react-stepzilla
React-Google-Maps:https://tomchentw.github.io/react-google-maps/
NodeJS: https://nodejs.org/en/
