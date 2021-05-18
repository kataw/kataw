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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 124,
                        "block": {
                            "kind": 249,
                            "statements": [
                                {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "let",
                                                    "rawText": "let",
                                                    "flags": 96,
                                                    "start": 5,
                                                    "end": 9
                                                },
                                                "flags": 16,
                                                "start": 5,
                                                "end": 9
                                            },
                                            {
                                                "kind": 162,
                                                "lexicalKeyword": {
                                                    "kind": 37757004,
                                                    "flags": 0,
                                                    "start": 9,
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
                                                                "flags": 96,
                                                                "start": 15,
                                                                "end": 17
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 16637,
                                                                "text": "",
                                                                "flags": 64,
                                                                "start": 19,
                                                                "end": 19
                                                            },
                                                            "flags": 16,
                                                            "start": 15,
                                                            "end": 19
                                                        }
                                                    ],
                                                    "flags": 16777232,
                                                    "start": 15,
                                                    "end": 19
                                                },
                                                "flags": 33554448,
                                                "start": 9,
                                                "end": 19
                                            },
                                            {
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 0,
                                                    "start": 19,
                                                    "end": 23
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [],
                                                    "flags": 16,
                                                    "start": 23,
                                                    "end": 23
                                                },
                                                "flags": 16,
                                                "start": 19,
                                                "end": 23
                                            }
                                        ],
                                        "flags": 16,
                                        "start": 5,
                                        "end": 23
                                    },
                                    "flags": 16,
                                    "start": 3,
                                    "end": 23
                                }
                            ],
                            "flags": 16,
                            "start": 3,
                            "end": 23
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "{ { { let const x = var",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 9, end: 15
✖ Expression expected - start: 19, end: 23
✖ Lexical declaration expected - start: 19, end: 23

```

