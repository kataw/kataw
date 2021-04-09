# Kataw parser test case

## Input

`````js
(a, foo ? bar : baz) => {}
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
                            "value": "a",
                            "autofix": 0,
                            "flags": 768,
                            "start": 1,
                            "end": 2
                        },
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 81921,
                                "value": "foo",
                                "autofix": 0,
                                "flags": 768,
                                "start": 3,
                                "end": 7
                            },
                            "questionToken": {
                                "kind": 22,
                                "autofix": 0,
                                "flags": 0,
                                "start": 7,
                                "end": 9
                            },
                            "consequent": {
                                "kind": 81921,
                                "value": "bar",
                                "autofix": 0,
                                "flags": 768,
                                "start": 9,
                                "end": 13
                            },
                            "colonToken": {
                                "kind": 21,
                                "autofix": 0,
                                "flags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "alternate": {
                                "kind": 81921,
                                "value": "baz",
                                "autofix": 0,
                                "flags": 768,
                                "start": 15,
                                "end": 19
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 0,
                            "end": 19
                        }
                    ],
                    "autofix": 0,
                    "flags": 256,
                    "start": 0,
                    "end": 20
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 20
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 25,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 23,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "(a, foo ? bar : baz) => {}",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 20,
            "end": 23
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 20,
            "end": 23
        }
    ],
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

