/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['kyopskdxxmbxiwheludn.supabase.co'],
  },
  env: {
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_SECRET_KEY: process.env.NEXT_PUBLIC_SUPABASE_SECRET_KEY
  }
}

module.exports = nextConfig
