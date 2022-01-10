generateReadme = (data) =>
{
  return `
  ## ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)

  ## Purpose
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Installation](#installation)

  ## Installation
  Install the project by ${data.install}

  ## Usage
  To use the project ${data.usage}

  ## Credits
  Made by ${data.contributors}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)
  </br>
  This application is covered by the ${data.license} license.

  ## Tests
  Available tests include: ${data.test}

  ## Questions
  * Find me on Github: [${data.username}](https://github.com/${data.username})
  </br>
  * Email me with questions at: ${data.email}`;
}

  module.exports = generateReadme;