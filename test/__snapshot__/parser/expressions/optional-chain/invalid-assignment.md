# Kataw parser test case

## Input

`````js
x?.[y] = 0;

x?.y = 0;
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
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
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
                        "kind": 206,
                        "chain": {
                            "kind": 203,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 4,
                                "end": 5
                            },
                            "flags": 536870944,
                            "start": 3,
                            "end": 5
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 6
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 8,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "start": 14,
                        "end": 16
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 11,
                        "end": 14
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
                                "start": 16,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 17
                        },
                        "flags": 32,
                        "start": 16,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 11,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 19,
                    "end": 21
                },
                "flags": 32,
                "start": 11,
                "end": 21
            },
            "flags": 16,
            "start": 11,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "x?.[y] = 0;\n\nx?.y = 0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression may not be an optional property access - start: 3, end: 8
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 6, end: 8
✖ The left-hand side of an assignment expression may not be an optional property access - start: 16, end: 19
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 17, end: 19

```

