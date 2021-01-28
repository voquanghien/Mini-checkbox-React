const CheckboxSingle = (checkboxSingle) => {
    const { row, column, setCheckboxVal } = checkboxSingle;

    return (
        <div key={column} className="checkbox-container">
            <input type="checkbox" onInput={e => setCheckboxVal(row, column, e.target.checked)}></input>
        </div>
    );
}

export default CheckboxSingle;