# Kataw parser test case

## Input

`````js
foo(a, b, c)
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
                    "kind": 134299649,
                    "original": "foo",
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "original": "a",
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 4,
                            "end": 5
                        },
                        {
                            "kind": 134299649,
                            "original": "b",
                            "text": "b",
                            "rawText": " b",
                            "flags": 96,
                            "start": 6,
                            "end": 8
                        },
                        {
                            "kind": 134299649,
                            "original": "c",
                            "text": "c",
                            "rawText": " c",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 4,
                    "end": 11
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
    "source": "foo(a, b, c)",
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
✔ No errors
```

