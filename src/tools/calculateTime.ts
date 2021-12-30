export const calculateTime = (createdAt: string): string => {
  const today = new Date();
  const dateCreated = new Date(Date.parse(createdAt));
  let timeElapsed = today.getTime() - dateCreated.getTime();

  if (timeElapsed / 6e4 < 60) {
    return Math.floor(timeElapsed / 6e4) + ' min ago';
  } else if (timeElapsed / 3.6e6 < 24) {
    return Math.floor(timeElapsed / 3.6e6) + ' hour ago';
  } else if (timeElapsed / 8.64e7 < 365) {
    return Math.floor(timeElapsed / 8.64e7) + ' days ago';
  }

  return Math.floor(timeElapsed / 3.1536e10) + 'y';
};
