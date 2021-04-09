# Kataw parser test case

## Input

`````js
[

  ;

]!
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "autofix": 0,
                    "flags": 256,
                    "start": 1,
                    "end": 1
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 1
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 65584,
                    "autofix": 0,
                    "flags": 0,
                    "start": 9,
                    "end": 10
                },
                "expression": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 10,
                    "end": 10
                },
                "autofix": 0,
                "flags": 256,
                "start": 9,
                "end": 10
            },
            "autofix": 0,
            "flags": 128,
            "start": 9,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "[\n\n  ;\n\n]!",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 1,
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 6,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 10,
            "end": 10
        }
    ],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

