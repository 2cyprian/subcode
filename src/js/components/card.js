/**
 * Card Component
 * Reusable card component for displaying content

 */


// 1. The Data: Add or edit services here
const servicesData = [
    {
        icon: "src/assets/icons/digital.svg",
        title: "Digital Transformation",
        description: "Transform your business with technology that automates processes and creates cloud experiences, starting with an analysis of your technological and business landscape."
    },
    {
        icon: "src/assets/icons/front.svg",
        title: "Front & Backend Design",
        description: "We offer UI/UX design and front-end development services that create user-friendly, visually appealing, and functional digital products."
    },
    {
        icon: "src/assets/icons/web.svg", // Represents Web/Mobile/Desktop
        title: "Web, Mobile & Desktop App Development",
        description: "Deliver stunning, intuitive mobile and desktop applications that engage customers with expert development services that meet their demands."
    },
    {
        icon: "src/assets/icons/saas.svg",
        title: "SaaS App Development",
        description: "Collect and analyze your daily customer data to make informed business decisions, because bold companies know innovation is the path to success."
    },
    {
        icon: "src/assets/icons/cd.svg",
        title: "CI/CD, support and maintenance",
        description: "We provide CI/CD solutions for seamless delivery, plus support and maintenance to keep your software secure and up-to-date."
    },
    {
        icon: "src/assets/icons/ai.svg",
        title: "Automations, A.I & Machine Learning",
        description: "We specialize in automation, AI, and machine learning solutions that streamline processes, enable informed decisions, and drive efficiency."
    }
];

// 2. The Logic: This renders the cards
const container = document.getElementById('services-container');

if (container) {
        // Show only Digital Transformation and Machine Learning on phone
        // Add slide-up-fade-in to card rendering
    let filteredData = servicesData;
    if (window.innerWidth <= 600) {
        filteredData = servicesData.filter(item =>
            item.title === "Digital Transformation" || item.title === "Automations, A.I & Machine Learning"
        );
    }
    const cardsHTML = filteredData.map(item => `
        <div class="service-card">
            <div class="card-icon">
                <img src="${item.icon}" alt="${item.title} icon" class="service-icon" style="width:48px;height:48px;object-fit:contain;" />
            </div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `).join('');

        container.innerHTML = cardsHTML;
        container.classList.add('slide-up-fade-in');
}
export { servicesData };
