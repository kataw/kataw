# Kataw parser test case

## Input

`````js
{x: 42};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "labels": [
                            {
                                "kind": 256,
                                "label": "x",
                                "iterationStatement": false,
                                "flags": 16,
                                "start": 1,
                                "end": 2
                            }
                        ],
                        "colonToken": {
                            "kind": 21,
                            "flags": 0,
                            "start": 2,
                            "end": 3
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 3,
                                "end": 6
                            },
                            "flags": 16,
                            "start": 3,
                            "end": 6
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 6
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 7
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 7,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "{x: 42};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
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

