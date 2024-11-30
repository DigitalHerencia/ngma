import { useState } from 'react';

const useMediaUpload = () => {
  const [isUploading, setIsUploading] = useState(false);

  const uploadMedia = async (file: File) => {
    setIsUploading(true);
    try {
      // Logic to handle media upload, e.g., to Cloudinary
      const formData = new FormData();
      formData.append('file', file);
      // Assume an API endpoint is available for media upload
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Media upload failed', error);
    } finally {
      setIsUploading(false);
    }
  };

  return { isUploading, uploadMedia };
};

export default useMediaUpload;
