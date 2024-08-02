export const getFirstLetter = (name) => {
    if (!name) return '';
    const firstName = name.split(' ')[0];
    return firstName.charAt(0).toUpperCase();
  };