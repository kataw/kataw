# Kataw parser test case

## Input

`````js
async (a, ...true=b) => a;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 7,
                        "end": 8
                    },
                    {
                        "kind": 223,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 9,
                            "start": 0,
                            "end": 13
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 19
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 256,
            "start": 0,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 23,
                "end": 25
            },
            "flags": 128,
            "start": 23,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "async (a, ...true=b) => a;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 17, end: 18
✖ Statement expected - start: 20, end: 23

```

