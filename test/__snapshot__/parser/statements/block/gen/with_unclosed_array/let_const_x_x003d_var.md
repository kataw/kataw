# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: let const x = var
## Input

`````js
{[ let const x = var
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
                                        "flags": 768,
                                        "start": 2,
                                        "end": 6
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 2,
                                "end": 6
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 6
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 6
                    },
                    {
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 37757004,
                            "flags": 6,
                            "start": 0,
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
                                        "flags": 768,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 16637,
                                        "text": "",
                                        "flags": 12,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 128,
                                    "start": 12,
                                    "end": 16
                                }
                            ],
                            "flags": 160,
                            "start": 12,
                            "end": 16
                        },
                        "flags": 128,
                        "start": 6,
                        "end": 16
                    },
                    {
                        "kind": 155,
                        "declareKeyword": null,
                        "varKeyword": {
                            "kind": 37757002,
                            "flags": 16,
                            "start": 0,
                            "end": 20
                        },
                        "declarationList": {
                            "kind": 156,
                            "declarations": [],
                            "flags": 128,
                            "start": 20,
                            "end": 20
                        },
                        "flags": 128,
                        "start": 16,
                        "end": 20
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 20
            },
            "flags": 128,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "{[ let const x = var",
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
✖ ',' expected - start: 6, end: 12
✖ Expression expected - start: 16, end: 20
✖ ',' expected - start: 16, end: 20

```

