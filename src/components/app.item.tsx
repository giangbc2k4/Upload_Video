'use client';
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from "next/link"; 
import { onAuthStateChanged } from "firebase/auth";
import auth from "@/app/sv/firebaseAuth";
import db from "@/app/sv/firestore";
import { collection, deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore";

interface ItemProps {
  videoUrl: string;
  uploaderName: string;
  description: string;
}

const Item = ({ videoUrl, uploaderName, description }: ItemProps) => {
  const [isFavorite, setIsFavorite] = useState(false); 
  const [user, setUser] = useState<any | null>(null); 
  const videoId = videoUrl.split('v=')[1];

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    if (user) {
      const fetchFavorites = async () => {
        try {
          
          const q = query(
            collection(db, "favorites"),
            where("userId", "==", user.uid),
            where("videoId", "==", videoId)
          );
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            setIsFavorite(true);
          } else {
            setIsFavorite(false);
          }
        } catch (error) {
          console.error("Lỗi khi lấy thông tin yêu thích:", error);
        }
      };

      fetchFavorites();
    }
  }, [user, videoId, db]);







  const handleFavoriteClick = async () => {
    if (!user) {
      console.log("Người dùng chưa đăng nhập");
      return;
    }

    const favoriteRef = doc(collection(db, "favorites"));

    if (isFavorite) {
     
      try {
        const q = query(
          collection(db, "favorites"),
          where("userId", "==", user.uid),
          where("videoId", "==", videoId)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref); 
        });
        setIsFavorite(false); 
        console.log("Đã bỏ yêu thích");
      } catch (error) {
        console.error("Lỗi khi bỏ yêu thích:", error);
      }
    } else {
    
      try {
        await setDoc(favoriteRef, {
          videoId,
          userId: user.uid,
          timestamp: new Date(),
        });
        setIsFavorite(true); 
        console.log("Đã thêm vào yêu thích");
      } catch (error) {
        console.error("Lỗi khi thêm yêu thích:", error);
      }
    }
  };

  return (
    <Container>
      <Card style={{ width: '18rem' }}>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Card.Body>
          <Card.Title>Người đăng: {uploaderName}</Card.Title>
          <Card.Text>{description}</Card.Text>
          
          
          <Link href={`/youtube/${videoId}`} passHref>
            <Button variant="primary" style={{ display: 'block', marginBottom: '10px' }}>
              Xem chi tiết
            </Button>
          </Link>

          {user && (
            <Button 
              variant={isFavorite ? 'danger' : 'outline-primary'} 
              onClick={handleFavoriteClick} 
              style={{
                display: 'block',  
                marginTop: '10px',
                transition: 'background-color 0.3s, color 0.3s', 
              }}>
              {isFavorite ? 'Bỏ yêu thích' : 'Thêm vào yêu thích'}
            </Button>
          )}
          
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Item;
