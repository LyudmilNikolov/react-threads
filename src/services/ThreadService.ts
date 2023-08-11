const jsonURL = '/data.json';

export const getThreads = async () => {
    const response = await fetch(jsonURL);
    const data = await response.json();
    return data['threads'];
}