# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: a = b
## Input

`````js
new a = b
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
                "kind": 125,
                "left": {
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
                        "rawText": "a",
                        "flags": 768,
                        "start": 3,
                        "end": 5
                    },
                    "argumentList": null,
                    "flags": 256,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 5,
                    "start": 512,
                    "end": 7
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 768,
                    "start": 7,
                    "end": 9
                },
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "text": "new a = b",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 5, end: 7

```

