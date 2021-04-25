# Kataw parser test case

## Input

`````js
foo: while(z) if (x) continue foo
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
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "statement": {
                "kind": 154,
                "whileKeyword": {
                    "kind": 37757028,
                    "flags": 768,
                    "start": 4,
                    "end": 10
                },
                "expression": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 768,
                    "start": 11,
                    "end": 12
                },
                "statement": {
                    "kind": 164,
                    "ifKeyword": {
                        "kind": 37757019,
                        "flags": 768,
                        "start": 13,
                        "end": 16
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 18,
                        "end": 19
                    },
                    "consequent": {
                        "kind": 172,
                        "continueKeyword": {
                            "kind": 37757009,
                            "flags": 768,
                            "start": 20,
                            "end": 29
                        },
                        "label": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 29,
                            "end": 33
                        },
                        "flags": 128,
                        "start": 20,
                        "end": 33
                    },
                    "elseKeyword": null,
                    "alternate": null,
                    "flags": 128,
                    "start": 13,
                    "end": 33
                },
                "flags": 128,
                "start": 4,
                "end": 33
            },
            "flags": 128,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "foo: while(z) if (x) continue foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

