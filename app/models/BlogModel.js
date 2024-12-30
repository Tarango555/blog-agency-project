import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  content: { type: String, required: true },
  image: { type: String, default: '' }, // Optional: To store image URL
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminLogin', required: true },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' }, // To handle blog status
}, 
{
  timestamps: true,   // Automatically adds createdAt and updatedAt
  versionKey: false    // Removes __v field
});

// Create the Blog model using the schema
const BlogModel = mongoose.model('Blog', BlogSchema);

export default BlogModel;