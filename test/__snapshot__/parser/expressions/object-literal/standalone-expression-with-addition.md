# Kataw parser test case

## Input

`````js
({["x" + "y"]: 10});
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
                                    "start": 14,
                                    "end": 17
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 768,
                                            "start": 3,
                                            "end": 6
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 768,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 768,
                                            "start": 8,
                                            "end": 12
                                        },
                                        "flags": 256,
                                        "start": 3,
                                        "end": 12
                                    },
                                    "flags": 256,
                                    "start": 2,
                                    "end": 13
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "({[\"x\" + \"y\"]: 10});",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

