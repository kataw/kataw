# Kataw parser test case

## Input

`````js
let a: any;
let un: unknown;
let b: boolean;
let ne: never;
let nul: null;
let num: number;
let o: object;
let st: string;
let sy: symbol;
let u: undefined;
let v: void;
let n: bigint;
let nx: mixed;
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234252,
                                "flags": 2097216,
                                "start": 6,
                                "end": 10
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 10
                        },
                        "initializer": null,
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
                            "text": "un",
                            "rawText": "un",
                            "flags": 96,
                            "start": 15,
                            "end": 18
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234255,
                                "flags": 2097216,
                                "start": 19,
                                "end": 27
                            },
                            "flags": 2097152,
                            "start": 19,
                            "end": 27
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 15,
                        "end": 27
                    }
                ],
                "flags": 17,
                "start": 15,
                "end": 27
            },
            "flags": 33554448,
            "start": 11,
            "end": 28
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 28,
                "end": 32
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
                            "start": 32,
                            "end": 34
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234254,
                                "flags": 2097216,
                                "start": 35,
                                "end": 43
                            },
                            "flags": 2097152,
                            "start": 35,
                            "end": 43
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 32,
                        "end": 43
                    }
                ],
                "flags": 17,
                "start": 32,
                "end": 43
            },
            "flags": 33554448,
            "start": 28,
            "end": 44
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 44,
                "end": 48
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "ne",
                            "rawText": "ne",
                            "flags": 96,
                            "start": 48,
                            "end": 51
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234349,
                                "flags": 2097216,
                                "start": 52,
                                "end": 58
                            },
                            "flags": 2097152,
                            "start": 52,
                            "end": 58
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 48,
                        "end": 58
                    }
                ],
                "flags": 17,
                "start": 48,
                "end": 58
            },
            "flags": 33554448,
            "start": 44,
            "end": 59
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 59,
                "end": 63
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "nul",
                            "rawText": "nul",
                            "flags": 96,
                            "start": 63,
                            "end": 67
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 138477575,
                                "flags": 2097216,
                                "start": 68,
                                "end": 73
                            },
                            "flags": 2097152,
                            "start": 68,
                            "end": 73
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 63,
                        "end": 73
                    }
                ],
                "flags": 17,
                "start": 63,
                "end": 73
            },
            "flags": 33554448,
            "start": 59,
            "end": 74
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 74,
                "end": 78
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "num",
                            "rawText": "num",
                            "flags": 96,
                            "start": 78,
                            "end": 82
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 83,
                                "end": 90
                            },
                            "flags": 2097152,
                            "start": 83,
                            "end": 90
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 78,
                        "end": 90
                    }
                ],
                "flags": 17,
                "start": 78,
                "end": 90
            },
            "flags": 33554448,
            "start": 74,
            "end": 91
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 91,
                "end": 95
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "o",
                            "rawText": "o",
                            "flags": 96,
                            "start": 95,
                            "end": 97
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234474,
                                "flags": 2097216,
                                "start": 98,
                                "end": 105
                            },
                            "flags": 2097152,
                            "start": 98,
                            "end": 105
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 95,
                        "end": 105
                    }
                ],
                "flags": 17,
                "start": 95,
                "end": 105
            },
            "flags": 33554448,
            "start": 91,
            "end": 106
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 106,
                "end": 110
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "st",
                            "rawText": "st",
                            "flags": 96,
                            "start": 110,
                            "end": 113
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234347,
                                "flags": 2097216,
                                "start": 114,
                                "end": 121
                            },
                            "flags": 2097152,
                            "start": 114,
                            "end": 121
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 110,
                        "end": 121
                    }
                ],
                "flags": 17,
                "start": 110,
                "end": 121
            },
            "flags": 33554448,
            "start": 106,
            "end": 122
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 122,
                "end": 126
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "sy",
                            "rawText": "sy",
                            "flags": 96,
                            "start": 126,
                            "end": 129
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234343,
                                "flags": 2097216,
                                "start": 130,
                                "end": 137
                            },
                            "flags": 2097152,
                            "start": 130,
                            "end": 137
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 126,
                        "end": 137
                    }
                ],
                "flags": 17,
                "start": 126,
                "end": 137
            },
            "flags": 33554448,
            "start": 122,
            "end": 138
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 138,
                "end": 142
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "u",
                            "rawText": "u",
                            "flags": 96,
                            "start": 142,
                            "end": 144
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234253,
                                "flags": 2097216,
                                "start": 145,
                                "end": 155
                            },
                            "flags": 2097152,
                            "start": 145,
                            "end": 155
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 142,
                        "end": 155
                    }
                ],
                "flags": 17,
                "start": 142,
                "end": 155
            },
            "flags": 33554448,
            "start": 138,
            "end": 156
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 156,
                "end": 160
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "v",
                            "rawText": "v",
                            "flags": 96,
                            "start": 160,
                            "end": 162
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 138477615,
                                "flags": 2097216,
                                "start": 163,
                                "end": 168
                            },
                            "flags": 2097152,
                            "start": 163,
                            "end": 168
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 160,
                        "end": 168
                    }
                ],
                "flags": 17,
                "start": 160,
                "end": 168
            },
            "flags": 33554448,
            "start": 156,
            "end": 169
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 169,
                "end": 173
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "n",
                            "rawText": "n",
                            "flags": 96,
                            "start": 173,
                            "end": 175
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "bigint",
                                    "rawText": "bigint",
                                    "flags": 96,
                                    "start": 176,
                                    "end": 183
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 176,
                                "end": 183
                            },
                            "flags": 2097152,
                            "start": 176,
                            "end": 183
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 173,
                        "end": 183
                    }
                ],
                "flags": 17,
                "start": 173,
                "end": 183
            },
            "flags": 33554448,
            "start": 169,
            "end": 184
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 184,
                "end": 188
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "nx",
                            "rawText": "nx",
                            "flags": 96,
                            "start": 188,
                            "end": 191
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "mixed",
                                    "rawText": "mixed",
                                    "flags": 96,
                                    "start": 192,
                                    "end": 198
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 192,
                                "end": 198
                            },
                            "flags": 2097152,
                            "start": 192,
                            "end": 198
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 188,
                        "end": 198
                    }
                ],
                "flags": 17,
                "start": 188,
                "end": 198
            },
            "flags": 33554448,
            "start": 184,
            "end": 199
        }
    ],
    "isModule": false,
    "source": "let a: any;\nlet un: unknown;\nlet b: boolean;\nlet ne: never;\nlet nul: null;\nlet num: number;\nlet o: object;\nlet st: string;\nlet sy: symbol;\nlet u: undefined;\nlet v: void;\nlet n: bigint;\nlet nx: mixed;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 199
}
```

### Printed

```javascript

  let a: any;
  let un: unknown;
  let b: boolean;
  let ne: never;
  let nul: null;
  let num: number;
  let o: object;
  let st: string;
  let sy: symbol;
  let u: undefined;
  let v: void;
  let n: bigint;
  let nx: mixed;

```

### Diagnostics

```javascript
✔ No errors
```

