import { ref, set } from 'firebase/database';
import { appDatabase } from './index';

export async function writeComments(score, comment) {
  const id = Date.now().toString(16).toUpperCase();
  return await set(ref(appDatabase, `comments/${id}`), {
    score: score,
    comment: comment
  });
}
