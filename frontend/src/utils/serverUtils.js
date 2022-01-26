export const getToken = () =>
{
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return userInfo.token
}