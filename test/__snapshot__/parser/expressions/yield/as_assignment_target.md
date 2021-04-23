# Kataw parser test case

## Input

`````js
{ yield = {}; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 768,
                                "start": 1,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 7,
                                "end": 9
                            },
                            "right": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 11,
                                    "end": 11
                                },
                                "flags": 256,
                                "start": 9,
                                "end": 12
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 12
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 13
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 13
            },
            "flags": 128,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "{ yield = {}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

