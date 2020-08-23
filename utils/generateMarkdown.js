// function to generate markdown for README
function generateMarkdown(answers) {
    return `
    ![](https://img.shields.io/badge/License-${answers.license}-lightblue.svg)


  # ${answers.title}


    # Description


    ${answers.description}\

  # DEMO\\


  ## Table of Contents\\

  * [Description](**Description)\\
  * [Installation](**Installation)\\
  * [Usage](**Usage)\\
  * [Contributing](**Contributing)\\
  * [Tests](**Tests)\\
  * [Questions](**Questions)\\
  * [Author](**Author)\\
  * [License](**License)\



  ## Installation\\
  ${answers.installation}\\\



  ## Usage\\
  ${answers.usage}\



  ## Contributing\\
  ${answers.contributing}\


  ## Tests\\
  ${answers.tests}\\



  ## Questions\\
  Please send any questions to the following email.\\
  Email: ${answers.questions}\\


  ## Author:\\
    ${answers.name}\\
  ![](http://i.imgur.com/0o48UoR.png) "Github:" <https://github.com/${answers.github}>\\



  ## License\\
  *This application is covered under the following license:*\\
  [${answers.license}](https://choosealicense.com/licenses/${answers.license})

`;
}

module.exports = generateMarkdown;