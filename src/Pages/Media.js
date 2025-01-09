import React, { useState } from "react";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore"; // Import doc and setDoc
import { db } from "../Firebase/firebaseConfig"; // Import your Firebase config
import "../assets/css/Media.scss";

export default function Media() {
  const [formData, setFormData] = useState({
    title: "",
    video: null,
    imageFields: [{ image: null, description: "" }],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({}); // For tracking validation errors

  // Handle input change (text inputs like title, description)
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "title") {
      setFormData({ ...formData, title: value });
    } else if (name === "description") {
      const updatedFields = [...formData.imageFields];
      updatedFields[index].description = value;
      setFormData({ ...formData, imageFields: updatedFields });
    }
  };

  // Handle file change (for video and images)
  const handleFileChange = (e, index) => {
    const { name, files } = e.target;
    if (name === "video") {
      setFormData({ ...formData, video: files[0] });
    } else if (name === "image") {
      const updatedFields = [...formData.imageFields];
      updatedFields[index].image = files[0];
      setFormData({ ...formData, imageFields: updatedFields });
    }
  };

  // Upload file to Cloudinary
  const uploadToCloudinary = async (file, type) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "video_Imgs");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/deqk0pnrq/${type}/upload`,
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw error;
    }
  };

  // Add more image fields
  const handleAddImage = () => {
    setFormData({
      ...formData,
      imageFields: [...formData.imageFields, { image: null, description: "" }],
    });
  };

  // Remove an image field
  const handleRemoveImage = (index) => {
    const updatedFields = formData.imageFields.filter((_, i) => i !== index);
    setFormData({ ...formData, imageFields: updatedFields });
  };

  // Validate the form data
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required.";
    if (!formData.video) newErrors.video = "Video is required.";
    formData.imageFields.forEach((field, index) => {
      if (!field.image) newErrors[`image_${index}`] = `Image ${index + 1} is required.`;
      if (!field.description) newErrors[`description_${index}`] = `Description for Image ${index + 1} is required.`;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop submission if validation fails

    setIsSubmitting(true);

    try {
      // Upload video to Cloudinary
      const videoURL = await uploadToCloudinary(formData.video, "video");

      // Upload images and get their URLs
      const imageURLs = await Promise.all(
        formData.imageFields.map(async (field) => {
          if (field.image) {
            const imageURL = await uploadToCloudinary(field.image, "image");
            return imageURL;
          }
        })
      );

      // Save the form data to Firebase Firestore
      const docRef = doc(db, "mediaData", "uniqueMediaEntry"); // Specify a unique document ID
      await setDoc(docRef, {
        title: formData.title,
        videoURL,
        imageFields: formData.imageFields.map((field, index) => ({
          imageURL: imageURLs[index], // image URL from Cloudinary
          description: field.description,
        })),
        updatedAt: new Date(), // Optional: Track the last update timestamp
      });

      alert("Data saved successfully!");
      // Reset form after submission
      setFormData({
        title: "",
        video: null,
        imageFields: [{ image: null, description: "" }],
      });
      setErrors({}); // Clear errors
    } catch (error) {
      console.error("Error uploading files or saving data:", error);
      alert("Something went wrong! Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="app-container">
      <h2>Upload Media</h2>
      <form onSubmit={handleSubmit} className="media-form">
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title Here"
            required
          />
          {errors.title && <p className="error-text">{errors.title}</p>}
        </div>

        <div>
          <label>Upload Video:</label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={(e) => handleFileChange(e, 0)}
            required
          />
          {errors.video && <p className="error-text">{errors.video}</p>}
        </div>

        {formData.imageFields.map((field, index) => (
          <div key={index}>
            <div>
              <label>Upload Image {index + 1}:</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => handleFileChange(e, index)}
                required
              />
              {errors[`image_${index}`] && (
                <p className="error-text">{errors[`image_${index}`]}</p>
              )}
            </div>
            <div>
              <label>Image {index + 1} Description:</label>
              <input
                type="text"
                name="description"
                value={field.description}
                onChange={(e) => handleInputChange(e, index)}
                placeholder={`Image ${index + 1} Description`}
                required
              />
              {errors[`description_${index}`] && (
                <p className="error-text">{errors[`description_${index}`]}</p>
              )}
            </div>
            <button type="button" onClick={() => handleRemoveImage(index)}>
              Remove Image {index + 1}
            </button>
          </div>
        ))}

        <button type="button" onClick={handleAddImage}>
          Add Another Image
        </button>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
