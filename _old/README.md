# Vote for Better Money

**Website**: [https://voteforbetter.money](https://voteforbetter.money)

A Bitcoin advocacy website that educates Americans about using Bitcoin as an alternative to traditional currency and the effects of inflation on purchasing power.

## About

"Vote for Better Money" is a static website that promotes Bitcoin education and monetary freedom. The site explains how unlimited money printing leads to inflation and presents Bitcoin as "better money" that Americans can adopt without waiting for political solutions.

### Key Messages

- **Inflation Impact**: Demonstrates how dollar debasement affects purchasing power
- **Bitcoin Benefits**: Explains Bitcoin's fixed supply and deflationary properties
- **American Values**: Positions Bitcoin as aligned with American principles of freedom
- **Practical Action**: Encourages immediate adoption rather than waiting for political change

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Fonts**: Adobe Typekit (Proxima Nova family)
- **Analytics**: Privacy-focused microanalytics.io
- **Deployment**: Nginx with nixpacks configuration
- **Hosting**: Static site optimized for modern web hosting platforms

## Project Structure

```
├── index.html              # Main landing page
├── css/
│   └── style.css          # Main stylesheet
├── img/                   # Images and graphics
│   ├── favicons/         # Favicon files
│   ├── meta/             # Social media meta images
│   └── nostr/            # Nostr-related images
├── learn/                # Educational content pages
├── files/                # Downloadable resources
├── nginx.conf            # Nginx server configuration
├── nixpacks.toml         # Deployment configuration
└── *.html               # Various content pages
```

## Key Features

- **Educational Content**: Multiple pages explaining Bitcoin concepts
- **Resource Downloads**: Printable flyers and stickers
- **Social Integration**: Nostr protocol integration
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Comprehensive meta tags and social sharing
- **Privacy Focused**: Analytics that don't track IP addresses

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/[username]/vote-for-better-money.git
   cd vote-for-better-money
   ```

2. Serve the files using any static web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser to `http://localhost:8000`

## Deployment

The site is configured for deployment using nixpacks with nginx:

- **nixpacks.toml**: Defines the build and deployment process
- **nginx.conf**: Custom nginx configuration for optimal static file serving
- **Static Assets**: All resources are optimized for CDN delivery

## Contributing

We welcome contributions that improve the educational content, user experience, or technical implementation:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Test thoroughly across different devices and browsers
5. Commit your changes (`git commit -am 'Add improvement'`)
6. Push to the branch (`git push origin feature/improvement`)
7. Create a Pull Request

### Content Guidelines

- Maintain factual accuracy regarding Bitcoin and monetary policy
- Keep language accessible to newcomers
- Ensure all claims are backed by reliable sources
- Preserve the educational and advocacy mission

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Email**: hi@bitcoin.rocks
- **Website**: [https://voteforbetter.money](https://voteforbetter.money)

## Mission

Our mission is to show Americans they can vote for better money by using Bitcoin today, rather than waiting for political solutions to fix our broken monetary system.

---

*"You don't need to wait for election day to vote for better money. Bitcoin is better money. And you can vote for better money by using Bitcoin today."*
