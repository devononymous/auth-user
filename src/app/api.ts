export interface UserData {
    username: string;
    role: string;
}

export const fetchUserData = async (): Promise<UserData> => {
    const response = await fetch("https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/");
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data: UserData = await response.json();
    return data;
};
