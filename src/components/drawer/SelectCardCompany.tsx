import { COMPANY_INFO } from '../../constants/companyInfo';
import Drawer from './Drawer';

interface SelectCardCompanyProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectCallback: (cardCompany: string, cardColor: string) => void;
}
const SelectCardCompany = ({
  isOpen,
  setIsOpen,
  selectCallback,
}: SelectCardCompanyProps) => {
  const handleSelect = (cardCompany: string, cardColor: string) => {
    selectCallback(cardCompany, cardColor);
    setIsOpen(false);
  };
  return (
    <Drawer
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      //  className="bg-white  grid grid-cols-4 p-7 gap-5"
      style={{
        backgroundColor: 'white',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        padding: '1.25rem',
        gap: '0.75rem',
        boxSizing: 'border-box',
      }}
    >
      {COMPANY_INFO.map((company, idx) => (
        <button
          key={idx}
          onClick={() => handleSelect(company.name, company.color)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '5rem',
            border: 'none',
            backgroundColor: 'transparent',
          }}
        >
          <div
            style={{
              width: '2.25rem',
              aspectRatio: '1/1',
              borderRadius: '50%',
              backgroundColor: company.color,
            }}
          ></div>
          <span style={{ marginTop: '0.75rem' }}>{company.name}</span>
        </button>
      ))}
    </Drawer>
  );
};

export default SelectCardCompany;
