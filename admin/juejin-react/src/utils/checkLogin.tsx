export default function checkLogin(): boolean {
    return localStorage.getItem('userStatus') === 'login';
}
