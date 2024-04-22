import "./withType.css";

type ProfileProps = {
    username: string;
    description: string;
    role: "admin" | "user";
    border?: boolean;
};

const Profile = (props: ProfileProps) => {
    let className = `profile ${props.role}-profile`;
    if (props.border) className += " border";

    return (
        <div className={className}>
            <h1>{props.username}</h1>
            <p>Description : {props.description}</p>
        </div>
    );
};

export default Profile;
