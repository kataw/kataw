// Constexpr cache table for character flags.
export const enum AsciiCharFlags {
  Unknown = 0,
  IdentifierStart = 1 << 0,
  IdentifierPart = 1 << 1,
  IsWhiteSpace = 1 << 2,
  LineTerminator = 1 << 3,
  Decimal = 1 << 4,
  IsSeparator = 1 << 5,
  IsStringLiteralLineTerminator = 1 << 6,
  Hex = 1 << 7,
  OctHexBin = 1 << 8,
  Exponent = 1 << 9,
  Period = 1 << 10,
  LeftBraceOrLessThan = 1 << 10,
  GreaterThanOrRightBrace = 1 << 11
}

/**
 * Lookup table for mapping a codepoint to a set of flags
 */
export const AsciiCharTypes = [
  AsciiCharFlags.Unknown /* 0x00   */,
  AsciiCharFlags.Unknown /* 0x01   */,
  AsciiCharFlags.Unknown /* 0x02   */,
  AsciiCharFlags.Unknown /* 0x03   */,
  AsciiCharFlags.Unknown /* 0x04   */,
  AsciiCharFlags.Unknown /* 0x05   */,
  AsciiCharFlags.Unknown /* 0x06   */,
  AsciiCharFlags.Unknown /* 0x07   */,
  AsciiCharFlags.Unknown /* 0x08   */,
  AsciiCharFlags.Unknown /* 0x09   */,
  AsciiCharFlags.LineTerminator /* 0x0A   */,
  AsciiCharFlags.Unknown /* 0x0B   */,
  AsciiCharFlags.Unknown /* 0x0C   */,
  AsciiCharFlags.LineTerminator /* 0x0D   */,
  AsciiCharFlags.Unknown /* 0x0E   */,
  AsciiCharFlags.Unknown /* 0x0F   */,
  AsciiCharFlags.Unknown /* 0x10   */,
  AsciiCharFlags.Unknown /* 0x11   */,
  AsciiCharFlags.Unknown /* 0x12   */,
  AsciiCharFlags.Unknown /* 0x13   */,
  AsciiCharFlags.Unknown /* 0x14   */,
  AsciiCharFlags.Unknown /* 0x15   */,
  AsciiCharFlags.Unknown /* 0x16   */,
  AsciiCharFlags.Unknown /* 0x17   */,
  AsciiCharFlags.Unknown /* 0x18   */,
  AsciiCharFlags.Unknown /* 0x19   */,
  AsciiCharFlags.Unknown /* 0x1A   */,
  AsciiCharFlags.Unknown /* 0x1B   */,
  AsciiCharFlags.Unknown /* 0x1C   */,
  AsciiCharFlags.Unknown /* 0x1D   */,
  AsciiCharFlags.Unknown /* 0x1E   */,
  AsciiCharFlags.Unknown /* 0x1F   */,
  AsciiCharFlags.Unknown /* 0x20   */,
  AsciiCharFlags.Unknown /* 0x21 ! */,
  AsciiCharFlags.Unknown /* 0x22   */,
  AsciiCharFlags.Unknown /* 0x23 # */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x24 $ */,
  AsciiCharFlags.Unknown /* 0x25 % */,
  AsciiCharFlags.Unknown /* 0x26 & */,
  AsciiCharFlags.Unknown /* 0x27   */,
  AsciiCharFlags.Unknown /* 0x28   */,
  AsciiCharFlags.Unknown /* 0x29   */,
  AsciiCharFlags.Unknown /* 0x2A   */,
  AsciiCharFlags.Unknown /* 0x2B   */,
  AsciiCharFlags.Unknown /* 0x2C   */,
  AsciiCharFlags.Unknown /* 0x2D   */,
  AsciiCharFlags.Period /* 0x2E   */,
  AsciiCharFlags.Unknown /* 0x2F   */,
  AsciiCharFlags.IdentifierPart | AsciiCharFlags.Decimal | AsciiCharFlags.Hex /* 0x30 0 */,
  AsciiCharFlags.IdentifierPart | AsciiCharFlags.Decimal | AsciiCharFlags.Hex /* 0x31 1 */,
  AsciiCharFlags.IdentifierPart | AsciiCharFlags.Decimal | AsciiCharFlags.Hex /* 0x32 2 */,
  AsciiCharFlags.IdentifierPart | AsciiCharFlags.Decimal | AsciiCharFlags.Hex /* 0x33 3 */,
  AsciiCharFlags.IdentifierPart | AsciiCharFlags.Decimal | AsciiCharFlags.Hex /* 0x34 4 */,
  AsciiCharFlags.IdentifierPart | AsciiCharFlags.Decimal | AsciiCharFlags.Hex /* 0x35 5 */,
  AsciiCharFlags.IdentifierPart | AsciiCharFlags.Decimal | AsciiCharFlags.Hex /* 0x36 6 */,
  AsciiCharFlags.IdentifierPart | AsciiCharFlags.Decimal | AsciiCharFlags.Hex /* 0x37 7 */,
  AsciiCharFlags.IdentifierPart | AsciiCharFlags.Decimal | AsciiCharFlags.Hex /* 0x38 8 */,
  AsciiCharFlags.IdentifierPart | AsciiCharFlags.Decimal | AsciiCharFlags.Hex /* 0x39 9 */,
  AsciiCharFlags.Unknown /* 0x3A   */,
  AsciiCharFlags.Unknown /* 0x3B   */,
  AsciiCharFlags.LeftBraceOrLessThan /* 0x3C < */,
  AsciiCharFlags.Unknown /* 0x3D = */,
  AsciiCharFlags.GreaterThanOrRightBrace /* 0x3E > */,
  AsciiCharFlags.Unknown /* 0x3F   */,
  AsciiCharFlags.Unknown /* 0x40 @ */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.Hex /* 0x41 A */,
  AsciiCharFlags.IdentifierStart |
    AsciiCharFlags.IdentifierPart |
    AsciiCharFlags.Hex |
    AsciiCharFlags.OctHexBin /* 0x42 B */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.Hex /* 0x43 C */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.Hex /* 0x44 D */,
  AsciiCharFlags.IdentifierStart |
    AsciiCharFlags.IdentifierPart |
    AsciiCharFlags.Hex |
    AsciiCharFlags.Exponent /* 0x45 E */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.Hex /* 0x46 F */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x47 G */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x48 H */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x49 I */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x4A J */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x4B K */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x4C L */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x4D M */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x4E N */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.OctHexBin /* 0x4F O */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x50 P */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x51 Q */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x52 R */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x53 S */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x54 T */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x55 U */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x56 V */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x57 W */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.OctHexBin /* 0x58 X */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x59 Y */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x5A Z */,
  AsciiCharFlags.Unknown /* 0x5B */,
  AsciiCharFlags.IdentifierStart /* 0x5C  */,
  AsciiCharFlags.Unknown /* 0x5D   */,
  AsciiCharFlags.Unknown /* 0x5E   */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.IsSeparator /* 0x5F _ */,
  AsciiCharFlags.Unknown /* 0x60   */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.Hex /* 0x61 a */,
  AsciiCharFlags.IdentifierStart |
    AsciiCharFlags.IdentifierPart |
    AsciiCharFlags.Hex |
    AsciiCharFlags.OctHexBin /* 0x62 b */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.Hex /* 0x63 c */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.Hex /* 0x64 d */,
  AsciiCharFlags.IdentifierStart |
    AsciiCharFlags.IdentifierPart |
    AsciiCharFlags.Hex |
    AsciiCharFlags.Exponent /* 0x65 e */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.Hex /* 0x66 f */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x67 g */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x68 h */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x69 i */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x6A j */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x6B k */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x6C l */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x6D m */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.OctHexBin /* 0x6E n */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.OctHexBin /* 0x6F o */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x70 p */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x71 q */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x72 r */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x73 s */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x74 t */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x75 u */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x76 v */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x77 w */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart | AsciiCharFlags.OctHexBin /* 0x78 x */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x79 y */,
  AsciiCharFlags.IdentifierStart | AsciiCharFlags.IdentifierPart /* 0x7A z */,
  AsciiCharFlags.LeftBraceOrLessThan /* 0x7B */,
  AsciiCharFlags.Unknown /* 0x7C */,
  AsciiCharFlags.GreaterThanOrRightBrace /* 0x7D */,
  AsciiCharFlags.Unknown /* 0x7E */,
  AsciiCharFlags.Unknown /* 0x7F */
];
