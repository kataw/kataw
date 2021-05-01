# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: var foo = yield = 1;
## Input

`````js
var foo = yield = 1;
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
                            "original": "foo",
                            "text": "foo",
                            "rawText": " foo",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "original": "yield",
                                "text": "yield",
                                "rawText": " yield",
                                "flags": 96,
                                "start": 9,
                                "end": 15
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 15,
                                "end": 17
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "original": "1",
                                "rawText": " 1",
                                "flags": 96,
                                "start": 17,
                                "end": 19
                            },
                            "flags": 32,
                            "start": 9,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 19
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "var foo = yield = 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
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

