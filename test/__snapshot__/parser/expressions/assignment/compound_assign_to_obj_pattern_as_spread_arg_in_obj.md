# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
({...{x} /= y});
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
                                "kind": 224,
                                "argument": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [
                                                {
                                                    "kind": 81921,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 768,
                                                    "start": 6,
                                                    "end": 7
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "start": 6,
                                            "end": 7
                                        },
                                        "flags": 256,
                                        "start": 5,
                                        "end": 8
                                    },
                                    "operatorToken": {
                                        "kind": 4133,
                                        "flags": 768,
                                        "start": 8,
                                        "end": 11
                                    },
                                    "right": {
                                        "kind": 81921,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 768,
                                        "start": 11,
                                        "end": 13
                                    },
                                    "flags": 256,
                                    "start": 5,
                                    "end": 13
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 13
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 15
            },
            "flags": 128,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": true,
    "text": "({...{x} /= y});",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 23,
            "error": "Expression exprected. A compound assignment cannot follow an object literal",
            "start": 8,
            "end": 11
        }
    ],
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

