# Kataw parser test case

## Input

`````js
(a?.(b)).c
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
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 64,
                            "start": 2,
                            "end": 4
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 204,
                                "chain": null,
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 6
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 5,
                                    "end": 6
                                },
                                "flags": 268435488,
                                "start": 4,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 4,
                            "end": 7
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 7
                    },
                    "flags": 0,
                    "start": 32,
                    "end": 8
                },
                "expression": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 9,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "(a?.(b)).c",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

(a?.(b)).c;
```

### Diagnostics

```javascript
✔ No errors
```

