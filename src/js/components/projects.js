// --- 1. FEATURED PROJECTS DATA ---
const featuredProjectsDB = [
    {
        id: "Tech",
        label: "Tech",
        icon: "../assets/icons/tech.svg", 
        // PROJECT DETAILS
        title: "Tehama Awards Tanzania",
        description: "The TEHAMA Awards is Tanzania’s premier ICT recognition platform. We built a comprehensive digital nomination and voting system that streamlined the entire process, ensuring transparency and real-time data analytics for the judges.",
        technologies: [
            { icon: "../assets/icons/python.svg", color: "#3776AB" },
            { icon: "../assets/icons/react.svg", color: "#61DAFB" },
            { icon: "../assets/icons/docker.svg", color: "#2496ED" },
            { icon: "../assets/icons/mysql.svg", color: "#333" }
        ],
        testimonial: {
            text: "Subcode transformed our digital presence with exceptional results.",
            author: "Mr. Noah Maina",
            role: "TEHAMA AWARDS Manager",
            rating: 5
        },
        images: {
            // Using the Tehama images
            desktopBack: "../assets/projects/tehamaweb1.png",
            desktopFront: "../assets/projects/tehamaweb2.png",
            mobileLeft: "../assets/projects/tehamaphone1.jpg",
            mobileRight: "../assets/projects/tehamaphone2.jpg"
        },
        link:"https://tehamaawards.tz/"
    },
    {
        id: "finance",
        label: "Finance",
        icon: "../assets/icons/finance.svg",
        // PROJECT DETAILS
        title: "M-Pesa Gateway Integration",
        description: "A robust payment gateway solution designed for high-volume transactions. We integrated seamless mobile money APIs, fraud detection systems, and a merchant dashboard that processes thousands of transactions daily.",
        technologies: [
            { icon: "../assets/icons/fastapi.svg", color: "#E76F00" },
            { icon: "../assets/icons/vue.svg", color: "#F7DF1E" },
            { icon: "../assets/icons/docker.svg", color: "#2496ED" },
            { icon: "../assets/icons/postgres.svg", color: "#333" },
            ],
        testimonial: {
            text: "Security and speed were our top priorities, and <br>SubCode delivered beyond expectations.",
            author: "Sarah Johnson",
            role: "FinTech Director",
            rating: 5
        },
        images: {
            // Finance placeholders
            desktopBack: "../assets/projects/binaryweb1.png",
            desktopFront: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
            mobileLeft: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=300&q=80",
            mobileRight: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=300&q=80"
        }
    },
    {
        id: "telecom",
        label: "Telecom",
        icon: "../assets/icons/telecom.svg",
        // PROJECT DETAILS
        title: "Network Monitor Dashboard",
        description: "An enterprise-grade visualization tool for tracking network uptime and signal strength across regions. This platform provides real-time alerts and predictive maintenance schedules for telecom engineers.",
        technologies: [
            { icon: "../assets/icons/nextjs.svg", color: "#DD0031" },
            { icon: "../assets/icons/django.svg", color: "#68A063" },
            { icon: "../assets/icons/mongodb.svg", color: "#555" },
            { icon: "../assets/icons/linux.svg", color: "#8D7646" }
        ],
        testimonial: {
            text: "Our response time to outages improved by <br>40% thanks to this dashboard.",
            author: "David K.",
            role: "Network Ops Lead",
            rating: 5
        },
        images: {
            // Telecom placeholders
            desktopBack: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            desktopFront: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
            mobileLeft: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&q=80",
            mobileRight: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=300&q=80"
        }
    },
    {
        id: "healthcare",
        label: "Healthcare",
        icon: "../assets/icons/health.svg",
        // PROJECT DETAILS
        title: "AfyaConnect Telemed",
        description: "A patient-doctor connectivity app allowing remote consultations, prescription management, and secure medical history storage. Built with HIPAA compliance standards for maximum data privacy.",
        technologies: [
            { icon: "../assets/icons/fastapi.svg", color: "#F05138" },
            { icon: "../assets/icons/android.svg", color: "#3DDC84" },
            { icon: "../assets/icons/tailwindcss.svg", color: "#333" },
            { icon: "../assets/icons/mysql.svg", color: "#8D7646" }
        ],
        testimonial: {
            text: "This app has made healthcare accessible to rural<br> communities like never before.",
            author: "Dr. Amina J.",
            role: "Hospital Administrator",
            rating: 5
        },
        images: {
            // Health placeholders
            desktopBack: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
            desktopFront: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
            mobileLeft: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=300&q=80",
            mobileRight: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=300&q=80"
        }
    },
    {
        id: "energy",
        label: "Energy",
        icon: "../assets/icons/energy.svg",
        // PROJECT DETAILS
        title: "Rashal Energies Website",
        description: "A modern, fast, and fully responsive corporate website built for Rashal Energies to showcase their solar products, services, and clean-energy solutions. The platform strengthens their brand presence, improves customer trust, and makes it easy for clients to explore and contact the company.",
        technologies: [
            { icon: "../assets/icons/bulma.svg", color: "#4caf50" },
            { icon: "../assets/icons/python.svg", color: "#3776AB" },
            { icon: "../assets/icons/react.svg", color: "#333" },
            { icon: "../assets/icons/tailwindcss.svg", color: "#FBBF24" }
        ],
        testimonial: {
            text: "A clean, modern website that clearly communicates <br> our services and strengthens our brand presence.",
            author: "Marketing Team",
            role: "Rashal Energies Marketing",
            rating: 4
        },
        images: {
            // Energy placeholders
            desktopBack: "../assets/projects/rashalweb1.png",
            desktopFront: "../assets/projects/rashalweb2.png",
            mobileLeft: "../assets/projects/rashalphone1.png",
            mobileRight: "../assets/projects/rashalphone2.png"
        },
        link:"https://www.rashalenergies.co.tz"
    },
    {
        id: "Education",
        label: "Education",
        icon: "../assets/icons/education.svg",
        // PROJECT DETAILS
        title: "Learning & Training Portal",
        description: "A modern, interactive e-learning platform designed to help students and professionals access courses, track progress, and build practical skills. The system includes quizzes, progress<br> analytics, and a responsive user experience for seamless learning.",
        technologies: [
            { icon: "../assets/icons/html.svg", color: "#E44D26" },
            { icon: "../assets/icons/css.svg", color: "#1572B6" },
            { icon: "../assets/icons/vue.svg", color: "#F7DF1E" },
            { icon: "../assets/icons/node.svg", color: "#3C873A" }
        ],
        testimonial: {
            text: "The platform transformed how our learners access training <br> and track their growth.",
            author: "CTO, TechStart",
            role: "Software Lead",
            rating: 5
        },
        images: {
            // Tech placeholders
            desktopBack: "../assets/projects/binaryweb1.png",
            desktopFront: "../assets/projects/binaryweb2.png",
            mobileLeft: "../assets/projects/binaryphone1.png",
            mobileRight: "../assets/projects/binaryphone2.png"
        }
    }
];

