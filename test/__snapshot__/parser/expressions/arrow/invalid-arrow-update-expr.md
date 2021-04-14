# Kataw parser test case

## Input

`````js
(a++) => {}
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
                "kind": 121,
                "expression": {
                    "kind": 127,
                    "operandToken": {
                        "kind": 196635,
                        "flags": 768,
                        "start": 2,
                        "end": 4
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 1,
                        "end": 2
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 4
                },
                "flags": 256,
                "start": 0,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 10,
                "end": 10
            },
            "flags": 128,
            "start": 8,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "(a++) => {}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 5,
            "end": 8
        }
    ],
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

