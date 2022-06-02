import { AiFillHome } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { BsGraphUp, BsFillCalendarFill, BsFillChatLeftTextFill, BsGearFill } from 'react-icons/bs';

export const sidebarData = [
    {
        title: 'Home',
        icon: <AiFillHome />,
        link: '/home',
    },
    {
        title: 'Messages',
        icon: <IoMdMail />,
        link: '/messages',
    },
    {
        title: 'Reports',
        icon: <BsGraphUp />,
        link: '/reports',
    },
    {
        title: 'Calendar',
        icon: <BsFillCalendarFill />,
        link: '/calendar',
    },
    {
        title: 'Chat',
        icon: <BsFillChatLeftTextFill />,
        link: '/chat',
    },
    {
        title: 'Settings',
        icon: <BsGearFill />,
        link: '/settings',
    }
]