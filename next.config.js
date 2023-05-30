/** @type {import('next').NextConfig} */
const nextConfig = {
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
