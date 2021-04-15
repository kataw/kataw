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
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 162,
            "lexicalKeyword": null,
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
                            "autofix": 0,
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
                "flags": 768,
                "start": 16,
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
    "isModule": false,
    "text": "{[ let const x = var",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 6,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 16,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 16,
            "end": 20
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 20
        }
    ],
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

