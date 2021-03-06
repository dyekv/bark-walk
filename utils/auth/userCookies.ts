import cookies from 'js-cookie';
import { User } from '../../model/user';

// cookieからユーザー情報を取得
export const getUserFromCookie = (): User => {
  const cookie = cookies.get('auth');
  if (!cookie) {
    return;
  }
  return JSON.parse(cookie);
};

// cookieにユーザー情報を追加
export const setUserCookie = (user: User): void => {
  cookies.set('auth', user, {
    // firebase id tokens expire in one hour
    // set cookie expiry to match
    expires: 1 / 24,
  });
};

// cookieから認証方法を削除
export const removeUserCookie = (): void => cookies.remove('auth');
