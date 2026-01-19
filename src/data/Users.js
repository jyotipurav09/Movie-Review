import bcrypt from "bcryptjs"

const hashedAdminPassword = bcrypt.hashSync("@Jyotipurav09", 10)
const hashedUserPassword = bcrypt.hashSync("@Puravjyoti09", 10)



export const Users = [
    {
        id: 1,
        username: "jyoti_kalra",
        email: "jyoti.purav09@gmail.com",
        password: hashedAdminPassword,
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
        username: "purav_budhiraja",
        email: "purav@gmail.com",
        password: hashedUserPassword,
        role: "user",
        firstName: "purav",
        lastName: "budhiraja",
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

    if (bcrypt.compareSync(password, user.password)) {
        const {password: _$4571, ...userWithoutPassword} = user
        return userWithoutPassword
    }
    return null;
};