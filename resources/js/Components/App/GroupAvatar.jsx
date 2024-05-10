import {UsersIcon} from "@heroicons/react/16/solid";

const GroupAvatar = ({}) => {
    return (
        <>
        <div className={`avatar.placeholder`}>
            <div className={`bg-gray-400 text-gray-800 rounded-full w-8`}>
                <span className="text-xl">
                    <UsersIcon className="w-8" />
                </span>
            </div>
        </div>
        </>
    );
};

export default GroupAvatar;