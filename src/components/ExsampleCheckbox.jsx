import { Checkbox, Stack, Button, HStack } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import { useState } from 'react';

// チェックボックスの項目を定義
const checkboxItems = [
  { name: "sales", jpName: "営業系" },
  { name: "retail", jpName: "販売系" },
  { name: "marketing", jpName: "企画、マーケティング系" }
];

const ExampleCheckboxPage = () => {
    return <ExampleCheckbox items={checkboxItems} />;
};

const ExampleCheckbox = ({ items, ...props }) => {
    // チェックボックスの選択状態を管理
    const [checkedItems, setCheckedItems] = useState(
        items.reduce((acc, item) => {
            acc[item.name] = false;
            return acc;
        }, {})
    );

    // チェックボックスの変更ハンドラー
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setCheckedItems({
            ...checkedItems,
            [value]: checked,
        });
    };

    // クリアボタンのクリックハンドラー
    const handleClear = () => {
        const resetItems = Object.keys(checkedItems).reduce((acc, key) => {
            acc[key] = false;
            return acc;
        }, {});
        setCheckedItems(resetItems);
    };

    // 検索ボタンのクリックハンドラー
    const handleSearch = () => {
        const selectedItems = items.filter(item => checkedItems[item.name]);
        const searchKeywords = selectedItems.map(item => item.name);

        // 検索キーワードを使って検索を実行（ここではコンソールに出力）
        console.log("検索キーワード:", searchKeywords.join(" "));
        alert(`検索キーワード: ${searchKeywords.join(" ")}`);
        // 実際の検索処理をここに実装する
    };

    return (
      <Stack spacing={3} direction="column">
        {items.map((item, index) => (
          <Checkbox
            key={index}
            value={item.name}
            isChecked={checkedItems[item.name]}
            onChange={handleCheckboxChange}
            sx={{
              ".chakra-checkbox__control": {
                width: "24px",
                height: "24px",
                borderColor: "gray.400",
                borderRadius: "4px",
                _checked: {
                  bg: "white",
                  borderColor: "gray.500",
                  color: "orange.500",
                },
              },
              ".chakra-checkbox__label": {
                fontSize: "18px",
                color: "gray.700",
                fontWeight: "bold",
              },
            }}
            {...props}
          >
            {item.jpName}
          </Checkbox>
        ))}
        {/* ボタンを横並びに配置 */}
        <HStack spacing={4}>
          <Button
            width="100px" // 横幅を指定
            bg="white"
            color="gray.700"
            border="1px solid"
            borderColor="gray.700"
            _hover={{ bg: "gray.100" }}
            onClick={handleClear}
          >
            クリア
          </Button>
          <Button
            width="200px" // 横幅を指定
            bgGradient="linear(to-r, blue.500, green.500)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, blue.600, green.600)",
            }}
            onClick={handleSearch}
          >
            検索
          </Button>
        </HStack>
      </Stack>
    );
};

// PropTypesによる型定義
ExampleCheckbox.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            jpName: PropTypes.string.isRequired
        })
    ).isRequired
};

export default ExampleCheckboxPage;