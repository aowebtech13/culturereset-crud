export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
    is_active: boolean;
    created_at: string;
    updated_at?: string;
    email_verified_at?: string;

}
export type pageProps<
T extends Record<string, unknown> = Record<string, unknown>,
> =T & {
    auth:{
        user: User;
    };

};

