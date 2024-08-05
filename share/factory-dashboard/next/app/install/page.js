import { getTemplates } from "../services/factoryService";
import InstallForm from "./components/InstallForm";



async function getData() {
  const templates = await getTemplates().then((res) => res.templates)
  return { templates }

}

const install = async () => {
  const { templates } = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <InstallForm templates={templates} />
    </main>
  );
};

export default install;