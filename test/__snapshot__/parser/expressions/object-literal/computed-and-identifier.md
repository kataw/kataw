# Kataw parser test case

## Input

`````js
({[x]: 10, y: 20});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
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
                                    "kind": 134299649,
                                    "text": 10,
                                    "rawText": "10",
                                    "flags": 768,
                                    "start": 6,
                                    "end": 9
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 768,
                                        "start": 3,
                                        "end": 4
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 5
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 9
                            },
                            {
                                "kind": 219,
                                "left": {
                                    "kind": 134299649,
                                    "text": 20,
                                    "rawText": "20",
                                    "flags": 768,
                                    "start": 13,
                                    "end": 16
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 10,
                                    "end": 12
                                },
                                "flags": 256,
                                "start": 10,
                                "end": 16
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 17
                },
                "flags": 256,
                "start": 0,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "({[x]: 10, y: 20});",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

