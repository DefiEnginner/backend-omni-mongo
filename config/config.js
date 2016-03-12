require('dotenv').config(); //instatiate environment variables

CONFIG = {} //Make this global to use all over the application

CONFIG.app = process.env.APP || 'development';
CONFIG.port = process.env.PORT || '8081';

CONFIG.db_dialect = process.env.DB_DIALECT || 'mongo';
CONFIG.db_host = process.env.DB_HOST || '';
CONFIG.db_ip = process.env.DB_IP || 'hi@12.345.678.910'
CONFIG.db_port = process.env.DB_PORT || '27017';
CONFIG.db_name = process.env.DB_NAME || 'name';
CONFIG.db_user = process.env.DB_USER || 'root';
CONFIG.db_password = process.env.DB_PASSWORD || 'db-password';
CONFIG.mongo_uri = process.env.MONGO_URI || 'mongo-uri';

CONFIG.mailgun_username = process.env.MAILGUN_USERNAME || 'username';
CONFIG.mailgun_password = process.env.MAILGUN_PASSWORD || 'password';
CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION || 'jwt_please_change';
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || '10000';

CONFIG.stripe_public_key = process.env.STRIPE_PUBLIC_KEY || 'stripe_public_key';
CONFIG.stripe_secret_token = process.env.STRIPE_SECRET_TOKEN || 'stripe_secret_token';

CONFIG.frontend_url = process.env.FRONTEND_URL || 'http://localhost:3000';

CONFIG.twilio_number = process.env.TWILIO_NUMBER
CONFIG.twilio_auth_token = process.env.TWILIO_AUTH_TOKEN
CONFIG.twilio_sid = process.env.TWILIO_SID


CONFIG.slack_client_id=process.env.SLACK_CLIENT_ID
CONFIG.slack_client_secret=process.env.SLACK_CLIENT_SECRET
CONFIG.slack_redirect_uri=process.env.SLACK_REDIRECT_URI