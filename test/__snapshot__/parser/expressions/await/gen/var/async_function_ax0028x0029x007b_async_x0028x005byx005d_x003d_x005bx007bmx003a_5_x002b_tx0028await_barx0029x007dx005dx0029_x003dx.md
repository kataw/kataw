# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     }
## Input

`````js
var await; var f = (async function() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } });
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
                "flags": 768,
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
                                "end": 100
                            },
                            "flags": 256,
                            "start": 18,
                            "end": 100
                        },
                        "flags": 128,
                        "start": 14,
                        "end": 100
                    }
                ],
                "flags": 128,
                "start": 14,
                "end": 100
            },
            "flags": 128,
            "start": 10,
            "end": 100
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 105,
                "end": 105
            },
            "flags": 128,
            "start": 103,
            "end": 106
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 115,
            "end": 116
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function a(){     async ([y] = [{m: 5 + t(await bar)}]) => {}     } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 116
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 100, end: 103
@{x2716}@ Unexpected token. - start: 100, end: 103
@{x2716}@ Unexpected token. - start: 100, end: 103
@{x2716}@ ',' expected - start: 100, end: 103
@{x2716}@ Unexpected token. - start: 100, end: 103
@{x2716}@ Statement expected - start: 100, end: 103
@{x2716}@ Statement expected - start: 106, end: 112
@{x2716}@ Statement expected - start: 112, end: 114
@{x2716}@ Statement expected - start: 114, end: 115

```

