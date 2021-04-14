# Kataw parser test case

## Input

`````js
x[super.foo]
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
                "kind": 130,
                "member": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 225,
                        "superKeyword": {
                            "kind": 4259935,
                            "flags": 768,
                            "start": 2,
                            "end": 7
                        },
                        "flags": 768,
                        "start": 2,
                        "end": 7
                    },
                    "expression": {
                        "kind": 81921,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 8,
                        "end": 11
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 2,
                    "end": 11
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "text": "x[super.foo]",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 73,
            "error": "'super' can only be referenced in members of derived classes or object literal expressions",
            "start": 7,
            "end": 8
        }
    ],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

