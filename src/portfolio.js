const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Deferrent.github.io',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Joseph Sam',
  role: 'Junior Security/Cloud Engineer',
  description:
    'A pleasure to meet you! I am a Junior Security/Cloud Engineer versed in Linux and Container technologies (Docker, Kubernetes), Python scripting and automation, CI/CD pipelining, and AWS Cloud Administration. Currently looking to be exposed to more roles that consist of building and maintaining quality infrastructure systems on cloud providers, developing code to automate processes, and continue my learning of performing these responsibilities with a security-focused mindset each step of the way. I hope that you enjoy the following projects I have been working on! My resume is also linked directly below if you want to check that out as well!',
  resume: 'https://docs.google.com/viewer?url=https://github.com/Deferrent/deferrent.github.io/raw/main/resume/SamJosephResumeCloud.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/josephsam20',
    github: 'https://github.com/Deferrent',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'CI/CD Pipeline (with unit tests) for a Python Flask web app that runs on an EC2 virtual machine, Terraform script that automates VM provisioning, Web app Docker image build, and deployment on EC2 VM',
    stack: ['Python', 'Terraform', 'AWS EC2', 'Docker', 'Github CI/CD Pipeline', 'PyTest'],
    sourceCode: 'https://github.com/Deferrent/terraformflaskcicd',
  },
  {
    name: 'Project 2',
    description:
      'Create a Python Flask Web App, using Linux to create env files/list dependencies; & use a Gitlab CI Pipeline to create/update docker image and upload to ECS',
    stack: ['Docker', 'Python', 'Gitlab CI', 'AWS ECS'],
    sourceCode: 'https://gitlab.com/Deferrent/december-project',
  },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Terraform',
  'Docker/Kubernetes',
  'AWS/Azure Infrastructure Provision and IAM Management',
  'CI/CD (Gitlab CI, Github CI/CD, Jenkins, ArgoCD',
  'Linux Administration',
  'Endpoint Detection Response (Carbon Black)',
  'SIEM Monitoring and Policy Creation (FortiSIEM)',
  'Git',
  'Phishing Test and After Action Reporting',
  'Networking',
  'Cloud Security (AWS Security Hub, CIS Hardening)',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'josephsam92@gmail.com',
}

export { header, about, projects, skills, contact }
