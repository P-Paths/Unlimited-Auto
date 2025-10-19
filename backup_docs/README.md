# Unlimited Auto Website

A modern, mobile-first dealership website built with Next.js, TypeScript, and Tailwind CSS. This is the public-facing website for Unlimited Auto, designed to showcase inventory and capture leads for the Accorria platform.

## Features

- **Modern Design**: Clean, professional layout optimized for mobile devices
- **SEO Optimized**: Built with Next.js App Router for excellent search engine performance
- **Lead Capture**: Contact forms with TCPA compliance and consent tracking
- **Inventory Display**: Featured vehicles with detailed information and CTAs
- **Fast Performance**: Optimized images, lazy loading, and Lighthouse-friendly code

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Images**: Next.js Image component with optimization
- **Icons**: Emoji icons (can be replaced with icon library later)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/P-Paths/Unlimited-Auto.git
cd Unlimited-Auto
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── WhyBuyHere.tsx       # Features section
│   ├── FeaturedVehicles.tsx # Vehicle showcase
│   ├── ContactSection.tsx   # Contact form
│   └── Footer.tsx           # Site footer
```

## Key Components

### Header
- Responsive navigation with mobile menu
- Call-to-action buttons (Call Now, Text Us)
- Sticky header for better UX

### Hero Section
- Compelling headline and value proposition
- Primary CTAs (Browse Inventory, Schedule Drive)
- Key statistics display

### Featured Vehicles
- Sample vehicle data (will be replaced with real inventory)
- Vehicle cards with images, pricing, and features
- Direct links to vehicle details and scheduling

### Contact Section
- Contact information display
- Lead capture form with TCPA compliance
- Form validation and submission handling

## Integration Points

This website is designed to integrate with the Accorria platform:

- **Lead Capture**: Forms submit to Accorria API endpoints
- **Widget Embedding**: Ready for Accorria chat and scheduler widgets
- **Analytics**: Prepared for Google Analytics and Meta Pixel integration
- **Call Tracking**: Phone numbers ready for call tracking integration

## Customization

### Branding
- Update colors in `tailwind.config.ts`
- Replace logo and company information in components
- Modify contact information and business hours

### Content
- Update hero text and value propositions
- Replace sample vehicle data with real inventory
- Customize feature descriptions and benefits

### Styling
- Modify Tailwind classes for different design preferences
- Add custom CSS in `globals.css` if needed
- Update color scheme and typography

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Configure environment variables if needed

### Other Platforms
- Build the project: `npm run build`
- Deploy the `out` folder to any static hosting service

## Environment Variables

Create a `.env.local` file for local development:

```env
# Accorria API Integration
ACCORRIA_API_KEY=your_api_key_here
ACCORRIA_API_URL=https://api.accorria.com

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_META_PIXEL_ID=your_meta_pixel_id

# Contact Information
NEXT_PUBLIC_PHONE_NUMBER=+1234567890
NEXT_PUBLIC_EMAIL=info@unlimitedauto.com
```

## Next Steps

1. **Inventory Integration**: Connect to real vehicle data source
2. **Accorria API**: Implement lead submission to Accorria platform
3. **Widget Integration**: Add Accorria chat and scheduler widgets
4. **Analytics**: Set up Google Analytics and Meta Pixel tracking
5. **SEO**: Add structured data and optimize for local search
6. **Performance**: Optimize images and implement caching

## Support

For questions or support, contact the development team or refer to the Accorria platform documentation.

---

Built with ❤️ for Unlimited Auto by the Accorria team.
