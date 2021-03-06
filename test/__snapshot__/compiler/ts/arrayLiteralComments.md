# Kataw parser test case

## Input

`````js
var testArrayWithFunc = [
    // Function comment
    function() {
        let x = 1;
    },
    // String comment
    '1',
    // Numeric comment
    2,
    // Object comment
    { a: 1 },
    // Array comment
    [1, 2, 3]
]
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var testArrayWithFunc = [\n    // Function comment\n    function() {\n        let x = 1;\n    },\n    // String comment\n    '1',\n    // Numeric comment\n    2,\n    // Object comment\n    { a: 1 },\n    // Array comment\n    [1, 2, 3]\n]",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "testArrayWithFunc",
                                "rawText": "testArrayWithFunc",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 21
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 8456285,
                                            "name": null,
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 63,
                                                "end": 64
                                            },
                                            "contents": {
                                                "kind": 91,
                                                "functionStatementList": {
                                                    "kind": 94,
                                                    "statements": [
                                                        {
                                                            "kind": 142,
                                                            "isConst": false,
                                                            "binding": {
                                                                "kind": 31,
                                                                "bindingList": [
                                                                    {
                                                                        "kind": 141,
                                                                        "binding": {
                                                                            "kind": 131102,
                                                                            "text": "x",
                                                                            "rawText": "x",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 1025,
                                                                            "start": 78,
                                                                            "end": 80
                                                                        },
                                                                        "exclamation": false,
                                                                        "type": null,
                                                                        "initializer": {
                                                                            "kind": 4261540,
                                                                            "text": 1,
                                                                            "rawText": "1",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 82,
                                                                            "end": 84
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 78,
                                                                        "end": 84
                                                                    }
                                                                ],
                                                                "flags": 16,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 78,
                                                                "end": 84
                                                            },
                                                            "flags": 16400,
                                                            "intersects": false,
                                                            "transformFlags": 769,
                                                            "start": 66,
                                                            "end": 85
                                                        }
                                                    ],
                                                    "multiline": true,
                                                    "flags": 16384,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 66,
                                                    "end": 85
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 64,
                                                "end": 91
                                            },
                                            "typeParameters": null,
                                            "type": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 91
                                        },
                                        {
                                            "kind": 4261583,
                                            "text": "1",
                                            "rawText": "1",
                                            "flags": 16793600,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 92,
                                            "end": 122
                                        },
                                        {
                                            "kind": 4261540,
                                            "text": 2,
                                            "rawText": "2",
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 123,
                                            "end": 152
                                        },
                                        {
                                            "kind": 67224232,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 181,
                                                            "end": 183
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 184,
                                                            "end": 186
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 181,
                                                        "end": 186
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 181,
                                                "end": 186
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 153,
                                            "end": 188
                                        },
                                        {
                                            "kind": 67207686,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 4261540,
                                                        "text": 1,
                                                        "rawText": "1",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 216,
                                                        "end": 217
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 2,
                                                        "rawText": "2",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 218,
                                                        "end": 220
                                                    },
                                                    {
                                                        "kind": 4261540,
                                                        "text": 3,
                                                        "rawText": "3",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 221,
                                                        "end": 223
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 216,
                                                "end": 223
                                            },
                                            "flags": 16384,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 189,
                                            "end": 224
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": true,
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 25,
                                    "end": 224
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 226
                            },
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 226
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 226
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 226
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 226
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 226
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

