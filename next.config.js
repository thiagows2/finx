/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sign_in',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
