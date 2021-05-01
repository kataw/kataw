# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var e = (await, f);
## Input

`````js
var e = (await, f);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "original": "e",
                            "text": "e",
                            "rawText": " e",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "expressions": [
                                    {
                                        "kind": 134299649,
                                        "original": "await",
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 9,
                                        "end": 14
                                    },
                                    {
                                        "kind": 134299649,
                                        "original": "f",
                                        "text": "f",
                                        "rawText": " f",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 17
                                    }
                                ],
                                "flags": 32,
                                "start": 7,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 18
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "var e = (await, f);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
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

