// function to generate markdown for README
function generateMarkdown(answers) {
    return `
    ![](https://img.shields.io/badge/License-${answers.license})-lightblue)



  # ${answers.title}


  ## Description\

 ${answers.description}\


  **Demo**\

  ![](./assets/Readmestart.gif)\



  [*Video of application in action*](https://drive.google.com/file/d/15_vrtqP_z9FuCd5DHMM7WNty029SOLcC/view)\




  ## Table of Contents\

  * [Description](**Description)\

  * [Installation](**Installation)\

  * [Usage](**Usage)\

  * [Contributing](**Contributing)\

  * [Tests](**Tests)\

  * [Questions](**Questions)\

  * [Author](**Author)\

  * [License](**License)\




  ## Installation\

  ${answers.installation}\



  ## Usage\

  ${answers.usage}\



  ## Contributing\

  ${answers.contributing}\



  ## Tests\

  ${answers.tests}\



  ## Questions\

  Please send any questions or comments to the author listed below.\




  ## Author:\

  ${answers.name}\


  ![](http://i.imgur.com/VlgBKQ9.png)Email: ${answers.email}\



  ![](http://i.imgur.com/9I6NRUm.png)Github: <https://github.com/${answers.github}>\




  ## License\

  *This application is covered under the following license:*\\
  [${answers.license}](https://choosealicense.com/licenses/${answers.license})

`;
}

module.exports = generateMarkdown;