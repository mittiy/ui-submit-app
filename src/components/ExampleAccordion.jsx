import { useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Checkbox, Grid, Button } from "@chakra-ui/react";

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

    return (
        <Box width="400px" mx="auto"> {/* 横幅を固定し、中央揃え */}
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
                                        onChange={() => handleCheckboxChange(region.category, idx)}
                                    >
                                        {option}
                                    </Checkbox>
                                ))}
                            </Grid>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
            <Button colorScheme="red" mt={4} onClick={clearAll}>
                クリア
            </Button>
        </Box>
    );
};

export default ExampleAccordionPage;