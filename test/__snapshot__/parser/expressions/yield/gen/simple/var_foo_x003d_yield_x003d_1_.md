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
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 768,
                                "start": 9,
                                "end": 15
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 15,
                                "end": 17
                            },
                            "right": {
                                "kind": 134299649,
                                "text": 1,
                                "rawText": "1",
                                "flags": 768,
                                "start": 17,
                                "end": 19
                            },
                            "flags": 256,
                            "start": 9,
                            "end": 19
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 19
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "var foo = yield = 1;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

