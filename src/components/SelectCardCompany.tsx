import { COMPANY_INFO } from '../constants/companyInfo';
import { useOutsideClick } from '../hook/useOutsideClick';

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
  const ref = useOutsideClick(() => setIsOpen(false));

  const handleSelect = (cardCompany: string, cardColor: string) => {
    selectCallback(cardCompany, cardColor);
    setIsOpen(false);
  };
  return (
    isOpen && (
      <div className="absolute bg-gray-300 bg-opacity-50 w-full h-full">
        <div
          ref={ref}
          className="absolute bottom-0 bg-white w-full grid grid-cols-4 p-7 gap-5"
        >
          {COMPANY_INFO.map((company, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(company.name, company.color)}
              className="flex flex-col items-center justify-center w-full h-20"
            >
              <div
                className="w-9 aspect-square rounded-full"
                style={{ backgroundColor: company.color }}
              ></div>
              <span className="mt-3">{company.name}</span>
            </button>
          ))}
        </div>
      </div>
    )
  );
};

export default SelectCardCompany;
