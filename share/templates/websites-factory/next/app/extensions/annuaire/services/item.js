import { normalizeFromMapping } from "@/app/Core/function"


export const getItems = async (extensionConfig, entities) => {

    const entity = entities.find((entity) => {
        return entity.name === extensionConfig.item.entity
    }
    )

    const items = await entity.instance.findBy()

    const itemsNormalized = normalizeFromMapping(items, extensionConfig.item)

    return itemsNormalized
}
