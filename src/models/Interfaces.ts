export interface IChar {
    id: number,
    name: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string
    }
};

export interface ICharDetail {
    id: number,
    title: string,
    description: string,
    resourceURI: string,
    thumbnail: {
        path: string,
        extension: string
    }
};

export interface ICharacters {
    code: number,
    status: string,
    copyright: string,
    attributionText: string,
    attributionHTML: string,
    etag: string,
    data: {
        offset: number,
        limit: number,
        total: number,
        count: number,
        results: [{
            id: number,
            name: string,
            description: string,
            modified: string,
            thumbnail: {
                path: string,
                extension: string
            },
            resourceURI: string,
            comics: {
                available: number,
                collectionURI: string,
                items: [{
                        resourceURI: string,
                        name: string
                    }],
                returned: number
            },
            series: {
                available: number,
                collectionURI: string,
                items: [{
                    resourceURI: string,
                    name: string
                }],
            returned: number
            },
            stories: {
                available: number,
                collectionURI: string,
                items: [{
                    resourceURI: string,
                    name: string
                }],
            returned: number
            },
            events: {
                available: number,
                collectionURI: string,
                items: [{
                    resourceURI: string,
                    name: string
                }],
            returned: number
            },
            urls: [{
                type: string,
                url: string
            }]
        }]
    }
};

export interface IComics {
    code: number,
    status: string,
    copyright: string,
    attributionText: string,
    attributionHTML: string,
    etag: string,
    data: {
        offset: number,
        limit: number,
        total: number,
        count: number,
        results: [{
            id: number,
            digitalId: number,
            title: string,
            issueNumber: number,
            variantDescription: string,
            description: string,
            modified: string,
            isbn: string,
            diamondCode: string,
            format: string,
            pageCount: number,
            textObjects: [{
                type: string,
                language: string,
                text: string
            }],
            resourceURI: string,
            urls: [{
                type: string,
                url: string
            }],
            series: {
                resourceURI: string,
                name: string                
            },
            variants: [{
                resourceURI: string,
                name: string                
            }],
            prices: [{
                type: string,
                price: number
            }],
            thumbnail: {
                path: string,
                extension: string
            },
            images: [{
                path: string,
                extension: string
            }],
            creators: {
                available: number,
                collectionURI: string,
                items: 
                    [{
                    resourceURI: string,
                    name: string,
                    role: string
                }],
                returned: number
            },
            characters: {
                available: number,
                collectionURI: string,
                items: [{
                    resourceURI: string,
                    name: string
                }],
                returned: number
            },
            stories: {
                available: number,
                collectionURI: string,
                items: [{
                    resourceURI: string,
                    name: string,
                    type: string
                }],
                returned: number
            },
            events: {
                available: number,
                collectionURI: string,
                items: [{
                    resourceURI: string,
                    name: string,
                    type: string
                }],
                returned: number
            },
        }]
    }
};



