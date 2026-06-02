import DropbazLogo from "./logo";

const Header = () => {
  return (
    <header className="w-full h-14 flex items-center justify-center mb-8">
      <DropbazLogo width={90} className="text-stone-800 dark:text-stone-200" />
    </header>
  );
};

export default Header;
