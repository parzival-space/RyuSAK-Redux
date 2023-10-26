export interface Game {
    bannerUrl: string
    category: string
    developer: any // todo: find correct type
    frontBoxArt: any // todo: find correct type
    iconUrl: string
    id: string
    intro: string
    isDemo: boolean
    key: any // todo: find correct type
    language: string
    languages: string[]
    name: string
    nsuId: number
    numberOfPlayers: number
    publisher: string
    rank: any // todo: find correct type
    rating: number
    ratingContent: string[]
    region: string
    regions: any // todo: find correct type
    releaseDate: number
    rightsId: string
    screenshots: string[]
    size: number
    version: number
}