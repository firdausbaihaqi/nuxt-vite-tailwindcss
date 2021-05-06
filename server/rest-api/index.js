import bodyParser from 'body-parser';
import express from 'express';
import posts from './routes/posts';

// Create express instance
const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Import API Routes
app.use('/posts', posts);

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });
}

// Export express app
export default app;
