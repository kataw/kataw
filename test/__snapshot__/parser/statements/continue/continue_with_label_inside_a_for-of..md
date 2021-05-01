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
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 0,
                "end": 3
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "foo",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 3
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 3,
                "end": 4
            },
            "statement": {
                "kind": 167,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 0,
                    "start": 4,
                    "end": 8
                },
                "ofKeyword": {
                    "kind": 16793717,
                    "flags": 64,
                    "start": 11,
                    "end": 14
                },
                "initializer": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 10,
                    "end": 11
                },
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": " y",
                    "flags": 96,
                    "start": 14,
                    "end": 16
                },
                "statement": {
                    "kind": 172,
                    "continueKeyword": {
                        "kind": 37757009,
                        "flags": 0,
                        "start": 17,
                        "end": 26
                    },
                    "label": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": " foo",
                        "flags": 96,
                        "start": 26,
                        "end": 30
                    },
                    "flags": 16,
                    "start": 17,
                    "end": 30
                },
                "awaitKeyword": null,
                "flags": 16,
                "start": 4,
                "end": 30
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "foo: for (x of y) continue foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

