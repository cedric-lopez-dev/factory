import { getComponent, getElementsByType, getJson } from "./function"
import { getEntity } from './getEntity'

export const getPage = async (slugs) => {
    const config = getJson("config.json")
    const elements = config.elements
    const pages = getElementsByType(elements, "pages")
    const pageTemplate = await getPageTemplate(config.template, slugs)
    const pathPageComponent = getPageComponentPath(pageTemplate, pages);

    if (!pathPageComponent) {
        return false;
    }

    const sections = getElementsByType(elements, "sections")
    const services = getElementsByType(elements, "services")
    const layout = getElementsByType(elements, "layout")
    const entities = config?.entities

    const pageSectionsPath = getPageElementsPath(pageTemplate, sections, 'sections')
    const pageServicesPath = getPageElementsPath(pageTemplate, services, 'services')
    const pageLayoutPath = getPageElementsPath(pageTemplate, layout, 'layout')
    const pageEntitiesPath = getPageEntities(pageTemplate, entities)

    const metadata = pageTemplate?.metadata

    let ComponentSections = []
    if (pageSectionsPath) {
        ComponentSections = pageSectionsPath.map((section) => {
            return { config: section.element, component: getComponent(section.path) }
        })
    }

    let servicesObjects = []
    if (pageServicesPath) {
        servicesObjects = pageServicesPath.map((service) => {
            const newObject = {}
            newObject[service.name] = require(`@/app/${service.path}`)
            return newObject
        })
    }
    let ComponentLayout = null

    if (pageLayoutPath[0]) {
        ComponentLayout = getComponent(pageLayoutPath[0].path)
    }

    const ComponentPage = getComponent(pathPageComponent);

    return {
        config, ComponentPage, ComponentSections, metadata, servicesObjects, ComponentLayout,
        pageEntitiesPath
    };
}



const getPageComponentPath = (pageTemplate, pages) => {

    try {
        const name = pageTemplate.module || pageTemplate.extension
        const path = pageTemplate.page
        return pages[name][path]
    } catch {
        return false
    }
}


const getPageTemplate = async (template, slugs) => {
    let pageTemplate = {}
    if (slugs) {
        const slugsValues = Object.values(slugs)
        pageTemplate = slugsValues.reduce((acc, current) => {
            return acc && acc[current] ? acc[current] : null;
        }, template);
    }
    else {
        pageTemplate = template["/"]
    }
    return pageTemplate
}

const getPageElementsPath = (pageTemplate, elements, type) => {

    let elemtentsPath = []

    if (!pageTemplate?.[type])
        return false
    pageTemplate[type].forEach((element) => {

        const elementObject = elements[element.module] || elements[element.extension]
        if (elementObject?.[element.name]) {
            const newObject = { element: element, path: elementObject[element.name] }
            elemtentsPath.push(newObject);
        }

    })

    return elemtentsPath
}

const getPageEntities = (pageTemplate, entities) => {

    let entitiesPath = []
    if (!pageTemplate?.entities)
        return false
    entitiesPath = pageTemplate.entities.map((entity) => {
        return { name: entity, path: entities[entity] }

    })
    return entitiesPath
}