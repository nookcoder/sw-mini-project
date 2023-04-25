import { ref, set } from 'firebase/database';
import { appDatabase } from './index';

export function writeUserData() {
  set(ref(appDatabase, 'users'), {
    test: 'test',
  });
}
