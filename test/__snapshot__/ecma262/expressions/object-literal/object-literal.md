# Kataw parser test case

## Input

`````js
let a = {};
let b = {
  "1": "one",
  "2": "two",
  "3": "three"
};
let c = {
  [42]: "answer",
  [7]: "lucky"
};
let d = {
  a: 1,
  b: 2,
  c: 3
};
let e = d.a;
let f = d["c"];
let g = {
  m() {},
  ['n'](a) {},
  o(a) {
    return a;
  }
};
let h = ({}).toString();
let i = {
  ...d,
  a
};
a?.['b']?.[0]?.(1);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 9,
                                "end": 9
                            },
                            "flags": 48,
                            "start": 7,
                            "end": 10
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 10
            },
            "flags": 33554448,
            "start": 0,
            "end": 11
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 11,
                "end": 15
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 15,
                            "end": 17
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "1",
                                            "rawText": "\"1\"",
                                            "flags": 97,
                                            "start": 21,
                                            "end": 27
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "one",
                                            "rawText": "\"one\"",
                                            "flags": 96,
                                            "start": 28,
                                            "end": 34
                                        },
                                        "flags": 33,
                                        "start": 21,
                                        "end": 34
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "2",
                                            "rawText": "\"2\"",
                                            "flags": 97,
                                            "start": 35,
                                            "end": 41
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "two",
                                            "rawText": "\"two\"",
                                            "flags": 96,
                                            "start": 42,
                                            "end": 48
                                        },
                                        "flags": 33,
                                        "start": 35,
                                        "end": 48
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "3",
                                            "rawText": "\"3\"",
                                            "flags": 97,
                                            "start": 49,
                                            "end": 55
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "three",
                                            "rawText": "\"three\"",
                                            "flags": 96,
                                            "start": 56,
                                            "end": 64
                                        },
                                        "flags": 33,
                                        "start": 49,
                                        "end": 64
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 21,
                                "end": 64
                            },
                            "flags": 49,
                            "start": 19,
                            "end": 66
                        },
                        "flags": 16,
                        "start": 15,
                        "end": 66
                    }
                ],
                "flags": 17,
                "start": 15,
                "end": 66
            },
            "flags": 33554448,
            "start": 11,
            "end": 67
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 67,
                "end": 71
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 71,
                            "end": 73
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 42,
                                                "rawText": "42",
                                                "flags": 96,
                                                "start": 81,
                                                "end": 83
                                            },
                                            "flags": 32,
                                            "start": 77,
                                            "end": 84
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "answer",
                                            "rawText": "\"answer\"",
                                            "flags": 96,
                                            "start": 85,
                                            "end": 94
                                        },
                                        "flags": 33,
                                        "start": 77,
                                        "end": 94
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 7,
                                                "rawText": "7",
                                                "flags": 96,
                                                "start": 99,
                                                "end": 100
                                            },
                                            "flags": 32,
                                            "start": 95,
                                            "end": 101
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "lucky",
                                            "rawText": "\"lucky\"",
                                            "flags": 96,
                                            "start": 102,
                                            "end": 110
                                        },
                                        "flags": 33,
                                        "start": 95,
                                        "end": 110
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 77,
                                "end": 110
                            },
                            "flags": 49,
                            "start": 75,
                            "end": 112
                        },
                        "flags": 16,
                        "start": 71,
                        "end": 112
                    }
                ],
                "flags": 17,
                "start": 71,
                "end": 112
            },
            "flags": 33554448,
            "start": 67,
            "end": 113
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 113,
                "end": 117
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "d",
                            "rawText": "d",
                            "flags": 96,
                            "start": 117,
                            "end": 119
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 97,
                                            "start": 123,
                                            "end": 127
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "1",
                                            "flags": 96,
                                            "start": 128,
                                            "end": 130
                                        },
                                        "flags": 33,
                                        "start": 123,
                                        "end": 130
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 97,
                                            "start": 131,
                                            "end": 135
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 96,
                                            "start": 136,
                                            "end": 138
                                        },
                                        "flags": 33,
                                        "start": 131,
                                        "end": 138
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 97,
                                            "start": 139,
                                            "end": 143
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 144,
                                            "end": 146
                                        },
                                        "flags": 33,
                                        "start": 139,
                                        "end": 146
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 123,
                                "end": 146
                            },
                            "flags": 49,
                            "start": 121,
                            "end": 148
                        },
                        "flags": 16,
                        "start": 117,
                        "end": 148
                    }
                ],
                "flags": 17,
                "start": 117,
                "end": 148
            },
            "flags": 33554448,
            "start": 113,
            "end": 149
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 149,
                "end": 153
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 96,
                            "start": 153,
                            "end": 155
                        },
                        "type": null,
                        "initializer": {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 157,
                                "end": 159
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 160,
                                "end": 161
                            },
                            "flags": 96,
                            "start": 157,
                            "end": 161
                        },
                        "flags": 16,
                        "start": 153,
                        "end": 161
                    }
                ],
                "flags": 17,
                "start": 153,
                "end": 161
            },
            "flags": 33554448,
            "start": 149,
            "end": 162
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 162,
                "end": 166
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 166,
                            "end": 168
                        },
                        "type": null,
                        "initializer": {
                            "kind": 130,
                            "member": {
                                "kind": 134299649,
                                "text": "d",
                                "rawText": "d",
                                "flags": 96,
                                "start": 170,
                                "end": 172
                            },
                            "expression": {
                                "kind": 201392131,
                                "text": "c",
                                "rawText": "\"c\"",
                                "flags": 96,
                                "start": 173,
                                "end": 176
                            },
                            "flags": 536870944,
                            "start": 170,
                            "end": 177
                        },
                        "flags": 16,
                        "start": 166,
                        "end": 177
                    }
                ],
                "flags": 17,
                "start": 166,
                "end": 177
            },
            "flags": 33554448,
            "start": 162,
            "end": 178
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 178,
                "end": 182
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "g",
                            "rawText": "g",
                            "flags": 96,
                            "start": 182,
                            "end": 184
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "m",
                                                "rawText": "m",
                                                "flags": 97,
                                                "start": 188,
                                                "end": 192
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [],
                                                "trailingComma": false,
                                                "flags": 33,
                                                "start": 193,
                                                "end": 194
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 196,
                                                    "end": 196
                                                },
                                                "flags": 32,
                                                "start": 194,
                                                "end": 197
                                            },
                                            "flags": 33,
                                            "start": 192,
                                            "end": 197
                                        },
                                        "flags": 32,
                                        "start": 188,
                                        "end": 197
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 194,
                                                "expression": {
                                                    "kind": 201392131,
                                                    "text": "n",
                                                    "rawText": "'n'",
                                                    "flags": 4194400,
                                                    "start": 202,
                                                    "end": 205
                                                },
                                                "flags": 32,
                                                "start": 198,
                                                "end": 206
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 207,
                                                        "end": 208
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 97,
                                                "start": 207,
                                                "end": 209
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 211,
                                                    "end": 211
                                                },
                                                "flags": 32,
                                                "start": 209,
                                                "end": 212
                                            },
                                            "flags": 33,
                                            "start": 206,
                                            "end": 212
                                        },
                                        "flags": 32,
                                        "start": 198,
                                        "end": 212
                                    },
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "o",
                                                "rawText": "o",
                                                "flags": 97,
                                                "start": 213,
                                                "end": 217
                                            },
                                            "typeParameters": null,
                                            "formalParameterList": {
                                                "kind": 214,
                                                "formalParameters": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 218,
                                                        "end": 219
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 97,
                                                "start": 218,
                                                "end": 220
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [
                                                        {
                                                            "kind": 161,
                                                            "returnKeyword": {
                                                                "kind": 37757022,
                                                                "flags": 81,
                                                                "start": 222,
                                                                "end": 233
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "a",
                                                                "rawText": "a",
                                                                "flags": 96,
                                                                "start": 233,
                                                                "end": 235
                                                            },
                                                            "flags": 81,
                                                            "start": 222,
                                                            "end": 236
                                                        }
                                                    ],
                                                    "flags": 33,
                                                    "start": 222,
                                                    "end": 236
                                                },
                                                "flags": 32,
                                                "start": 220,
                                                "end": 240
                                            },
                                            "flags": 33,
                                            "start": 217,
                                            "end": 240
                                        },
                                        "flags": 32,
                                        "start": 213,
                                        "end": 240
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 188,
                                "end": 240
                            },
                            "flags": 49,
                            "start": 186,
                            "end": 242
                        },
                        "flags": 16,
                        "start": 182,
                        "end": 242
                    }
                ],
                "flags": 17,
                "start": 182,
                "end": 242
            },
            "flags": 33554448,
            "start": 178,
            "end": 243
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 243,
                "end": 247
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "h",
                            "rawText": "h",
                            "flags": 96,
                            "start": 247,
                            "end": 249
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 129,
                                "member": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 254,
                                            "end": 254
                                        },
                                        "flags": 48,
                                        "start": 253,
                                        "end": 255
                                    },
                                    "flags": 251,
                                    "start": 34,
                                    "end": 256
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "toString",
                                    "rawText": "toString",
                                    "flags": 96,
                                    "start": 257,
                                    "end": 265
                                },
                                "flags": 251,
                                "start": 251,
                                "end": 265
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 266,
                                "end": 266
                            },
                            "flags": 268435488,
                            "start": 251,
                            "end": 267
                        },
                        "flags": 16,
                        "start": 247,
                        "end": 267
                    }
                ],
                "flags": 17,
                "start": 247,
                "end": 267
            },
            "flags": 33554448,
            "start": 243,
            "end": 268
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 268,
                "end": 272
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "i",
                            "rawText": "i",
                            "flags": 96,
                            "start": 272,
                            "end": 274
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 224,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 65,
                                            "start": 278,
                                            "end": 284
                                        },
                                        "argument": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 284,
                                            "end": 285
                                        },
                                        "flags": 1073741856,
                                        "start": 278,
                                        "end": 285
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 97,
                                        "start": 286,
                                        "end": 290
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 278,
                                "end": 290
                            },
                            "flags": 49,
                            "start": 276,
                            "end": 292
                        },
                        "flags": 16,
                        "start": 272,
                        "end": 292
                    }
                ],
                "flags": 17,
                "start": 272,
                "end": 292
            },
            "flags": 33554448,
            "start": 268,
            "end": 293
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 307,
                    "end": 309
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 302,
                        "end": 304
                    },
                    "member": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 295,
                            "end": 297
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 97,
                            "start": 293,
                            "end": 295
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 203,
                                "chain": null,
                                "expression": {
                                    "kind": 201392131,
                                    "text": "b",
                                    "rawText": "'b'",
                                    "flags": 4194400,
                                    "start": 298,
                                    "end": 301
                                },
                                "flags": 536870944,
                                "start": 297,
                                "end": 301
                            },
                            "flags": 32,
                            "start": 297,
                            "end": 302
                        },
                        "flags": 32,
                        "start": 293,
                        "end": 302
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 203,
                            "chain": null,
                            "expression": {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "start": 305,
                                "end": 306
                            },
                            "flags": 536870944,
                            "start": 304,
                            "end": 306
                        },
                        "flags": 32,
                        "start": 304,
                        "end": 307
                    },
                    "flags": 32,
                    "start": 293,
                    "end": 307
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 201392130,
                                    "text": 1,
                                    "rawText": "1",
                                    "flags": 96,
                                    "start": 310,
                                    "end": 311
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 310,
                            "end": 311
                        },
                        "flags": 268435488,
                        "start": 309,
                        "end": 312
                    },
                    "flags": 32,
                    "start": 309,
                    "end": 312
                },
                "flags": 32,
                "start": 293,
                "end": 312
            },
            "flags": 16,
            "start": 293,
            "end": 313
        }
    ],
    "isModule": false,
    "source": "let a = {};\nlet b = {\n  \"1\": \"one\",\n  \"2\": \"two\",\n  \"3\": \"three\"\n};\nlet c = {\n  [42]: \"answer\",\n  [7]: \"lucky\"\n};\nlet d = {\n  a: 1,\n  b: 2,\n  c: 3\n};\nlet e = d.a;\nlet f = d[\"c\"];\nlet g = {\n  m() {},\n  ['n'](a) {},\n  o(a) {\n    return a;\n  }\n};\nlet h = ({}).toString();\nlet i = {\n  ...d,\n  a\n};\na?.['b']?.[0]?.(1);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 313
}
```

### Printed

```javascript

let a = {};
let b = {
    "\"1\"": "\"one\"",
    "\"2\"": "\"two\"",
    "\"3\"": "\"three\""
  };

let c = {
    [42]: "\"answer\"",
    [7]: "\"lucky\""
  };

let d = {
    a: 1,
    b: 2,
    c: 3
  };

let e = d.a;

let f = d["\"c\""];

let g = {
    m() {},
    ['\'n\''](a) {},
    o(a) {
      return a;
    }
  };

let h = ({}).toString();

let i = {
    ...d,
    a
  };

a?.['\'b\'']?.[0]?.(
  1
);

```

### Diagnostics

```javascript
✔ No errors
```

