// function to generate markdown for README
function generateMarkdown(data) {
  let badge = '';
  let urlText = '';
  let installationTC = '';
  let installationText = '';
  let testsTC = '';
  let testsText = '';
  let tech = data.technologies;
  let techTC = '';
  let techHeading = '';
  let techList = '';
  let apiTC = '';
  let apiText = '';
  let licenseTC = '';
  let licenseText = '';

  // generate license table of contents, heading, and badge
  if (data.license !== 'None') {
    badge = `![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)`;
    licenseTC = `\n * [License](#license)`
    licenseText = `## License\nThis project is licensed under the ${data.license} license.`;
  } else {
    badge = '';
  } 

  // generate published url text
  if (data.url !== 'None') {
    urlText = `Published URL: [${data.url}](${data.url})\n`;
  } else {
    urlText = '';
  } 

  // generate installation table of contents, heading, and text
  if (data.dependencies !== 'None') {
    installationTC = `\n * [Installation](#installations)`
    installationText = `## Installation\nTo install necessary dependencies, run the following command:\n
  \`\`\`
  ${data.dependencies}
  \`\`\``;
  } else {
    installationText = '';
  } 

  // generate tests table of contents, heading, and text
  if (data.dependencies !== 'None') {
    testsTC = `\n * [Tests](#tests)`
    testsText = `## Tests\nTo run tests, run the following command:\n
  \`\`\`
  ${data.tests}
  \`\`\`
    `;
  } else {
    testsText = '';
  }

  // generate technologies table of contents, heading, and list
  if (tech == undefined || tech.length == 0){
    // empty technologies array
    techTC = '';
    techHeading = '';
    techList = '';
  } else {
    techTC = `\n * [Technologies](#technologies)`
    techHeading = `## Technologies`
    for(i = 0; i < tech.length; i++){
    techList += ` * ${tech[i]}\n`
    };
  }

  // generate APIs table of contents, and heading
  if (data.apis == 'No'){
    apiTC = '';
    apiText = '';
  } else {
    apiTC = `\n * [APIs](#apis)`
    apiText = `## APIs \nThe application utilizes the following APIs:`
  }

  let markdown = `# ${data.title}
${badge}

## Description
${data.description}

## Table of Contents
* [Links](#links)
* [Animation](#animation) 
* [Instructions](#instructions) ${installationTC} ${testsTC}
* [Contribute](#contribute) ${techTC} ${apiTC} ${licenseTC}
* [Contact](#contact)

## Links
${urlText}
Repository: [${data.repoURL}](${data.repoURL})\n

## Animation
The following animation demonstrates the application functionality:
<br>
![${data.title} animation](${data.imagePath})
## Instructions
${data.repoInfo}
${installationText}
${testsText}
## Contribute
${data.contribute}

${techHeading}
${techList}

${apiText}

${licenseText}

## Contact
For questions or comments, please contact me.\n
Email: <a href="mailto: ${data.email}" target="_blank">${data.email}</a>\n
GitHub: [${data.username}](https://github.com/${data.username}/)
`;
  return markdown
}

module.exports = generateMarkdown;
