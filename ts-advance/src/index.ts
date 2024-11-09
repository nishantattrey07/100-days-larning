interface User { 
    username: string;
    age: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
    profilePicture: string;
    coverPicture: string;
}

type userProfile = Pick<User, 'username' | 'email'>
type userCredentials = Pick<User, 'username' | 'password'>

const displayUserProfile = (user: userProfile) => { 
    console.log(user.username,"has this ",user.email);
    
}

displayUserProfile({username:"nishant",email:"exmpale@.com"})