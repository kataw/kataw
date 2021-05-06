# Kataw parser test case

## Input

`````js
foo: if (x) while(z) continue foo
`````

## Output
### CST

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
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 0,
                    "start": 4,
                    "end": 7
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 9,
                    "end": 10
                },
                "consequent": {
                    "kind": 154,
                    "whileKeyword": {
                        "kind": 37757028,
                        "flags": 0,
                        "start": 11,
                        "end": 17
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "start": 18,
                        "end": 19
                    },
                    "statement": {
                        "kind": 172,
                        "continueKeyword": {
                            "kind": 37757009,
                            "flags": 0,
                            "start": 20,
                            "end": 29
                        },
                        "label": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 29,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 20,
                        "end": 33
                    },
                    "flags": 16,
                    "start": 11,
                    "end": 33
                },
                "elseKeyword": null,
                "alternate": null,
                "flags": 16,
                "start": 4,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "foo: if (x) while(z) continue foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
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

