# Link for Website: 
resq-bridge.vercel.app

# ResQ Bridge

ResQ Bridge is an emergency response web application designed to connect people in distress with nearby responders quickly and efficiently. The platform allows users to send SOS signals with location data and voice messages, ensuring timely and effective emergency assistance.

## Features

- **Real-time Location Detection**: Automatically captures user’s GPS location when an SOS is triggered.
- **Voice Message Recording**: Captures a short audio message to provide context on the emergency.
- **Emergency Types**: Users can specify the type of emergency — medical, fire, security threat, or accident.
- **Efficient Response System**: Assigns emergency reports to the nearest available responders.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Express.js, MongoDB
- **Real-time Communication**: WebSockets
- **Location Services**: HTML5 Geolocation API
- **Audio Capture**: MediaRecorder API

## Setup Instructions

1. **Clone the repository:**

```bash
 git clone https://github.com/yourusername/resq-bridge.git
 cd resq-bridge
```

2. **Install dependencies:**

```bash
 npm install
```

3. **Set up environment variables:**

Create a `.env` file and add your configuration:

```env
MONGO_URI=your_mongodb_uri
PORT=5000
```

4. **Run the development server:**

```bash
 npm run dev
```

5. **Access the app:**

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### User Routes
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Authenticate a user

### Emergency Routes
- `POST /api/emergency/report` - Submit an SOS report
- `GET /api/emergency/:id` - Get details of an emergency report

## Contributing

We welcome contributions! Please fork the repo and create a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

For any issues or feature requests, please open an [issue](https://github.com/yourusername/resq-bridge/issues).

