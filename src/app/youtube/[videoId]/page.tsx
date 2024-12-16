'use client'; // Đảm bảo mã này chạy trên client

import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

interface YouTubePageProps {
  params: {
    videoId: string; 
  };
}

const YouTubePage = ({ params }: YouTubePageProps) => {
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    if (params.videoId) {
      setVideoId(params.videoId); 
    }
  }, [params.videoId]); 


  if (!videoId) {
    return <p>Đang tải video...</p>;
  }

  return (
    <Container>
      <h2>Video Chi Tiết</h2>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          src={`https://www.youtube.com/embed/${videoId}`} // Sử dụng videoId từ params
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default YouTubePage;
