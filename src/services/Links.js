import { LiaUserFriendsSolid } from 'react-icons/lia'
import { FaUserPlus } from 'react-icons/fa'

export const friendsLinks = [
    {
        label: 'Home',
        link: '/friends',
        icon: <LiaUserFriendsSolid />
    },
    {
        label: 'Friends Request',
        link: '/friends/lists',
        icon: <FaUserPlus />
    },
    {
        label: 'Suggestions',
        link: '/friends/suggestions',
        icon: <FaUserPlus />
    },
    {
        label: 'Following',
        link: '/friends/following',
        icon: <FaUserPlus />
    },
    {
        label: 'Friends',
        link: '/friends/my-friends',
        icon: <FaUserPlus />
    },
]