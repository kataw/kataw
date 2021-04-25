# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: function generator
> :: case: yield * \n { yield: 12 }
## Input

`````js
function * gen() { function not_gen() { yield * \n { yield: 12 } }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 768,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "gen",
                "rawText": "gen",
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 14,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 768,
                                "start": 18,
                                "end": 27
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "not_gen",
                                "rawText": "not_gen",
                                "flags": 768,
                                "start": 27,
                                "end": 35
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 35,
                                "end": 37
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 768,
                                                    "start": 39,
                                                    "end": 45
                                                },
                                                "operatorToken": {
                                                    "kind": 67143222,
                                                    "flags": 768,
                                                    "start": 45,
                                                    "end": 47
                                                },
                                                "right": {
                                                    "kind": 16637,
                                                    "text": "",
                                                    "autofix": 0,
                                                    "flags": 12,
                                                    "start": 47,
                                                    "end": 47
                                                },
                                                "flags": 256,
                                                "start": 39,
                                                "end": 47
                                            },
                                            "flags": 128,
                                            "start": 39,
                                            "end": 47
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 39,
                                    "end": 47
                                },
                                "flags": 256,
                                "start": 37,
                                "end": 47
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 128,
                            "start": 18,
                            "end": 47
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 18,
                    "end": 47
                },
                "flags": 256,
                "start": 16,
                "end": 47
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 47
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 49,
                "end": 50
            },
            "flags": 128,
            "start": 49,
            "end": 50
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 768,
                            "start": 52,
                            "end": 58
                        },
                        "flags": 128,
                        "start": 52,
                        "end": 58
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 52,
                "end": 58
            },
            "flags": 128,
            "start": 50,
            "end": 58
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 12,
                "rawText": "12",
                "flags": 768,
                "start": 59,
                "end": 62
            },
            "flags": 128,
            "start": 59,
            "end": 62
        }
    ],
    "isModule": false,
    "text": "function * gen() { function not_gen() { yield * \\n { yield: 12 } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Invalid hexadecimal escape sequence - start: 47, end: 48
@{x2716}@ Expression expected - start: 47, end: 49
@{x2716}@ Unexpected token. - start: 47, end: 49
@{x2716}@ Unexpected token. - start: 47, end: 49
@{x2716}@ Unexpected token. - start: 47, end: 49
@{x2716}@ Statement expected - start: 47, end: 49
@{x2716}@ Unexpected token. - start: 50, end: 52
@{x2716}@ Unexpected token. - start: 58, end: 59
@{x2716}@ Unexpected token. - start: 58, end: 59
@{x2716}@ Statement expected - start: 58, end: 59
@{x2716}@ Statement expected - start: 62, end: 64
@{x2716}@ Statement expected - start: 64, end: 66
@{x2716}@ Statement expected - start: 66, end: 67

```

