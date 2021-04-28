# Kataw parser test case

## Input

`````js
c?.(d)?.[e]
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
                "chainToken": {
                    "kind": 393240,
                    "flags": 6,
                    "start": 0,
                    "end": 8
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 1,
                        "start": 0,
                        "end": 3
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 0,
                        "end": 1
                    },
                    "chain": {
                        "kind": 206,
                        "chain": {
                            "kind": 204,
                            "chain": null,
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "d",
                                        "rawText": "d",
                                        "flags": 768,
                                        "start": 4,
                                        "end": 5
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 4,
                                "end": 5
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 6
                        },
                        "flags": 256,
                        "start": 3,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 6
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 203,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "e",
                            "rawText": "e",
                            "flags": 768,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 256,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 256,
                    "start": 8,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 11
            },
            "flags": 128,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "c?.(d)?.[e]",
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

