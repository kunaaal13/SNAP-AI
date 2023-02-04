# SNAP AI

Hello, I'm Snap AI, a next generation AI image generator. I turn your thoughts into images.

## Tech Stack

**Client:** NextJs, TailwindCSS, Framer motion, Typescript, react-hot-toast, Vanilla Tilt, React-Icons

**Server:** Node, Express, Cloudinary, Open API

**Database:** MongoDB

## Features

- Generate high quality images from prompts.
- Download images.
- Share generated image with community.
- View top images from community.

## Screenshots

### Home Page

![App Screenshot](/images/Home.png)

### Generate Page

![App Screenshot](/images/Generate.png)

### Community Page

![App Screenshot](/images/Community.png)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

**CLIENT**

`NEXT_PUBLIC_API_BASE_URL`

`API_BASE_URL`

**SERVER**

`PORT`

`MONGO_URI`

`OPENAI_API_KEY`

`CLOUDINARY_CLOUD_NAME`

`CLOUDINARY_API_KEY`

`CLOUDINARY_API_SECRET`

## Run Locally

Clone the project

```bash
  https://github.com/kunaaal13/SNAP-AI.git
```

Go to the project directory

```bash
  cd SNAP-AI
```

**Client**

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

**Server**

Go back to root directory

```bash
  cd ./
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
