# Personal Resume Website

This is a personal resume website built with Next.js and Tailwind CSS. The project is designed to be easily customizable by editing a single file.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or yarn) installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/your_project_name.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

## Usage

### Running the development server

To run the app in the development mode, run the following command:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

### Building for production

To build the application for production, run the following command:

```sh
npm run build
```

This will create a `build` folder with the production-ready files.

### Starting the production server

To start the production server, run the following command:

```sh
npm run start
```

## Project Structure

The project has a simple and straightforward structure:

```
/
├── app/
│   ├── page.tsx
│   └── components/
│       ├── Education.tsx
│       ├── Header.tsx
│       ├── ProfessionalExperience.tsx
│       ├── Projects.tsx
│       ├── Resume.tsx
│       ├── Summary.tsx
│       └── TechnicalSkills.tsx
├── package.json
└── README.md
```

-   `app/page.tsx`: The main page of the application.
-   `app/components/`: Contains all the React components used in the application.
-   `app/components/Resume.tsx`: The main data file for the resume. All the information displayed on the website is stored in this file.

## Customization

To customize the resume, you just need to edit the `Resume.tsx` file located in `app/components/`. This file contains a TypeScript object with all the data for the resume, including your name, contact information, summary, education, skills, projects, and work experience.

The `Resume` object has the following structure:

```typescript
interface Resume {
  header: {
    name: string;
    title:string;
    mail: string;
    phone: string;
    location: {
      url: string;
      label: string;
    };
    links: {
      url: string;
      label: string;
    }[];
  };
  summary: string;
  education: {
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
    major?: string;
    location: string;
    details?: string[];
  }[];
  skills: string[];
  projects: {
    title: string;
    description?: string;
    techStack: string;
    points: string[];
    ongoing: boolean;
    links?: {
      url: string;
      label: string;
    }[];
  }[];
  workExperience: {
    jobTitle: string;
    company: string;
    location: string;
    description?: string;
    startDate: string;
    endDate: string;
    responsibilities?: string[];
    link?: string;
  }[];
}
```

Simply update the values in this object with your own information, and the website will be updated automatically.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Technologies Used

-   [Next.js](https://nextjs.org/) - React framework for production
-   [React](https://reactjs.org/) - A JavaScript library for building user interfaces
-   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
-   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
