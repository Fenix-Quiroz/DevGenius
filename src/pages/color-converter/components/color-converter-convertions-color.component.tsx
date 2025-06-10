import { ColorConversion, ColorFormat } from "../color-converter.model";
import { Tabs, Tab } from "@heroui/tabs";
import classes from "./color-converter-convertions-color.component.module.css";
import React, { useState } from "react";
import { UiCopyButton } from "@/components";
interface Props {
  colorConversions: ColorConversion[];
}
export const ColorConverterConvertionsColor = (props: Props) => {
  const { colorConversions } = props;
  const [activeTab, setActiveTab] = useState<ColorFormat>(
    colorConversions[0]?.type
  );

  const onSelectChange = (key: React.Key) => {
    setActiveTab(key as ColorFormat);
  };

  return (
    <div className={classes.container}>
      <h2>Resultados</h2>
      <section className={classes.colorPreviewContainer}>
        <p>Viste previa del color:</p>
        <div
          style={{ backgroundColor: colorConversions[0]?.value }}
          className={classes.colorPreview}
        ></div>
      </section>
      <section className={classes.convertionsContainer}>
        <h2>Conversiones</h2>
        <div className={classes.tabsContainer}>
          <Tabs
            className={classes.tabs}
            aria-label="Dynamic tabs"
            items={colorConversions}
            selectedKey={activeTab}
            onSelectionChange={onSelectChange}
          >
            {(item) => (
              <Tab key={item.type} title={item.type}>
                <p className={classes.value}>
                  {item.value}
                  <UiCopyButton text={item.value} />
                </p>
              </Tab>
            )}
          </Tabs>
        </div>
      </section>
    </div>
  );
};
