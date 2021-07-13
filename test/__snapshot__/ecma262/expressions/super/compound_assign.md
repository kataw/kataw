# Kataw parser test case

## Input

`````js
foo?.bar *= x
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
                        "transformFlags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 3
                    },
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 8
                            },
                            "flags": 536870944,
                            "transformFlags": 2,
                            "start": 5,
                            "end": 8
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 8
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 4132,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 11
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 13
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "foo?.bar *= x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression may not be an optional property access - start: 5, end: 11
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 8, end: 11

```