// --- 2. LOGIC TO RENDER NAV & PROJECTS ---
const projNavContainer = document.getElementById('project-nav');
const projCardContainer = document.getElementById('project-card-container');

// A. Initialize Buttons
featuredProjectsDB.forEach((project, index) => {
    const btn = document.createElement('button');
    // Uses the shared CSS class 'subcode-nav-btn'
    btn.className = `subcode-nav-btn ${index === 0 ? 'active' : ''}`; 
    btn.innerHTML = `<img src="${project.icon}" alt="icon"> ${project.label}`;
    
    btn.onclick = () => switchProject(index);
    projNavContainer.appendChild(btn);
});

// B. Load Project Function
function switchProject(index) {
    const data = featuredProjectsDB[index];

    // 1. Update Buttons Active State
    const allBtns = projNavContainer.querySelectorAll('.subcode-nav-btn');
    allBtns.forEach((b, i) => {
        b.classList.toggle('active', i === index);
    });

    // 2. Smooth Fade Out
    projCardContainer.style.opacity = 0;
    
    setTimeout(() => {
        // 3. Generate HTML
        const starsHTML = Array(data.testimonial.rating).fill('<i class="fas fa-star"></i>').join('');
        const techHTML = data.technologies.map(t => 
            `<div class="tech-box"><img src="${t.icon}" style="color:${t.color}" ></iimg></div>`
        ).join('');

        const html = `
        <div class="project-component-wrapper">
            <div class="project-visuals">
                <img src="${data.images.mobileLeft}" class="device-img img-mobile-top" alt="App">
                <img src="${data.images.desktopBack}" class="device-img img-desktop-back" alt="Desktop">
                <img src="${data.images.desktopFront}" class="device-img img-desktop-front" alt="Desktop">
                <img src="${data.images.mobileRight}" class="device-img img-mobile-bottom" alt="App">
            </div>
            <div class="project-card-body">
                <div class="project-content">
                    <h2>${data.title}</h2>
                    <p class="project-description">${data.description}</p>
                    
                    <div class="tech-section">
                        <h4>Technologies</h4>
                        <div class="tech-row">${techHTML}</div>
                    </div>

                    <div class="testimonial-section">
                        <div class="testimonial-header">
                            <h4>Customer Testimonial</h4>
                            <div class="stars">${starsHTML}</div>
                        </div>
                        <span class="quote">"${data.testimonial.text}"</span>
                        <span class="author">${data.testimonial.author}, ${data.testimonial.role}</span>
                    </div>

                    <a href="${data.link}"  target="_blank" class="btn-project-view">View Project</a>
                </div>
            </div>
        </div>`;

        projCardContainer.innerHTML = html;
        
        // 4. Smooth Fade In
        projCardContainer.style.opacity = 1;
    }, 300);
}

// Load the first project by default
switchProject(0);