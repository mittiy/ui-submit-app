import { useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Checkbox, Grid, Button, HStack } from "@chakra-ui/react";

const ExampleAccordionPage = () => {
    // ハードコーディングされたデータ
    const regions = [
        { category: "関東", options: ["東京", "神奈川", "千葉", "埼玉"] },
        { category: "東北", options: ["青森", "岩手", "宮城", "秋田"] },
        { category: "中部", options: ["愛知", "静岡", "長野", "岐阜"] },
        { category: "近畿", options: ["大阪", "京都", "兵庫", "奈良"] },
    ];

    // チェックボックスの状態を管理
    const [checkedItems, setCheckedItems] = useState(
        regions.reduce((acc, region) => {
            acc[region.category] = new Array(region.options.length).fill(false);
            return acc;
        }, {})
    );

    // チェックボックスの状態を変更する関数
    const handleCheckboxChange = (region, index) => {
        setCheckedItems((prevState) => ({
            ...prevState,
            [region]: prevState[region].map((item, idx) => (idx === index ? !item : item)),
        }));
    };

    // クリアボタンの処理（全てのチェックを外す）
    const clearAll = () => {
        setCheckedItems(
            regions.reduce((acc, region) => {
                acc[region.category] = new Array(region.options.length).fill(false);
                return acc;
            }, {})
        );
    };

    // 検索ボタンの処理（選択された項目を取得して表示）
    const handleSearch = () => {
        const selectedItems = [];
        regions.forEach((region) => {
            region.options.forEach((option, idx) => {
                if (checkedItems[region.category][idx]) {
                    selectedItems.push(option);
                }
            });
        });

        // 選択された項目をコンソールまたはアラートで表示
        if (selectedItems.length > 0) {
            console.log("選択された項目:", selectedItems);
            alert(`選択された項目: ${selectedItems.join(", ")}`);
        } else {
            alert("選択された項目がありません。");
        }
    };

    return (
      <Box width="400px" mx="auto">
        {" "}
        {/* 横幅を固定し、中央揃え */}
        <Accordion allowToggle>
          {regions.map((region, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {region.category}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                  {region.options.map((option, idx) => (
                    <Checkbox
                      key={idx}
                      isChecked={checkedItems[region.category][idx]}
                      onChange={() =>
                        handleCheckboxChange(region.category, idx)
                      }
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

                        },
                      }}
                    >
                      {option}
                    </Checkbox>
                  ))}
                </Grid>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <HStack spacing={4} mt={4}>
          <Button
            width="100px" // 横幅を指定
            bg="white"
            color="gray.700"
            border="1px solid"
            borderColor="gray.700"
            _hover={{ bg: "gray.100" }}
            onClick={clearAll}
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
            検索する
          </Button>
        </HStack>
      </Box>
    );
};

export default ExampleAccordionPage;