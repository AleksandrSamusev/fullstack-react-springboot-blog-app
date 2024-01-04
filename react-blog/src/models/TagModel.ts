class TagModel {
    tagId: number;
    name: string;

    constructor(name: string, tagId: number) {
        this.name = name;
        this.tagId = tagId;
    }
}

export default TagModel;