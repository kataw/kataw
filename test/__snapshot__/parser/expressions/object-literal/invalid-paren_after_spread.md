# Kataw parser test case

## Input

`````js
+{...x)
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
                "kind": 126,
                "operandToken": {
                    "kind": 34098,
                    "flags": 0,
                    "start": 512,
                    "end": 1
                },
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 2,
                                    "start": 0,
                                    "end": 5
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 5,
                                    "end": 6
                                },
                                "flags": 256,
                                "start": 2,
                                "end": 6
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 6
                },
                "flags": 256,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "+{...x)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 7
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 6, end: 7
✖ Statement expected - start: 6, end: 7

```

