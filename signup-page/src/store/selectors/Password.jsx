import { selector } from "recoil";
import { UserConfirmPassword, UserPassword } from "../atoms/Signup-Form";

export const PasswordSecurity = selector({
    key: 'PasswordSecurity',
    get: ({ get }) => { 
        const password = get(UserPassword);
        const criteria = [
            {
                label: "Atleast 8 Characters",
                met: password.length >= 8
            },
            {
                label: "lowercase",
                met: /[a-z]/.test(password)
            },
            {
                label: "UPPERCASE",
                met: /[A-Z]/.test(password)
            },
            {
                label: "Special Characters",
                met:/[!@#$%^&*(),.?":{}|<>]/.test(password)
            },
            {
                label: "Numbers",
                met:/[1-9]/.test(password)
            }
        ]
        return criteria;
    }
})

export const CheckConfirmPassword = selector({
    key: 'CheckConfirmPassword',
    get: ({ get }) => { 
        const password = get(UserPassword);
        const confirmPassword = get(UserConfirmPassword);

        return password === confirmPassword ? true : false;
    }
})