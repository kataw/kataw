# Kataw parser test case

## Input

`````js
{}++
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
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 1
            },
            "flags": 128,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 768,
                    "start": 2,
                    "end": 4
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 4,
                    "end": 4
                },
                "flags": 256,
                "start": 2,
                "end": 4
            },
            "flags": 128,
            "start": 2,
            "end": 4
        }
    ],
    "isModule": false,
    "text": "{}++",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 4,
            "end": 4
        }
    ],
    "start": 0,
    "end": 4
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

