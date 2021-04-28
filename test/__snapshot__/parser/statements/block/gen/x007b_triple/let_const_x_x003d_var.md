# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: { triple
> :: case: let const x = var
## Input

`````js
{ { { let const x = var
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 249,
                        "block": {
                            "kind": 124,
                            "statements": [
                                {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "let",
                                                    "rawText": "let",
                                                    "flags": 768,
                                                    "start": 5,
                                                    "end": 9
                                                },
                                                "flags": 128,
                                                "start": 5,
                                                "end": 9
                                            },
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 37757004,
                                                    "flags": 9,
                                                    "start": 0,
                                                    "end": 15
                                                },
                                                "binding": {
                                                    "kind": 151,
                                                    "bindingList": [
                                                        {
                                                            "kind": 190,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 768,
                                                                "start": 15,
                                                                "end": 17
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "flags": 12,
                                                                "start": 19,
                                                                "end": 19
                                                            },
                                                            "flags": 128,
                                                            "start": 15,
                                                            "end": 19
                                                        }
                                                    ],
                                                    "flags": 160,
                                                    "start": 15,
                                                    "end": 19
                                                },
                                                "flags": 128,
                                                "start": 9,
                                                "end": 19
                                            },
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 19,
                                                    "start": 0,
                                                    "end": 23
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [],
                                                    "flags": 128,
                                                    "start": 23,
                                                    "end": 23
                                                },
                                                "flags": 128,
                                                "start": 19,
                                                "end": 23
                                            }
                                        ],
                                        "multiLine": false,
                                        "flags": 128,
                                        "start": 5,
                                        "end": 23
                                    },
                                    "flags": 128,
                                    "start": 3,
                                    "end": 23
                                }
                            ],
                            "multiLine": false,
                            "flags": 128,
                            "start": 3,
                            "end": 23
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 23
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "{ { { let const x = var",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 19, end: 23
✖ ',' expected - start: 19, end: 23

```

