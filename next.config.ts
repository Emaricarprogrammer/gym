/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove a linha com 'port' se existir
  // port: 3000, // ← REMOVE ESTA LINHA
  
  // Mantém outras configurações
  images: {
    domains: ['localhost'],
    // ou se estiveres usando remotePatterns:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig