import { PropsWithChildren } from 'react';
import { useOutsideClick } from '../../hook/useOutsideClick';

interface DrawerProps {
  isOpen: boolean;
  className?: string;
  setIsOpen: (isOpen: boolean) => void;
}
const Drawer = ({
  isOpen,
  className,
  setIsOpen,
  children,
}: DrawerProps & PropsWithChildren) => {
  const ref = useOutsideClick(() => setIsOpen(false));
  return (
    isOpen && (
      <div className="absolute top-0 left-0 bg-gray-300 bg-opacity-50 w-full h-full">
        <div ref={ref} className={`absolute bottom-0 w-full ${className}`}>
          {children}
        </div>
      </div>
    )
  );
};

export default Drawer;
