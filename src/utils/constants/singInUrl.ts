const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID

export const SING_IN_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`