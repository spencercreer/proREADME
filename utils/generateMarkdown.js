// function to generate technologies list
// function renderTechnologiesList(technologies) {
  

// function to generate markdown for README
function generateMarkdown(data) {
  let badge;
  let tech = data.technologies;
  let techTC
  let techHeading= '';
  let techList = '';

  if (data.license !== 'None') {
    badge = `![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)`;
  } else {
    badge = '';
  } 

  if (tech == undefined || tech.length == 0){
    // empty technologies array
    techTC = '';
    techHeading = '';
    techList = '';
  } else{
    techTC = ` * [Technologies](#technologies)`
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
${techTC}
  * [APIs](#apis)
  * [Contact](#contact)

  ## Links
  URL: [${data.url}](${data.url})\n
  Repository: [${data.repoURL}](${data.repoURL})\n

  ## Animation
  The following animation demonstrates the application functionality:
  ![${data.title} animation](${data.imagePath})

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
  For questions or comments, please contact me.\n
  Email: [${data.email}](${data.email})\n
  GitHub: [${data.username}](https://github.com/${data.username}/)
`;
  return markdown
}

module.exports = generateMarkdown;
