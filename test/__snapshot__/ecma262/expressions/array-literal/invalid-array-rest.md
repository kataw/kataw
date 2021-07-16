# Kataw parser test case

## Input

`````js
[a,b,...rest, x];
[a,,...rest, x];
[...rest,];
[a,b,...rest,];
[a,,...rest,];
[...rest,...rest1];
[a,b,...rest,...rest1];
[a,,..rest,...rest1];
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 4
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 8
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 12
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 12
                        },
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 15
                },
                "flags": 32,
                "transformFlags": 8,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 21
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 25
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 29
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 29
                        },
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 32
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 32
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 17,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 17,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 39
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 39,
                                "end": 43
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 36,
                            "end": 43
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 44
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 34,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 34,
            "end": 46
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 48,
                            "end": 49
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 51
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 52,
                                "end": 55
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 59
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 59
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 48,
                    "end": 60
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 46,
                "end": 61
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 46,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 64,
                            "end": 65
                        },
                        {
                            "kind": 230,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 66,
                            "end": 66
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 67,
                                "end": 70
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 70,
                                "end": 74
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 67,
                            "end": 74
                        }
                    ],
                    "trailingComma": true,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 64,
                    "end": 75
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 62,
                "end": 76
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 62,
            "end": 77
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 79,
                                "end": 82
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 82,
                                "end": 86
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 79,
                            "end": 86
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 87,
                                "end": 90
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest1",
                                "rawText": "rest1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 90,
                                "end": 95
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 87,
                            "end": 95
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 79,
                    "end": 95
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 77,
                "end": 96
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 77,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 99,
                            "end": 100
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 101,
                            "end": 102
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 103,
                                "end": 106
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest",
                                "rawText": "rest",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 106,
                                "end": 110
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 103,
                            "end": 110
                        },
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 111,
                                "end": 114
                            },
                            "argument": {
                                "kind": 134299649,
                                "text": "rest1",
                                "rawText": "rest1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 114,
                                "end": 119
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 111,
                            "end": 119
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 99,
                    "end": 119
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 97,
                "end": 120
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 97,
            "end": 121
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 129,
                        "member": {
                            "kind": 129,
                            "member": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 123,
                                            "end": 124
                                        },
                                        {
                                            "kind": 230,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 125,
                                            "end": 125
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 123,
                                    "end": 126
                                },
                                "flags": 33,
                                "transformFlags": 8,
                                "start": 121,
                                "end": 126
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "rawText": "",
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 127,
                                "end": 127
                            },
                            "flags": 33,
                            "transformFlags": 2,
                            "start": 121,
                            "end": 127
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "rest",
                            "rawText": "rest",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 128,
                            "end": 132
                        },
                        "flags": 33,
                        "transformFlags": 2,
                        "start": 121,
                        "end": 132
                    },
                    {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 133,
                        "end": 133
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 121,
                "end": 133
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 121,
            "end": 133
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "rest1",
                "rawText": "rest1",
                "flags": 96,
                "transformFlags": 0,
                "start": 136,
                "end": 141
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 136,
            "end": 141
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 142,
            "end": 143
        }
    ],
    "isModule": false,
    "source": "[a,b,...rest, x];\n[a,,...rest, x];\n[...rest,];\n[a,b,...rest,];\n[a,,...rest,];\n[...rest,...rest1];\n[a,b,...rest,...rest1];\n[a,,..rest,...rest1];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 143
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you forgot a ']' to match the `[` token? - start: 126, end: 127
✖ Dot property must be an identifier - start: 127, end: 128
✖ Identifier expected - start: 133, end: 136
✖ '; ' expected - start: 141, end: 142

```

