import { HttpClient } from '../HttpClient';

const BASE_URL = 'https://api.github.com';
const USERNAME = 'camila-cruz';

export const githubService = {
  async getAllReposFromUser(HttpClientModule = HttpClient) {
    return HttpClientModule.get(`${BASE_URL}/users/${USERNAME}/repos`, {
      headers: {},
    })
      .catch((err) => {
        throw new Error(err);
      });
  },
  async getRepoByName(projectName, HttpClientModule = HttpClient) {
    return HttpClientModule.get(`${BASE_URL}/repos/${USERNAME}/${projectName}`, {
      headers: {},
    })
      .catch((err) => {
        throw new Error(err);
      });
  },
};
