# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: s
> :: test: do parens
> :: case: function while
## Input

`````js
do( function while while
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 18,
                "end": 18
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 12,
                "end": 18
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 768,
                            "start": 3,
                            "end": 12
                        },
                        "generatorToken": null,
                        "name": null,
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 12,
                            "end": 12
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "multiline": false,
                                "flags": 256,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 256,
                            "start": 12,
                            "end": 12
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 256,
                        "start": 3,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 2,
                    "end": 12
                },
                "flags": 128,
                "start": 2,
                "end": 12
            },
            "flags": 128,
            "start": 0,
            "end": 18
        },
        {
            "kind": 154,
            "whileKeyword": {
                "kind": 37757028,
                "flags": 768,
                "start": 18,
                "end": 24
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 24,
                "end": 24
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 24,
                    "end": 24
                },
                "flags": 128,
                "start": 24,
                "end": 24
            },
            "flags": 128,
            "start": 18,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "do( function while while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 12, end: 18
@{x2716}@ Expression expected - start: 18, end: 24
@{x2716}@ Expression expected - start: 24, end: 24
@{x2716}@ Expression expected - start: 24, end: 24

```

