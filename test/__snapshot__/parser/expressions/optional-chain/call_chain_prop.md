# Kataw parser test case

## Input

`````js
c?.(d)?.[e]
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 0,
                    "start": 6,
                    "end": 8
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 1,
                        "end": 3
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
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
                                        "flags": 96,
                                        "start": 4,
                                        "end": 5
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 4,
                                "end": 5
                            },
                            "flags": 268435488,
                            "start": 3,
                            "end": 6
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 6
                    },
                    "flags": 32,
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
                            "flags": 96,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 536870944,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 11
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
    "source": "c?.(d)?.[e]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

 = ?.[e];
```

### Diagnostics

```javascript
✔ No errors
```

