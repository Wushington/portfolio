const getAge = () => {
    const today = new Date();
    const bd = new Date(2002, 3, 10); // April 10, 2002... This is not my real birthday :)
    let age = today.getFullYear() - bd.getFullYear();
    const monthDiff = today.getMonth() - bd.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < bd.getDate())) {
        age--;
    }
    return age;
}

export const AGE = getAge();