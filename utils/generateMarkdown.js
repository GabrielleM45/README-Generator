// function to generate markdown for README
function generateMarkdown(answers) {
    return `

    [![License](https://img.shields.io/badge/License-${answers.license}-lightblue.svg)](https://choosealicense.com/licenses/${answers.license})\ <br>


  # ${answers.title}<br>


    #Description\
    ${answers.description}\ <br>

  '''DEMO HERE\ <br>


  ##Table of Contents\ <br>
  *[Description](**Description)\ <br>
  *[Installation](**Installation)\ <br>
  *[Usage](**Usage)\<br>
  *[Contributing](**Contributing)\ <br>
  *[Tests](**Tests)\ <br>
  *[Questions](**Questions)<br>
  *[Author](**Author)\ <br>
  *[License](**License)\ <br>


  ###Installation\<br>
  ${answers.installation}<br>


  ###Usage\ <br>
  ${answers.usage} <br>


  ###Contributing\ <br>
  ${answers.contributing}


  ###Tests\ <br>
  ${answers.tests} <br>


  ###Questions\ <br>
  Please send any questions to the following email.\ <br>
  Email: ${answers.questions} <br>


  ###Author\
    **${answers.name}**\ <br>
  [6.1]: http://i.imgur.com/0o48UoR.png "Github:" <https://github.com/${answers.github}>\


  ###License\
  *This application is covered under the following license:*
  ${answers.license}

`;
}

module.exports = generateMarkdown;