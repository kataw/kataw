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
                "kind": 165,
                "forKeyword": {
                    "kind": 37757017,
                    "flags": 0,
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
                        "flags": 0,
                        "start": 13,
                        "end": 22
                    },
                    "label": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 22,
                        "end": 26
                    },
                    "flags": 16,
                    "start": 13,
                    "end": 26
                },
                "flags": 16,
                "start": 4,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "foo: for (;;) continue foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
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

