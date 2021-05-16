# Kataw parser test case

## Input

`````js
x?.[]

x?.y?.[]

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
                    "start": 11,
                    "end": 13
                },
                "member": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 0,
                        "start": 8,
                        "end": 10
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 0,
                            "end": 1
                        },
                        "chain": {
                            "kind": 536871114,
                            "chain": {
                                "kind": 206,
                                "chain": null,
                                "flags": 32,
                                "start": 3,
                                "end": 5
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 5,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 8
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 8
                    },
                    "chain": {
                        "kind": 206,
                        "chain": {
                            "kind": 536871114,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 10,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 11
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 11
                },
                "chain": {
                    "kind": 206,
                    "chain": null,
                    "flags": 32,
                    "start": 13,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "x?.[]\n\nx?.y?.[]\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An member access expression should take an argument. - start: 4, end: 5
✖ An member access expression should take an argument. - start: 14, end: 15

```

