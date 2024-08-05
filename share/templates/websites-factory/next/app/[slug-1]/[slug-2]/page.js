import { getMetadata } from '@/app/Core/getMetadata';
import { getPage } from '@/app/Core/getPage'
import { notFound } from 'next/navigation'

async function getData(slugs) {
    const pageResult = await getPage(slugs)
    if (!pageResult)
        notFound();

    return pageResult
}

export async function generateMetadata({ params }) {
    const { metadata } = await getData(params)
    if (metadata)
        getMetadata(metadata)
    return {
        title: "test"
    }
}

export default async function Page({ params }) {

    const pageResult = await getData(params)
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
            </ComponentPage>
        </main>
    );
}
