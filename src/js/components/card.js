/**
 * Card Component
 * Reusable card component for displaying content

 */


// 1. The Data: Add or edit services here
const servicesData = [
    {
        id: 1,
        icon: "src/assets/icons/web.svg", // Represents Web/Mobile/Desktop
        title: "Web Applications",
        description: `We create responsive and highperformance web
                        applications that align with your business goals.
                        From user interface to back-end logic, we ensure 
                        every web solution delivers speed, scalability, and 
                        seamless user experiences across all devices.`
    },
    {
        id: 2,
        icon: "src/assets/icons/mobile.svg",
        title: "Mobile Applications",
        description: `Our mobile app solutions bring your business to 
                    users’ fingertips. We design and build Android and
                    iOS applications that are visually engaging, 
                    intuitive to use, and optimized for performance.`
    },
    {
        id: 3,
        icon: "src/assets/icons/front.svg",
        title: "Software Development",
        description: `We build robust, custom software that drives efficiency and growth. From enterprise systems 
                    to specialized tools, our development ensures 
                    scalability, security, and sustainability, delivering
                    tailored solutions that evolve with your business`
    },
    {
        id: 4,
        icon: "src/assets/icons/cd.svg",
        title: "CI/CD support ",
        description: "We streamline your development lifecycle with automated CI/CD pipelines. Our support ensures faster deployment, early bug detection, and smooth integration of updates, helping your systems stay agile and reliable."
    },
    {
        id: 5,
        icon: "src/assets/icons/auto.svg",
        title: "Process Automation",
        description: "We design intelligent automation systems that eliminate repetitive tasks and streamline workflows. From operations to data handling, our solutions improve efficiency, reduce errors, and free your team for high-value work.",
    },
    {
        id: 6,
        icon: "src/assets/icons/ai.svg",
        title: "Machine Learning",
        description: "We build, train, and deploy custom machine learning models tailored to your data and goals. Our approach focuses on scalability, accuracy, and real-world applicability  from anomaly detection to natural language processing.",
    }
];

// 2. The Logic: This renders the cards

const container = document.getElementById('services-container');

if (container) {
    // Show only selected ids on phone
    // Add slide-up-fade-in to card rendering
    let filteredData = servicesData;
    const cardsHTML = filteredData.map(item => `
        <div class="service-card">
            <div class="card-icon">
                <img src="${item.icon}" alt="${item.title} icon" class="service-icon" " />
            <h3>${item.title}</h3>

            </div>
            <p>${item.description}</p>
        </div>
    `).join('');

    container.innerHTML = cardsHTML;
    container.classList.add('slide-up-fade-in');
}
export { servicesData };
