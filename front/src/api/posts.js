// 학습노트 crud api
import { posts } from './index';

// 학습 노트 데이터 조회 api
function fetchPosts() {
  return posts.get('/');
}

// 특정 학습 노트 데이터 조회 api
function fetchPost(postId) {
  return posts.get(postId);
}

// 학습 노트 작성 api
function createPost(postData) {
  return posts.post('/', postData);
}

// 학습 노트 삭제 api
function deletePost(postId) {
  return posts.delete(postId);
}

// 학슴 노트 데이터 수정 api
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
