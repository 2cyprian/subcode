// --- SECTORS DATA ---
const sectorsData = [
    {
        id: "education",
        icon: "../assets/icons/education.svg",
        label: "Education",
        headline: "Empowering the Future of Learning",
        description: "SubCode Africa revolutionizes education through innovative EdTech solutions, fostering a digitally adept workforce and bridging the educational divide across the continent.",
        feat1Title: "Enhanced Learning Experiences",
        feat1Desc: "Interactive platforms and digital tools facilitate engaging and personalized education.",
        feat2Title: "Scalable Software Solutions",
        feat2Desc: "Cloud-based systems enable widespread access to quality education in remote areas.",
        ctaText: "Transform Education With SubCode",
        // Replace these URLs with your actual assets
        imgMain: "../assets/tech/education.svg",
        imgBack: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "finance",
        icon: "../assets/icons/finance.svg",
        label: "Finance",
        headline: "Redefining Financial Inclusion",
        description: "We build secure, scalable fintech infrastructures that enable digital payments, banking access, and economic growth for African businesses.",
        feat1Title: "Secure Transactions",
        feat1Desc: "Bank-grade security protocols ensuring safe and instant digital payments.",
        feat2Title: "Data-Driven Insights",
        feat2Desc: "AI-powered analytics to help financial institutions make smarter lending decisions.",
        ctaText: "Innovate Finance With SubCode",
        imgMain: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
        imgBack: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "telecom",
        icon: "../assets/icons/telecom.svg",
        label: "Telecom",
        headline: "Connecting the Continent",
        description: "Our telecom solutions optimize network management and customer service, ensuring seamless connectivity for millions of users.",
        feat1Title: "Network Optimization",
        feat1Desc: "Real-time monitoring tools to reduce downtime and improve signal quality.",
        feat2Title: "Customer Portals",
        feat2Desc: "Self-service apps that allow users to manage data and subscriptions easily.",
        ctaText: "Connect With SubCode",
        imgMain: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
        imgBack: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "healthcare",
        icon: "../assets/icons/health.svg",
        label: "Healthcare",
        headline: "Digital Health for Everyone",
        description: "We create telemedicine and record-keeping systems that improve patient outcomes and streamline hospital operations.",
        feat1Title: "Telemedicine Apps",
        feat1Desc: "Connecting doctors with patients in remote areas via video and chat.",
        feat2Title: "Electronic Records",
        feat2Desc: "Secure, centralized patient data accessible to authorized medical staff.",
        ctaText: "Heal With SubCode",
        imgMain: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
        imgBack: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "energy",
        icon: "../assets/icons/energy.svg",
        label: "Energy",
        headline: "Powering Sustainable Growth",
        description: "Smart grid management and renewable energy software to ensure efficient power distribution across the grid.",
        feat1Title: "Smart Metering",
        feat1Desc: "IoT solutions for accurate consumption tracking and billing.",
        feat2Title: "Grid Analytics",
        feat2Desc: "Predictive maintenance tools to prevent power outages before they happen.",
        ctaText: "Power Up With SubCode",
        imgMain: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80",
        imgBack: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "tech",
        icon: "../assets/icons/tech.svg",
        label: "Tech",
        headline: "Building Tomorrow's Tech",
        description: "From startups to enterprises, we provide the core development services needed to launch scalable digital products.",
        feat1Title: "Rapid Prototyping",
        feat1Desc: "MVP development to test market viability quickly.",
        feat2Title: "Enterprise Scale",
        feat2Desc: "Microservices architecture designed for millions of concurrent users.",
        ctaText: "Build With SubCode",
        imgMain: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
        imgBack: "https://images.unsplash.com/photo-1531297461136-82lw9f2a1b33?auto=format&fit=crop&w=600&q=80"
    }
];

// --- INITIALIZATION & LOGIC ---
const navContainer = document.getElementById('sector-nav');

// 1. Render Buttons dynamically
sectorsData.forEach((sector, index) => {
    const btn = document.createElement('button');
    btn.className = `sector-btn ${index === 0 ? 'active' : ''}`; // First one active by default
    btn.innerHTML = `<img src="${sector.icon}"></img> ${sector.label}`;
    btn.onclick = () => loadSector(index);
    navContainer.appendChild(btn);
});

// 2. Function to Load Content
function loadSector(index) {
    const data = sectorsData[index];
    
    // Update Buttons State
    const buttons = document.querySelectorAll('.sector-btn');
    buttons.forEach((btn, i) => {
        if (i === index) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // Update Text Content with a fade effect
    const cardContent = document.querySelector('.card-text-content');
    cardContent.style.opacity = 0; // Fade out
    
    setTimeout(() => {
        document.getElementById('sector-title').innerText = data.headline;
        document.getElementById('sector-desc').innerText = data.description;
        
        document.getElementById('feat-1-title').innerText = data.feat1Title;
        document.getElementById('feat-1-desc').innerText = data.feat1Desc;
        
        document.getElementById('feat-2-title').innerText = data.feat2Title;
        document.getElementById('feat-2-desc').innerText = data.feat2Desc;
        
        document.getElementById('sector-cta').innerText = data.ctaText;

        // Update Images
        document.getElementById('img-main').src = data.imgMain;
        // document.getElementById('img-bg').src = data.imgBack;

        cardContent.style.opacity = 1; // Fade in
    }, 200);
}

// Load first sector on page load
loadSector(0);