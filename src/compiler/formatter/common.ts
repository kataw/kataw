export const enum FormatterKind {

Line = 1 << 1,
Soft = 1 << 2,
Hard = 1 << 3,
Space = 1 << 4,
Breakable =  1 << 5,
Flat =  1 << 6,

Root = 1,
WhiteSpace = 2,
BreakableParent = 3,
LineSuffix = 4,
SoftLine = 5 | Line | Soft,
HardLine = 6 | Line | Hard,
LineOrSpace = 7 | Line | Space,
Group = 8,
IfBreak = 9,
Indent = 10,
}
