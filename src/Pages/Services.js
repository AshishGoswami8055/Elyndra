import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore methods
import { db } from "../Firebase/firebaseConfig"; // Import Firebase config
import '../assets/css/Portfolio.scss'
export default function DisplayMedia() {
  const [mediaData, setMediaData] = useState(null); // Store fetched data
  const [loading, setLoading] = useState(true); // To show loading spinner

  // Fetch media data from Firestore when the component is mounted
  useEffect(() => {
    setTimeout(() => {
      console.log("video is playing..");

      const videoElement = document.querySelector('video');
      if (videoElement) {
        videoElement.muted = true;
        videoElement.play();  
      }
    },3000)
  },[])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "mediaData", "uniqueMediaEntry"); // Adjust the document ID as needed
        const docSnap = await getDoc(docRef); // Get the document

        if (docSnap.exists()) {
          setMediaData(docSnap.data()); // Set the fetched data
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <div>Loading...</div>; // Show loading while data is being fetched
  }
 

  
  return (
    <div className="porfolio_banner">
      <h2>Portfolio</h2>
      {mediaData ? (
        <>
          <div className="portfolio_video">
            <video autoplay muted loop>
              <source src={mediaData.videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{mediaData.title}</h3>
          </div>
  
          <div className="portfolio_content">
          {mediaData.imageFields.map((field, index) => {
            if (index % 2 === 1) {
              return (
                <div key={index} className="portfolio_Box">
                  <p>{field.description}</p>
                  <div className="portfolio_img">
                    <img src={field.imageURL} alt={`image-${index + 1}`} />
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="portfolio_Box">
                  <div className="portfolio_img">
                    <img src={field.imageURL} alt={`image-${index + 1}`} />
                  </div>
                  <p>{field.description}</p>
                </div>
              );
            }
          })}

          </div>
        </>
      ) : (
        <p>No media data found.</p>
      )}
    </div>
  );
  
}
