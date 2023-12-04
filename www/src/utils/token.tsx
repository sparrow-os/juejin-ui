export const SPARROW_TOKEN = "sparrow_token";

export function getToken() {
    return localStorage.getItem(SPARROW_TOKEN);
}

export function saveToken(token: string) {
    localStorage.setItem(SPARROW_TOKEN, token);
}