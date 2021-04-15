# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: lhs plus-prefixed expr
> :: case: false
## Input

`````js
for (+a().b in c);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "kind": 166,
            "initializer": {
                "kind": 126,
                "operandToken": {
                    "kind": 34098,
                    "flags": 768,
                    "start": 5,
                    "end": 6
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 6,
                            "end": 7
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 8,
                            "end": 8
                        },
                        "flags": 256,
                        "start": 6,
                        "end": 9
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 10,
                        "end": 11
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 6,
                    "end": 11
                },
                "flags": 256,
                "start": 5,
                "end": 11
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 768,
                "start": 14,
                "end": 16
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 17,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "for (+a().b in c);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 14,
            "end": 16
        }
    ],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

