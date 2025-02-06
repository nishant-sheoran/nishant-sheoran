const fs = require('fs');
const axios = require('axios');

(async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/${process.argv[2]}`);
    const stats = response.data;

    const svgContent = `<svg width='500' height='200' xmlns='http://www.w3.org/2000/svg'>
      <rect width='100%' height='100%' fill='black'/>
      <text x='20' y='40' fill='white' font-size='20'>GitHub Stats for ${stats.login}</text>
      <text x='20' y='80' fill='white' font-size='16'>Public Repos: ${stats.public_repos}</text>
      <text x='20' y='110' fill='white' font-size='16'>Followers: ${stats.followers}</text>
      <text x='20' y='140' fill='white' font-size='16'>Following: ${stats.following}</text>
      </svg>`;

    fs.writeFileSync('github_stats.svg', svgContent);
  } catch (error) {
    console.error('Failed to fetch GitHub stats:', error);
    process.exit(1);
  }
})();
