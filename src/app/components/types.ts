export type userType = {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    refresh: string;
};

export type trackType = {
    isFavorite?: boolean;
    id: number;
    name: string;
    author: string;
    release_date: string;
    genre: string;
    duration_in_seconds: number;
    album: string;
    logo: string | null;
    track_file: string;
    stared_user: userType[];
    onClick: () => void;
};
