export interface IChar {
    id: number,
    name: string,
    description: string,
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


