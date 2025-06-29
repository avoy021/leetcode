let allowedOrigins = ['http://localhost:5173','http://127.0.0.1:5173','http://localhost:3000','https//accounts.google.com'];

const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    // origin: 'http://127.0.0.1:5173',
    credentials: true,
    optionsSuccessStatus: 200
}

export default corsOptions;