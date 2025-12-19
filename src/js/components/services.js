const techData = {
    "digital": {
        label: "Digital Transformation",
        icon: "../assets/icons/digital.svg",
        cards: [
            {
                title: "Designing Web Applications",
                image: "../assets/tech/web.svg",
                desc: "We create responsive and high-performance web applications that align with your business goals. From user interface to backend logic, we ensure every web solution delivers speed, scalability, and seamless user experiences across all devices."
            },
            {
                title: "Designing Mobile Applications",
                image: "../assets/tech/mobile.svg",
                desc: "Our mobile app solutions bring your business to users’ fingertips. We design and build Android and iOS applications that are visually engaging, intuitive to use, and optimized for performance."
            },
            {
                title: "Software Development",
                image: "../assets/tech/software.svg",
                desc: `We build robust, custom software that drives efficiency and digital growth. From enterprise systems to specialized tools, our development process ensures scalability, security, and long-term sustainability.
                        Delivering tailored software solutions that evolve with your business.`
            },
            {
                title: "CI/CD Support $ Maintenance",
                image: "../assets/tech/ci-cd.svg",
                desc: "We streamline your development lifecycle with automated CI/CD pipelines. Our support ensures faster deployment, early bug detection, and smooth integration of updates — helping your systems stay agile and reliable."
            }
        ]
    },
    "automation": {
        label: "Automations, A.I & Machine Learning",
        icon: "../assets/icons/ai.svg", // Icon for AI/ML
        cards: [
            {
                title: "Process Automation",
                image: "../assets/tech/process.svg",
                desc: "We design intelligent automation systems that eliminate repetitive tasks and streamline workflows. From business operations to data handling, our solutions improve efficiency, reduce errors, and free your team to focus on high-value work."
            },
            {
                title: "Predictive Analytics",
                image: "../assets/tech/predictive.svg",
                desc: "Using advanced data models and machine learning algorithms, we help businesses forecast trends, anticipate customer needs, and make data-driven decisions. Our predictive analytics turn raw data into actionable insights."
            },
            {
                title: "AI-Powered Solutions",
                image: "../assets/tech/process.svg",
                desc: "We integrate AI into products and systems to create smarter digital experiences. Whether it's chatbots, recommendation engines, or intelligent assistants, our AI solutions enhance customer engagement and operational intelligence."
            },
            {
                title: "Machine Learning Model Development",
                image: "../assets/tech/machine.svg",
                desc: "We build, train, and deploy custom machine learning models tailored to your data and goals. Our approach focuses on scalability, accuracy, and real-world applicability from anomaly detection to natural language processing."
            }
        ]
    }
};

// --- RENDER LOGIC ---
const navContainer = document.getElementById('tech-nav-container');
const gridContainer = document.getElementById('tech-grid-container');

// 1. Create Buttons
Object.keys(techData).forEach((key, index) => {
    const category = techData[key];
    const btn = document.createElement('button');
    // First item active by default
    btn.className = `tech-tab-btn ${index === 0 ? 'active' : ''}`; 
    btn.innerHTML = `<img src="${category.icon}"></img> ${category.label}`;
    btn.onclick = () => loadCategory(key, btn);
    navContainer.appendChild(btn);
});

// 2. Load Content Function
function loadCategory(key, activeBtn) {
    const data = techData[key];

    // Update Buttons Visual State
    document.querySelectorAll('.tech-tab-btn').forEach(b => b.classList.remove('active'));
    if(activeBtn) activeBtn.classList.add('active');

    // Fade Out Effect
    gridContainer.style.opacity = 0;

    setTimeout(() => {
        // Generate HTML for Cards
        gridContainer.innerHTML = data.cards.map(card => `
            <div class="tech-card">
                <div class="card-img-wrapper">
                    <img src="${card.image}" alt="${card.title}">
                </div>
                <div class="card-body">
                    <h3>${card.title}</h3>
                    <p>${card.desc}</p>
                </div>
            </div>
        `).join('');
        
        // Fade In
        gridContainer.style.opacity = 1;
    }, 200);
}


// Load first category initially
loadCategory('digital', document.querySelector('.tech-tab-btn'));

// --- TEAM DATA ---
const teamMembers = [
    { name: "Fuad", img: "../assets/tech/fuad.png" },
    { name: "Lugano", img: "../assets/tech/lugano.svg" },
    { name: "Emmanuel", img: "../assets/tech/emmanuel.svg" },
    { name: "Lupyana", img: "../assets/tech/lupyan.svg" },
    { name: "Maria", img: "../assets/tech/maria.svg" }
];

// --- TECH STACK DATA (Using FontAwesome Classes for ease) ---
const techStack = [
    { name: "Tailwind", icon: "../assets/icons/tailwindcss.svg", color: "#61DAFB" },

    { name: "React", icon: "../assets/icons/react.svg", color: "#61DAFB" },
    { name: "Python", icon: "../assets/icons/python.svg", color: "#3776AB" },
    { name: "PostgreSQL", icon: "../assets/icons/postgres.svg", color: "#336791" },
    { name: "Next", icon: "../assets/icons/nextjs.svg", color: "#4FC08D" },
    { name: "Bulma", icon: "../assets/icons/bulma.svg", color: "#68A063" },
    { name: "Mysql", icon: "../assets/icons/mysql.svg", color: "#2496ED" },
    { name: "Linux", icon: "../assets/icons/linux.svg", color: "#000000" },
    { name: "MongoDB", icon: "../assets/icons/mongodb.svg", color: "#47A248" },
    { name: "Go", icon: "../assets/icons/go.svg", color: "#00ADD8" },
    { name: "FastAPI", icon: "../assets/icons/fastapi.svg", color: "#61DAFB" },
    { name: "Django", icon: "../assets/icons/django.svg", color: "#FF9900" }
];

// --- RENDER LOGIC ---

// 1. Render Team
const teamContainer = document.getElementById('team-list');
if (teamContainer) {
    teamContainer.innerHTML = teamMembers.map(member => `
        <div class="team-member">
            <div class="avatar-circle">
                <img src="${member.img}" alt="${member.name}">
            </div>
            <span class="member-name">${member.name}</span>
        </div>
    `).join('');
}

// 2. Render Tech
const techContainer = document.getElementById('tech-grid');
if (techContainer) {
    techContainer.innerHTML = techStack.map(tech => `
        <div class="tech-tile">
            <img src="${tech.icon}" style="color: ${tech.color}"></img>
        </div>
    `).join('');
}