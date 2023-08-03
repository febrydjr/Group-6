import { Select } from "@chakra-ui/react";

const styleOptions = {
    w: "100px",
    // color: "black",
    textTransform: "capitalize",
};

const filters = ["name", "price"];

function FilterSelection({ setFilter, setPage }) {
    function onChangeFilter(event) {
        setFilter(event.target.value);
        setPage(0);
    }

    return (
        <Select {...styleOptions} onChange={onChangeFilter}>
            {filters.map((option, index) => (
                <option color="black" value={option} key={index}>
                    {option}
                </option>
            ))}
        </Select>
    );
}

export default FilterSelection;
