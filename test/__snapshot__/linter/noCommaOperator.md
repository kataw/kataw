# Kataw parser test case

## Input

`````js
a, b, c;

(a, b, c);
`````

## Options

### Parser Options

`````js
{ lint: { noCommaOperator: true } }
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 4
                    },
                    {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 7
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 12
                        },
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 15
                        },
                        {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 18
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 8,
                    "end": 19
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 8,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 8,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "a, b, c;\n\n(a, b, c);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Do not use comma operator here because it can be easily misunderstood or lead to unintended bugs - start: 0, end: 7
✖ Do not use comma operator here because it can be easily misunderstood or lead to unintended bugs - start: 8, end: 19

```

