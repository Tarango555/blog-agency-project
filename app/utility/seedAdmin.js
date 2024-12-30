import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AdminLoginModel from '../models/AdminLoginModel.js';

dotenv.config(); // Load environment variables

const createInitialAdmin = async () => {
  try {
    await mongoose.connect(process.env.DB_CONN);

    // Environment variables for email and password
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
    const adminPassword = process.env.ADMIN_PASS || 'adminPassword123';
    const adminUsername = process.env.ADMIN_USERNAME || 'admin01';

    // Find if admin exists
    const existingAdmin = await AdminLoginModel.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log('Admin user already exists.');
    } else {
      await AdminLoginModel.create({
        username: adminUsername,
        email: adminEmail,
        password: adminPassword,  // No hashing here
        role: 'admin',
      });

      console.log(`Admin user created successfully with email: ${adminEmail}`);
    }
  } catch (error) {
    console.error('Error creating initial admin:', error);
  } finally {
    mongoose.connection.close();
    process.exit(0);
  }
};

createInitialAdmin();
