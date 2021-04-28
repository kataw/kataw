# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: await.b[c] => async
## Input

`````js
var await; var f = (async function() { await.b[c] => async });
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
                            "text": "await",
                            "rawText": "await",
                            "flags": 768,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 9
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 10,
                "start": 0,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 768,
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 256,
                                "start": 18,
                                "end": 49
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 49
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 49
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 49
            },
            "flags": 128,
            "start": 10,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 768,
                "start": 52,
                "end": 58
            },
            "flags": 128,
            "start": 52,
            "end": 58
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 61,
            "end": 62
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { await.b[c] => async });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 62
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 44, end: 45
✖ ',' expected - start: 49, end: 52
✖ Statement expected - start: 49, end: 52
✖ Statement expected - start: 58, end: 60
✖ Statement expected - start: 60, end: 61

```

