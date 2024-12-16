'use client';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Button, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import db from '@/app/sv/firestore'; 
import auth from '@/app/sv/firebaseAuth';

const UserPosts = () => {
  const [user, setUser] = useState<any | null>(null); 
  const [posts, setPosts] = useState<any[]>([]); 

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  
  useEffect(() => {
    const fetchPostsByUser = async () => {
      if (user && user.email) {
        try {
          const q = query(collection(db, 'posts'), where('email', '==', user.email));
          const querySnapshot = await getDocs(q);
          const postsArray: any[] = [];
          
          querySnapshot.forEach((doc) => {
            postsArray.push({ ...doc.data(), id: doc.id }); 
          });

          setPosts(postsArray); 
        } catch (error) {
          console.error('Lỗi khi lấy bài đăng:', error);
        }
      } else {
        console.error('Email người dùng không hợp lệ');
      }
    };

    if (user) {
      fetchPostsByUser();
    }
  }, [user]); 


  const handleDeletePost = async (postId: string) => {
    try {
      const postRef = doc(db, 'posts', postId);
      await deleteDoc(postRef); 

      
      setPosts(posts.filter(post => post.id !== postId)); 
    } catch (error) {
      console.error('Lỗi khi xóa bài đăng:', error);
    }
  };

  return (
    <Container>
      <h2>Bài đăng của {user?.email}</h2>
      <ListGroup>
        {posts.length > 0 ? (
          posts.map((post) => (
            <ListGroupItem key={post.id}>
              <h5>{post.description}</h5>
              <a href={post.link} target="_blank" rel="noopener noreferrer">{post.link}</a>
              <Button variant="danger" onClick={() => handleDeletePost(post.id)}>Xóa</Button>
            </ListGroupItem>
          ))
        ) : (
          <p>Không có bài đăng nào.</p>
        )}
      </ListGroup>
    </Container>
  );
};

export default UserPosts;
