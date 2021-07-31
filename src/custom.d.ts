type Tag = {
  id: number
  iconName: string
  chinese: string
}
type RecordItem = {
  tag: Tag
  note: string
  category: '+' | '-'
  amount: number
  createAt: string
}
type Category = '-' | '+'