# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: await => async.await[foo]
## Input

`````js
var await; var f = (async function() { await => async.await[foo] });
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
                            "rawText": " await",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 10,
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
                            "rawText": " f",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 32,
                                "start": 18,
                                "end": 44
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 44
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 44
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 44
            },
            "flags": 16,
            "start": 10,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 130,
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 47,
                        "end": 53
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "await",
                        "rawText": "await",
                        "flags": 96,
                        "start": 54,
                        "end": 59
                    },
                    "flags": 32,
                    "start": 47,
                    "end": 59
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 60,
                    "end": 63
                },
                "flags": 32,
                "start": 47,
                "end": 64
            },
            "flags": 16,
            "start": 47,
            "end": 64
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 67,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "var await; var f = (async function() { await => async.await[foo] });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 44, end: 47
✖ Expected a `;` - start: 44, end: 47
✖ ',' expected - start: 44, end: 47
✖ Expected a `;` - start: 44, end: 47
✖ Statement expected - start: 44, end: 47
✖ Statement expected - start: 64, end: 66
✖ Statement expected - start: 66, end: 67

```

