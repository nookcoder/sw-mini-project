import { ref, set } from 'firebase/database';
import { appDatabase } from './index';

export async function writeComments(score, comment,type) {
  const id = Date.now().toString(16).toUpperCase();
  return await set(ref(appDatabase, `comments/${type}/${id}`), {
    score: score,
    comment: comment
  });
}
