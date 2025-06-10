import { ColorDataArray } from "./api/api.model";
import { ColorConverterForm } from "./components";
import { AppLayout } from "@/layout";
import { ColorConverterConvertionsColor } from "./components/color-converter-convertions-color.component";
import { ColorConverterColorHarmonies } from "./components/color-converter-color-harmonies.component";
import classes from "./color-converter.page.module.css";
import { FormResults } from "./color-converter.model";
import { fetchData } from "./api";
import { useState } from "react";
import { UiHomeLinkButton } from "@/components";
export const ColorConverterPage = () => {
  const [loading, setLoading] = useState(false);
  const mockData: ColorDataArray = {
    colorConversions: [
      { type: "RGB", value: "rgb(255, 0, 0)" },
      { type: "HEX", value: "#FF0000" },
      { type: "HSL", value: "hsl(0, 100%, 50%)" },
      { type: "CMYK", value: "cmyk(0%, 100%, 100%, 0%)" },
    ],
    colorHarmonies: [
      "#FF6666",
      "#FF0000",
      "#990000",
      "#FF3333",
      "#CC0000",
      "#FF9999",
    ],
  };
  const [results, setResults] = useState<ColorDataArray>(mockData);

  const onResults = async (formResults: FormResults) => {
    setLoading(true);
    try {
      const data = await fetchData(formResults.color);
      setResults(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AppLayout>
      <UiHomeLinkButton />
      <div className={classes.container}>
        <section className={classes.item}>
          <ColorConverterForm onResults={onResults} loading={loading} />
        </section>
        <section className={classes.item}>
          <ColorConverterConvertionsColor
            colorConversions={results.colorConversions}
          />
        </section>
        <section className={`${classes.item} ${classes.colorHarmonies} `}>
          <ColorConverterColorHarmonies
            colorHarmonies={results.colorHarmonies}
          />
        </section>
      </div>
    </AppLayout>
  );
};
