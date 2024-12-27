import { PropsWithChildren } from 'react';
import { useOutsideClick } from '../../hook/useOutsideClick';

interface DrawerProps {
  isOpen: boolean;
  style?: React.CSSProperties;
  setIsOpen: (isOpen: boolean) => void;
}
const Drawer = ({
  isOpen,
  style,
  setIsOpen,
  children,
}: DrawerProps & PropsWithChildren) => {
  const ref = useOutsideClick(() => setIsOpen(false));
  return (
    isOpen && (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <div
          ref={ref}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            ...style,
          }}
        >
          {children}
        </div>
      </div>
    )
  );
};

export default Drawer;
