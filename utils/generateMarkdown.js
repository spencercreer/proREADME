// function to generate technologies list
// function renderTechnologiesList(technologies) {
  

// function to generate markdown for README
function generateMarkdown(data) {
  let badge;
  let tech = data.technologies;
  let techList = '';
  let techHeading= '';

  if (data.license !== 'None') {
    badge = `![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)`;
  } else {
    badge = '';
  } 

  if (tech == undefined || tech.length == 0){
    // empty technologies array
    techHeading = '';
    techList = '';
  } else{
    techHeading = `## Technologies`
    for(i=0; i<tech.length; i++){
    techList += ` * ${tech[i]}\n`
    };
  }
  let markdown = `# ${data.title}
  ${badge}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Links](#links)
  * [Animation](#animation)
  * [Technologies](#technologies)
  * [APIs](#apis)
  * [Contact](#contact)

  ## Links
  URL:<br/>
  Repository:<br/>

  ## Animation
  The following animation demonstrates the application functionality:

  ${techHeading}
${techList}

  ## APIs

  ## Dependencies
  ${data.dependencies}
  ## Tests
  ${data.tests}
  ## Instructions
  ${data.repoInfo}
  ## Contribute
  ${data.contribute}
  ## Contact
  For questions or comments, please contact me.<br/>
  Email: ${data.email}<br/>
  GitHub: [${data.username}](https://github.com/${data.username}/)
`;
  return markdown
}

module.exports = generateMarkdown;
