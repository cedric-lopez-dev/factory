
import { Section, SectionTitle } from '@/app/theme/main/ui/section'
import { CarouselComponent } from "@/app/theme/main/ui/carousel";
import ItemCard from '../../components/itemCard'
import { getItems } from '../../services/item';
import { getEntity } from '@/app/Core/getEntity';
import { getExtenstionConfig } from '@/app/Core/function';
import { Grid } from '@/app/theme/main/ui/grid';

async function getEntities(entitiesPath) {

    const entities = entitiesPath.map((entity) => {

        return { name: entity.name, instance: getEntity(entity.path) }
    }
    )
    return entities
}

const index = async ({ config, sectionConfig, entitiesPath }) => {

    const extensionConfig = getExtenstionConfig(config, 'annuaire')
    const entities = await getEntities(entitiesPath)
    const items = await getItems(extensionConfig, entities)

    return (

        <Section>
            <SectionTitle>
                {sectionConfig.title}
            </SectionTitle>
            <Grid
                items={items}
                renderItem={(item) => (
                    <ItemCard item={item} />
                )}
            />
        </Section>

    );
};

export default index;

