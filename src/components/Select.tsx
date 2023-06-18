import { Data } from "@/lib/data";
import {
  FilterMultiSelect,
  Selection,
  getSelectedOptionLabels,
} from "@kaizen/select";

export type Props = {
  items: Array<Data>;
  selectedKeys: Selection;
  onChange: (keys: Selection) => void;
};

export default function Select({ items, selectedKeys, onChange }: Props) {
  const handleSelectionChange = (keys: Selection): void => onChange(keys);

  return (
    <div className="flex">
      <FilterMultiSelect
        onSelectionChange={handleSelectionChange}
        selectedKeys={selectedKeys}
        items={items}
        label={"Select users"}
        trigger={(): JSX.Element => (
          <FilterMultiSelect.TriggerButton
            selectedOptionLabels={getSelectedOptionLabels(selectedKeys, items)}
            label="Select users"
          />
        )}
      >
        {(): JSX.Element => (
          <>
            <FilterMultiSelect.ListBox>
              {({ allItems, hasNoItems }): JSX.Element | JSX.Element[] => {
                if (hasNoItems) {
                  return (
                    <FilterMultiSelect.NoResults>
                      No results found.
                    </FilterMultiSelect.NoResults>
                  );
                }
                return allItems.map((item) => (
                  <FilterMultiSelect.Option key={item.key} item={item} />
                ));
              }}
            </FilterMultiSelect.ListBox>
            <FilterMultiSelect.MenuFooter>
              <FilterMultiSelect.SelectAllButton />
              <FilterMultiSelect.ClearButton />
            </FilterMultiSelect.MenuFooter>
          </>
        )}
      </FilterMultiSelect>
    </div>
  );
}
