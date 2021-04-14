# Kataw parser test case

## Input

`````js
foo: for (;;) continue foo
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
                "kind": 165,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 768,
                    "start": 4,
                    "end": 8
                },
                "initializer": null,
                "condition": null,
                "incrementor": null,
                "statement": {
                    "kind": 172,
                    "continueKeyword": {
                        "kind": 37757009,
                        "flags": 768,
                        "start": 13,
                        "end": 22
                    },
                    "label": {
                        "kind": 81921,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 768,
                        "start": 22,
                        "end": 26
                    },
                    "flags": 128,
                    "start": 13,
                    "end": 26
                },
                "flags": 128,
                "start": 4,
                "end": 26
            },
            "flags": 128,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "foo: for (;;) continue foo",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
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

