# Kataw parser test case

## Input

`````js
({...obj,})
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
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 0,
                                    "start": 2,
                                    "end": 5
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "obj",
                                    "rawText": "obj",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 8
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 8
                            }
                        ],
                        "trailingComma": true,
                        "flags": 16,
                        "start": 2,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "({...obj,})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

