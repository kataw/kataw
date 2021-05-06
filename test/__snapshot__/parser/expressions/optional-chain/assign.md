# Kataw parser test case

## Input

`````js
foo?.bar = x
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
                        "flags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 0,
                        "end": 3
                    },
                    "chain": {
                        "kind": 206,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 5,
                                "end": 8
                            },
                            "flags": 32,
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
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 8,
                    "end": 10
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "foo?.bar = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression may not be an optional property access - start: 5, end: 10

```

