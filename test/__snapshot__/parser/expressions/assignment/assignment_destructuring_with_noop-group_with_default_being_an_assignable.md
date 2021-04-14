# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
({a:(b) = c})
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 81921,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 768,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "flags": 256,
                                        "start": 4,
                                        "end": 7
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 768,
                                        "start": 7,
                                        "end": 9
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 768,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 11
                                },
                                "right": {
                                    "kind": 81921,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 2,
                                    "end": 3
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "({a:(b) = c})",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

