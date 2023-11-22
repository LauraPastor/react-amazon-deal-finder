<!--Tired of blackfriday thingy? I encourage you to have a walk with your loved ones but in case you really need to buy something you can scrap the big fish, Amazon 
https://oxylabs.go2cloud.org/SH2P
-->

# React Amazon deal finder

Application Web Scrapper to flind the BIGGEST deals to flip on Amazon.de €€€.
This project was created with a boiler plate with [npx create-react-app react-amazon-deal-finder].

## Overview
Tired of blackfriday? I encourage you to have a walk with your loved ones instead but in case you really need to buy something you can scrap the big fish, Amazon.
This project is a web application built with React on the frontend and a Node.js server on the backend.

## Features

- **Dynamic Deals list:** Keep track of the best deals of the day on the list.
- **User-Friendly Interface:** Intuitive and easy-to-use interface for a seamless shopping experience.
- **Amazon:** Leverage the power of Amazon catalog for generating the list.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [React](https://reactjs.org/) installed
- Oxylabs credentials (Sign up at [Oxylabs](https://oxylabs.go2cloud.org/SH2P) to get your username and password)
- You can also choose which domain you need (might be Amazon.com instead) and also there other webs to scrap.

## Setup

### Backend (Node.js Server)
1. Clone the repository:
```sh
git clone https://github.com/your-username/react-amazon-deal-finder.git
```
2. Navigate to the server directory:
```bash
cd react-amazon-deal-finder/server
```
3. Install dependencies:
```bash
npm install
```
4. Create a .env file in the server directory and add your OpenAI API key:
```env
USERNAME=username
PASSWORD=password
```
5. Start the server:
```bash
npm run start:backend
```
The server will run on http://localhost:8000.

### Frontend (React App)
1. Navigate to the client directory:
```bash
cd react-amazon-deal-finder/
```
2. Install dependencies:
```bash
npm install
```
3. Start the React app:
```bash
npm run start:frontend
```

## Usage

1. Visit http://localhost:3000 in your browser.
2. Have a look to the deals from the best on the top one.

## Contributions
There are currently some disabled button for scrapping pages like AliExpress, eBay or Etsy

## Enjoy!
<img src="https://github.com/LauraPastor/react-amazon-deal-finder/blob/master/src/assets/deal.png" />