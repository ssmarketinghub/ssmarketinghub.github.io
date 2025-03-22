document.addEventListener('DOMContentLoaded', () => {
    // Create a script element for JSON-LD structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';

    // Define the structured data
    const structuredData = {
        // 1. Organization Schema
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "SS Marketing Hub",
                "url": "https://ssmarketinghub.github.io", // Replace with your actual GitHub Pages URL
                "logo": "https://ssmarketinghub.github.io/logo.png", // Replace with the absolute URL to your logo
                "foundingDate": "2019",
                "description": "SS Marketing Hub provides tailored digital solutions including Digital Marketing, SEO/SEM, Social Media Marketing, and Web Development to help businesses grow with measurable success.",
                "sameAs": [
                    "https://www.linkedin.com/company/ss-marketing-hub/",
                    "https://x.com/SSMarketingHub",
                    "https://www.facebook.com/ssmarketing19",
                    "https://www.instagram.com/ssmarketing19/",
                    "https://github.com/ssmarketinghub"
                ],
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "telephone": "+91942172320",
                        "contactType": "Customer Service",
                        "contactOption": "TollFree",
                        "areaServed": "IN",
                        "availableLanguage": "English"
                    },
                    {
                        "@type": "ContactPoint",
                        "telephone": "+917499422093",
                        "contactType": "Customer Service",
                        "contactOption": "TollFree",
                        "areaServed": "IN",
                        "availableLanguage": "English",
                        "url": "https://wa.me/917499422093" // WhatsApp link
                    }
                ]
            },
            // 2. Local Business Schema
            {
                "@type": "LocalBusiness",
                "name": "SS Marketing Hub",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Bembal",
                    "addressLocality": "Chandrapur",
                    "addressRegion": "Maharashtra",
                    "postalCode": "441228",
                    "addressCountry": "IN"
                },
                "telephone": "+91942172320",
                "url": "https://ssmarketinghub.github.io", // Replace with your actual GitHub Pages URL
                "openingHours": "Mo-Fr 09:00-18:00", // Assumed hours; adjust as needed
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 19.9615, // Approximate latitude for Chandrapur, India
                    "longitude": 79.2961 // Approximate longitude for Chandrapur, India
                }
            },
            // 3. Service Schema (for each service)
            {
                "@type": "Service",
                "serviceType": "Digital Marketing",
                "provider": {
                    "@type": "Organization",
                    "name": "SS Marketing Hub"
                },
                "description": "Unlock your brand’s potential with data-driven digital marketing strategies. From campaign planning to execution, we’ve got you covered."
            },
            {
                "@type": "Service",
                "serviceType": "SEO/SEM",
                "provider": {
                    "@type": "Organization",
                    "name": "SS Marketing Hub"
                },
                "description": "Boost your visibility with expert SEO and SEM. We optimize your presence to rank higher, attract traffic, and convert leads."
            },
            {
                "@type": "Service",
                "serviceType": "Social Media Marketing",
                "provider": {
                    "@type": "Organization",
                    "name": "SS Marketing Hub"
                },
                "description": "Engage your audience and build a loyal following with creative social media campaigns tailored to your brand."
            },
            {
                "@type": "Service",
                "serviceType": "Web Development",
                "provider": {
                    "@type": "Organization",
                    "name": "SS Marketing Hub"
                },
                "description": "Get a fast, responsive, and stunning website designed to showcase your business and drive results."
            },
            // 4. Website Schema
            {
                "@type": "WebSite",
                "url": "https://ssmarketinghub.github.io", 
                "name": "SS Marketing Hub",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://ssmarketinghub.github.io/#contact", // Links to contact form
                    "query-input": "required name=search_term_string"
                },
                "hasPart": [
                    {
                        "@type": "WebPage",
                        "url": "https://ssmarketinghub.github.io/#top",
                        "name": "Home"
                    },
                    {
                        "@type": "WebPage",
                        "url": "https://ssmarketinghub.github.io/#services",
                        "name": "Services"
                    },
                    {
                        "@type": "WebPage",
                        "url": "https://ssmarketinghub.github.io/#about",
                        "name": "About"
                    },
                    {
                        "@type": "WebPage",
                        "url": "https://ssmarketinghub.github.io/#contact",
                        "name": "Contact"
                    }
                ]
            }
        ]
    };

    // Inject the structured data into the script element
    script.textContent = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);
});