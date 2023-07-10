import resim1 from "./assets/images/pngwing.com.png"
const logotext = "HAKAN";
const meta = {
    title: "Hakan Emre Yeşil ",
    description: "I’m Name SName Full desc",
};

const introdata = {
    title: "Hi, I am Hakan Emre Yeşil",
    animated: {
        first: "I am full-stack developer",
        second: "I develop web apps",
    },
    description: "Dotnet MVC Angular",
    
};

const dataabout = {
    title: "About my self",
    aboutme: "Hello, I am a full stack developer with a degree in computer engineering."
    +" I have a strong passion for self improvement and enjoy staying up to date with the latest technologies." 
    +"My main expertise is .NET Core development where I gain hands-on experience building web applications and services."
    +" I have experience in front-end technologies such as HTML, CSS, JavaScript, MVC and have a good understanding of modern frameworks such as Angular." 
    +"In the backend, I am proficient in using C# and ASP.NET Core to develop robust and scalable solutions. I also have experience working with databases." 
    +"I am a quick learner and a team player.",
};
const worktimeline = [{
    jobtitle: "Job",
    where: "Location",
    date: "Since",
    content: "Content",
},
{
    jobtitle: "Full Stack Web Developer",
    where: "Metix Bilişim A.Ş. - Gebze/Kocaeli ",
    content:"Work with a variety of different languages, platforms, frameworks, and content management systems such as .Net Core, MVC, TFS, Azure",
    date: "14.12.2022-Present",
},
{
    jobtitle: "Web Developer – Intern",
    where: "ENQURA INFORMATION TECHNOLOGIES - Instanbul",
    content:"I developed 'Mission Tracking Web App' with a variety of different languages, frameworks such as .Net Core, Angular, Jwt(authentication), PostgreSQL",
    date: "04.07.2022-09.08.2022",
},
{
    jobtitle: "Web Developer – Intern",
    where: "VAKIFBANK GENEL MÜDÜRLÜĞÜ - Istanbul",
    content:"I developed 'Invoice Collection Web App' with a variety of different languages, frameworks such as .Net Core, Angular, MsSQL",
    date: "01.08.2021-31.08.2021",
},
];

const skills = [{
    name: "C# | .Net Core | Angular | MVC | Java | JavaScript | Git | TFS | React | Go",
},
];

const dataportfolio = [{
    img: resim1,
    description: "Blog Web App",
    link: "https://github.com/hakanemreyesil/BlogWeb",
},
{
    img: resim1,
    description: "Mission Tracking System Backend",
    link: "https://github.com/hakanemreyesil/MissionTrackingSystemBackend",
},
{
    img: resim1,
    description: "Mission Tracking System Frontend",
    link: "https://github.com/hakanemreyesil/MissionTrackingSystemFrontend",
},
{
    img: resim1,
    description: "React Chat App",
    link: "https://github.com/hakanemreyesil/React-chat-app",
},
{
    img: resim1,
    description: "Invoice Collection Web App",
    link: "https://github.com/Fatura-Tahsilat-Projesi",
},
{
    img: resim1,
    description: "Intelligent Mirror Performing Health Analysis Based on Image Processing (Supported by TUBITAK 2209-A)",
    link: "https://drive.google.com/file/d/1Ty5x90q4h0h_i_W1XqnuqCXwSAwOB_T0/view",
},
{
    img: resim1,
    description: "Mekan 32 Web App",
    link: "https://github.com/hakanemreyesil/mekan32",
},
{
    img: resim1,
    description: "Snake Game",
    link: "https://github.com/hakanemreyesil/YilanOyunu",
},
];

const contactConfig = {
    YOUR_EMAIL: "yesilhakanemre@gmail.com",
    YOUR_PHONE: "(534)766-6474",
    description: "Contact Me ",
    YOUR_SERVICE_ID: "service_36xyebk",
    YOUR_TEMPLATE_ID: "template_gq7w49b",
    YOUR_USER_ID: "9DWgYElAU0UTBX8O1",
};

const socialprofils = {
    github: "https://github.com/hakanemreyesil",
    linkedin: "https://www.linkedin.com/in/hakan-emre-ye%C5%9Fil/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};