# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: }} let function const {
## Input

`````js
{ [catch] }} let function const {
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
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 3
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 3
            },
            "flags": 128,
            "start": 0,
            "end": 3
        },
        {
            "kind": 159,
            "tryKeyword": null,
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 8,
                    "end": 8
                },
                "flags": 128,
                "start": 8,
                "end": 8
            },
            "catchClause": null,
            "finallyKeyword": null,
            "finallyBlock": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 9,
                    "end": 9
                },
                "flags": 128,
                "start": 9,
                "end": 9
            },
            "flags": 128,
            "start": 3,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "let",
                "rawText": "let",
                "flags": 768,
                "start": 12,
                "end": 16
            },
            "flags": 128,
            "start": 12,
            "end": 16
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 16,
                "end": 25
            },
            "generatorToken": null,
            "name": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 25,
                "end": 25
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 25,
                "end": 25
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "multiline": false,
                    "flags": 256,
                    "start": 25,
                    "end": 25
                },
                "flags": 256,
                "start": 25,
                "end": 25
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 16,
            "end": 25
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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 33,
                                "end": 33
                            },
                            "flags": 256,
                            "start": 31,
                            "end": 33
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 31,
                        "end": 33
                    }
                ],
                "flags": 160,
                "start": 31,
                "end": 33
            },
            "flags": 128,
            "start": 25,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "{ [catch] }} let function const {",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 3,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 9
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 9,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 11,
            "end": 12
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 25
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 25,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25,
            "end": 31
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 33,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 13,
            "error": "Missing initializer in const declaration",
            "start": 33,
            "end": 33
        }
    ],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

