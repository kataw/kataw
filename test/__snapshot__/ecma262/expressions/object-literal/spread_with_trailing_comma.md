# Kataw parser test case

## Input

`````js
({...obj,})
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
                                    "flags": 64,
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
                                "flags": 1073741856,
                                "start": 2,
                                "end": 8
                            }
                        ],
                        "trailingComma": true,
                        "flags": 16,
                        "start": 2,
                        "end": 9
                    },
                    "flags": 48,
                    "start": 1,
                    "end": 10
                },
                "flags": 0,
                "start": 34,
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

({...obj});
```

### Diagnostics

```javascript
✔ No errors
```

