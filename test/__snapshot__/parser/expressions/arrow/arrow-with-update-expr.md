# Kataw parser test case

## Input

`````js
(a, b++) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 81921,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 127,
                            "operandToken": {
                                "kind": 196635,
                                "flags": 768,
                                "start": 5,
                                "end": 7
                            },
                            "expression": {
                                "kind": 81921,
                                "text": "b",
                                "rawText": "b",
                                "flags": 768,
                                "start": 3,
                                "end": 5
                            },
                            "flags": 256,
                            "start": 0,
                            "end": 7
                        }
                    ],
                    "flags": 256,
                    "start": 0,
                    "end": 8
                },
                "flags": 256,
                "start": 0,
                "end": 8
            },
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 13,
                "end": 13
            },
            "flags": 128,
            "start": 11,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "(a, b++) => {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 8,
            "end": 11
        }
    ],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

