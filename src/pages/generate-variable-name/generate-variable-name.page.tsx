import { AppLayout } from "@/layout";
import {
  GenerateVariableNameForm,
  GenerateVariableNameHeader,
  GenerateVariableNameResults,
} from "./components";
import classes from "./generate-variable-name.page.module.css";
import { FormResults } from "./generate-variable-name.model";
import { useApi } from "@/hooks/useApi";
import { UiHomeLinkButton } from "@/components";

export const GenerateVariableNamePage = () => {
  const { fetchData, loading, results } = useApi();
  const onResultsFormSubmit = (formResults: FormResults) => {
    const { identificator, language, nomenclature, description } = formResults;
    const prompt = `Genera exactamente 5 nombres de ${identificator} en ingles relacionados con ${description}, 
    utilizando la convención de nomenclatura ${nomenclature}. 
    No incluyas funciones adicionales, comillas, comentarios, explicaciones ni formato Markdown. 
    Es para un proyecto desarrollado con ${language}. 
    Devuélvelos uno por línea, sin ningún texto adicional.`;

    fetchData(prompt);
  };
  return (
    <AppLayout>
      <UiHomeLinkButton />
      <div className={classes.container}>
        <GenerateVariableNameHeader />
       
        <div className={classes.containerForm}>
          <GenerateVariableNameForm
            onResultsFormSubmit={onResultsFormSubmit}
            loading={loading}
          />
          <GenerateVariableNameResults results={results} />
        </div>
      </div>
    </AppLayout>
  );
};
