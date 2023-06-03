/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  env: {
    API_BASE_URL: 'https://personal-finance-api.herokuapp.com'
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
