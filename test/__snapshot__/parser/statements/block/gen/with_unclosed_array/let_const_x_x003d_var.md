# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: y
> :: test: with unclosed array
> :: case: let const x = var
## Input

`````js
{[ let const x = var
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
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "let",
                                        "rawText": "let",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 6
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 6
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 6
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 6
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 37757004,
                            "flags": 0,
                            "start": 6,
                            "end": 12
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
                                        "start": 12,
                                        "end": 14
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 64,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 16,
                                    "start": 12,
                                    "end": 16
                                }
                            ],
                            "flags": 16777232,
                            "start": 12,
                            "end": 16
                        },
                        "flags": 33554448,
                        "start": 6,
                        "end": 16
                    },
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 0,
                            "start": 16,
                            "end": 20
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [],
                            "flags": 16,
                            "start": 20,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 16,
                        "end": 20
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "{[ let const x = var",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 6, end: 12
✖ Expression expected - start: 16, end: 20
✖ Lexical declaration expected - start: 16, end: 20

```

