import { useContext, useState, ChangeEvent } from "react";
import { BooksContext } from "../../context/BooksContext";
import { AppContext } from "../../context/AppContext";
import { Dropdown } from "../atoms/Dropdown";
import { Theme, View } from "../../@types/types";
import { Input } from "../atoms/Input";

interface IProps {
  className?: string;
}

export function BooksMenu({ className }: IProps) {
  const { setView, view, filterBooks } = useContext(BooksContext);
  const { changeTheme, currentTheme } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState<string>("");

  function searchBooks(event: ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setSearchValue(value);
    filterBooks(value);
  }

  return (
    <>
      <div className={`row ${className}`}>
        <div className="offset-8 offset-md-9 col-4 col-md-3 mb-3">
          <Dropdown
            value={currentTheme}
            items={[
              {
                label: "Light mode",
                value: Theme.LIGHT_MODE,
              },
              {
                label: "Dark mode",
                value: Theme.DARK_MODE,
              },
            ]}
            onChange={changeTheme}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-4 col-md-3">
          <Dropdown
            value={view}
            items={[
              {
                label: "Card View",
                value: View.CARD,
              },
              {
                label: "List View",
                value: View.LIST,
              },
            ]}
            onChange={setView}
          />
        </div>
        <div className="col-8 col-md-9">
          <Input
            className="ml-3"
            name="search"
            value={searchValue}
            onChange={searchBooks}
            placeholder="Search books"
          />
        </div>
      </div>
    </>
  );
}
