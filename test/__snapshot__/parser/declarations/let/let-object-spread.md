# Kataw parser test case

## Input

`````js
let tests = [
  {...a, ...b},
	{a, b, ...c},
	{...a, b, c},
	{a, ...b, c},
	{a, b, ...c, ...d, e, f, ...g, ...h, i, j},
];
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
                            "text": "tests",
                            "rawText": "tests",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 224,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 17,
                                                        "end": 20
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 20,
                                                        "end": 21
                                                    },
                                                    "flags": 32,
                                                    "start": 17,
                                                    "end": 21
                                                },
                                                {
                                                    "kind": 224,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 22,
                                                        "end": 26
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 26,
                                                        "end": 27
                                                    },
                                                    "flags": 32,
                                                    "start": 22,
                                                    "end": 27
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 17,
                                            "end": 27
                                        },
                                        "flags": 49,
                                        "start": 13,
                                        "end": 28
                                    },
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 32,
                                                    "end": 33
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 34,
                                                    "end": 36
                                                },
                                                {
                                                    "kind": 224,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 37,
                                                        "end": 41
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 41,
                                                        "end": 42
                                                    },
                                                    "flags": 32,
                                                    "start": 37,
                                                    "end": 42
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 32,
                                            "end": 42
                                        },
                                        "flags": 49,
                                        "start": 29,
                                        "end": 43
                                    },
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 224,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 47,
                                                        "end": 50
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "a",
                                                        "rawText": "a",
                                                        "flags": 96,
                                                        "start": 50,
                                                        "end": 51
                                                    },
                                                    "flags": 32,
                                                    "start": 47,
                                                    "end": 51
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 52,
                                                    "end": 54
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 55,
                                                    "end": 57
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 47,
                                            "end": 57
                                        },
                                        "flags": 49,
                                        "start": 44,
                                        "end": 58
                                    },
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 62,
                                                    "end": 63
                                                },
                                                {
                                                    "kind": 224,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 64,
                                                        "end": 68
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "b",
                                                        "rawText": "b",
                                                        "flags": 96,
                                                        "start": 68,
                                                        "end": 69
                                                    },
                                                    "flags": 32,
                                                    "start": 64,
                                                    "end": 69
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 70,
                                                    "end": 72
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 62,
                                            "end": 72
                                        },
                                        "flags": 49,
                                        "start": 59,
                                        "end": 73
                                    },
                                    {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 77,
                                                    "end": 78
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "b",
                                                    "rawText": "b",
                                                    "flags": 96,
                                                    "start": 79,
                                                    "end": 81
                                                },
                                                {
                                                    "kind": 224,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 82,
                                                        "end": 86
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "c",
                                                        "rawText": "c",
                                                        "flags": 96,
                                                        "start": 86,
                                                        "end": 87
                                                    },
                                                    "flags": 32,
                                                    "start": 82,
                                                    "end": 87
                                                },
                                                {
                                                    "kind": 224,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 88,
                                                        "end": 92
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "d",
                                                        "rawText": "d",
                                                        "flags": 96,
                                                        "start": 92,
                                                        "end": 93
                                                    },
                                                    "flags": 32,
                                                    "start": 88,
                                                    "end": 93
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "e",
                                                    "rawText": "e",
                                                    "flags": 96,
                                                    "start": 94,
                                                    "end": 96
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "f",
                                                    "rawText": "f",
                                                    "flags": 96,
                                                    "start": 97,
                                                    "end": 99
                                                },
                                                {
                                                    "kind": 224,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 100,
                                                        "end": 104
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "g",
                                                        "rawText": "g",
                                                        "flags": 96,
                                                        "start": 104,
                                                        "end": 105
                                                    },
                                                    "flags": 32,
                                                    "start": 100,
                                                    "end": 105
                                                },
                                                {
                                                    "kind": 224,
                                                    "ellipsisToken": {
                                                        "kind": 524302,
                                                        "flags": 64,
                                                        "start": 106,
                                                        "end": 110
                                                    },
                                                    "argument": {
                                                        "kind": 134299649,
                                                        "text": "h",
                                                        "rawText": "h",
                                                        "flags": 96,
                                                        "start": 110,
                                                        "end": 111
                                                    },
                                                    "flags": 32,
                                                    "start": 106,
                                                    "end": 111
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "i",
                                                    "rawText": "i",
                                                    "flags": 96,
                                                    "start": 112,
                                                    "end": 114
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "j",
                                                    "rawText": "j",
                                                    "flags": 96,
                                                    "start": 115,
                                                    "end": 117
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 77,
                                            "end": 117
                                        },
                                        "flags": 49,
                                        "start": 74,
                                        "end": 118
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "start": 13,
                                "end": 119
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 121
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 121
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 121
            },
            "flags": 33554448,
            "start": 0,
            "end": 122
        }
    ],
    "isModule": false,
    "source": "let tests = [\n  {...a, ...b},\n\t{a, b, ...c},\n\t{...a, b, c},\n\t{a, ...b, c},\n\t{a, b, ...c, ...d, e, f, ...g, ...h, i, j},\n];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 122
}
```

### Printed

```javascript

let tests = [
  { ...a, ...b },
  { a, b, ...c },
  { ...a, b, c },
  { a, ...b, c },
  { a, b, ...c, ...d, e, f, ...g, ...h, i, j },
];
```

### Diagnostics

```javascript
✔ No errors
```

