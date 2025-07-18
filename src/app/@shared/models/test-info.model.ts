export type SectionContentModel = {
  title?   : string,
  sectionTitle?: string,
  content : string[]
}

export type TestInfoModel = {
  type: string,
  title: string,
  section: SectionContentModel[]
};
