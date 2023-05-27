import { IconType } from 'react-icons'

interface SidebarItemsProps {
    label: String;
    href?: String;
    icon: IconType
    onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemsProps> = ({
    label,
    href,
    icon: Icon,
    onClick
}) => {
    return (
        <div className='flex flex-row items-center'>
            <div className="relative lg:hidden rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
                <Icon size={28} color='white'></Icon>
            </div>
            <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
                <Icon size={24} color='white'></Icon>
                <p className='hidden lg:block text-white text-xl'>{label}</p>
            </div>
        </div>
    )
}

export default SidebarItem;