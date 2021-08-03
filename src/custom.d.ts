type Tag = {
  id: number
  iconName: string
  chinese: string
}
type RecordItem = {
  id: number
  tag: Tag
  note: string
  category: '+' | '-'
  amount: number
  createAt: string
}
type Category = '-' | '+'

type Params = {
  recordId: string
}