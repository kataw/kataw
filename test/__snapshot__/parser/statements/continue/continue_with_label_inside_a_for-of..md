# Kataw parser test case

## Input

`````js
foo: for (x of y) continue foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 81921,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "statement": {
                "kind": 167,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 768,
                    "start": 4,
                    "end": 8
                },
                "initializer": {
                    "kind": 81921,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 10,
                    "end": 11
                },
                "expression": {
                    "kind": 81921,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 14,
                    "end": 16
                },
                "statement": {
                    "kind": 172,
                    "continueKeyword": {
                        "kind": 37757009,
                        "flags": 768,
                        "start": 17,
                        "end": 26
                    },
                    "label": {
                        "kind": 81921,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 26,
                        "end": 30
                    },
                    "flags": 128,
                    "start": 17,
                    "end": 30
                },
                "awaitKeyword": null,
                "flags": 128,
                "start": 4,
                "end": 30
            },
            "flags": 128,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "text": "foo: for (x of y) continue foo",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

