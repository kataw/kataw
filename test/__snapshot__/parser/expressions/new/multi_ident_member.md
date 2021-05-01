# Kataw parser test case

## Input

`````js
new a.b.c.d()
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
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 129,
                        "member": {
                            "kind": 129,
                            "member": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 0,
                                    "start": 0,
                                    "end": 3
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": " a",
                                    "flags": 96,
                                    "start": 3,
                                    "end": 5
                                },
                                "argumentList": null,
                                "flags": 32,
                                "start": 0,
                                "end": 5
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 6,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 7
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 9
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 10,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 11
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 12,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "new a.b.c.d()",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
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

