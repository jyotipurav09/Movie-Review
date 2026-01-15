

export const Users = [
    {
        id: 1,
        username: "jyoti_kalra",
        email: "jyoti.purav09@gmail.com",
        password: "@Jyotipurav09",
        role: "admin",
        firstName: "jyoti",
        lastName: "kalra",
        dob: null,
        profilePhoto: null,
        instagram: null,
        youtube: null,
        createdAt: "2025-01-015T00:00:00.000Z"
    },
    {
        id: 2,
        username: "jyoti_rani",
        email: "jyoti@gmail.com",
        password: "@Jyotipurav9",
        role: "user",
        firstName: "jyoti",
        lastName: "rani",
        dob: null,
        profilePhoto: null,
        instagram: null,
        youtube: null,
        createdAt: "2025-01-15T00:00:00.000Z"
    }
];

export const checkEmail = (email) => {
    return Users.find(user => user.email === email);
};

export const checkData = (email, password) => {
    const user = checkEmail(email);
    if (!user) return null;
    if (user.password === password) {

        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    return null;
};