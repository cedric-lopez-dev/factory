
import { headers } from 'next/headers'
import { Button } from "@/components/ui/button"
import { getPage } from './Core/getPage';
import { notFound } from 'next/navigation';
import { getMetadata } from './Core/getMetadata';
import { getEntity } from './Core/getEntity';


async function getData() {

  return getPage()
}

export async function generateMetadata() {
  const pageResult = await getData()
  if (!pageResult)
    return
  if (pageResult?.metadata)
    getMetadata(pageResult?.metadata)

  return {
    title: "test"
  }
}
export default async function Home() {



  const headersList = headers();
  const host = headersList.get('host');
  const referer = headersList.get('referer')
  const pageResult = await getData()
  if (!pageResult)
    notFound();
  const { ComponentPage, ComponentSections, servicesObjects, ComponentLayout, pageEntitiesPath, config } = pageResult

  if (ComponentLayout)
    return (
      <ComponentLayout>
        <main >
          <ComponentPage>
            {
              ComponentSections.map((section, i) => {
                const Section = section.component
                return <Section key={i} sectionConfig={section.config} entitiesPath={pageEntitiesPath} config={config} />
              })
            }
          </ComponentPage>
        </main>
      </ComponentLayout>
    )


  return (
    <main >
      <ComponentPage>
        {
          ComponentSections.map((section) => {
            const Section = section
            return <Section />
          })
        }
      </ComponentPage>
    </main>
  );
}
