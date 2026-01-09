# Open Hearts Dating

A nonprofit inclusive dating platform for people with disabilities. Built with Next.js 14+ App Router, TypeScript, and a focus on accessibility and SEO.

## Features

- **Server-Side Rendering**: All pages are Server Components for optimal SEO and performance
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data (JSON-LD)
- **Accessible**: WCAG-friendly HTML with semantic markup and keyboard navigation
- **Fast Performance**: Optimized for Core Web Vitals
- **TypeScript**: Full type safety throughout the application

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with global metadata
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── robots.ts            # robots.txt generator
│   ├── sitemap.ts           # sitemap.xml generator
│   ├── dating/
│   │   └── page.tsx         # Dating platform page
│   ├── mission/
│   │   └── page.tsx         # Mission page
│   ├── support/
│   │   └── page.tsx         # Support page
│   └── contact/
│       └── page.tsx         # Contact page
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The site will be live at `your-project.vercel.app`. You can add a custom domain (openheartsdating.com) in the Vercel dashboard.

### Other Platforms

This Next.js application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## SEO Configuration

### Google Search Console

1. Add your domain to [Google Search Console](https://search.google.com/search-console)
2. Verify ownership (DNS record or HTML file)
3. Submit your sitemap: `https://openheartsdating.com/sitemap.xml`

### Meta Tags

All pages include:
- Title tags
- Meta descriptions
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Structured data (JSON-LD)

### Structured Data

The homepage includes Organization/NGO structured data. The dating page includes WebApplication structured data with accessibility features.

## Accessibility

The site is built with accessibility in mind:
- Semantic HTML5 elements
- ARIA labels where appropriate
- Skip to main content link
- Keyboard navigation support
- High contrast color scheme
- Focus indicators

## Future Enhancements

- Contact form functionality
- Newsletter signup
- Social media integration
- Blog section
- User authentication (for future platform)
- Database integration
- Image optimization and OG image generation

## License

This project is part of the Open Hearts Dating nonprofit organization.

## Support

For questions or support, please visit [openheartsdating.com/contact](https://openheartsdating.com/contact)




