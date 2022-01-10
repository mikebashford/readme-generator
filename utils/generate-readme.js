generateReadme = (data) =>
{
  return `${data.title}
  ##Description
  ${data.description}
  ##Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[Credits](#credits)
  *[License](#license)
  *[Installation](#installation)
  
  ##Installation
  Install the project by ${data.install}

  ##Usage
  To use the project ${data.usage}

  ##Credits
  ${data.contributors}

  ##License
  ${data.license}

  ##Tests
  Available tests include: ${data.test}

  ##Questions
  Find me on Github: ${data.username}
  Email me with questions at: ${data.email}`;
}

  module.exports = generateReadme;