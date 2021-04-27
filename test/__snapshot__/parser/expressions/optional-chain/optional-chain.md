# Kataw parser test case

## Input

`````js
arr?.[i + 1]
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
                "kind": 205,
                "member": {
                    "kind": 134299649,
                    "text": "arr",
                    "rawText": "arr",
                    "flags": 768,
                    "start": 0,
                    "end": 3
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 203,
                        "chain": null,
                        "expression": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "i",
                                "rawText": "i",
                                "flags": 768,
                                "start": 6,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 34098,
                                "flags": 768,
                                "start": 7,
                                "end": 9
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 768,
                                "start": 9,
                                "end": 11
                            },
                            "flags": 256,
                            "start": 6,
                            "end": 11
                        },
                        "flags": 256,
                        "start": 5,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "arr?.[i + 1]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

