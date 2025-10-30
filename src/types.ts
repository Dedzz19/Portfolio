export type ProjectType={
    id: number,
    title: string,
    category: string,
    image: string,
    tech: string[],
    link: string,
    github: string,
}

export type FilterType = 'All' | 'Frontend' | 'Backend';