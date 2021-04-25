# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: yield * \n { yield: 12 }
## Input

`````js
function not_gen() { yield * \n { yield: 12 } }}
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
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 768,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 16,
                "end": 18
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
                                    "start": 20,
                                    "end": 26
                                },
                                "operatorToken": {
                                    "kind": 67143222,
                                    "flags": 768,
                                    "start": 26,
                                    "end": 28
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 256,
                                "start": 20,
                                "end": 28
                            },
                            "flags": 128,
                            "start": 20,
                            "end": 28
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 20,
                    "end": 28
                },
                "flags": 256,
                "start": 18,
                "end": 28
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 128,
            "start": 0,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 30,
                "end": 31
            },
            "flags": 128,
            "start": 30,
            "end": 31
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
                            "start": 33,
                            "end": 39
                        },
                        "flags": 128,
                        "start": 33,
                        "end": 39
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 33,
                "end": 39
            },
            "flags": 128,
            "start": 31,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 12,
                "rawText": "12",
                "flags": 768,
                "start": 40,
                "end": 43
            },
            "flags": 128,
            "start": 40,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "function not_gen() { yield * \\n { yield: 12 } }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Invalid hexadecimal escape sequence - start: 28, end: 29
@{x2716}@ Expression expected - start: 28, end: 30
@{x2716}@ Unexpected token. - start: 28, end: 30
@{x2716}@ Unexpected token. - start: 28, end: 30
@{x2716}@ Statement expected - start: 28, end: 30
@{x2716}@ Unexpected token. - start: 31, end: 33
@{x2716}@ Unexpected token. - start: 39, end: 40
@{x2716}@ Unexpected token. - start: 39, end: 40
@{x2716}@ Statement expected - start: 39, end: 40
@{x2716}@ Statement expected - start: 43, end: 45
@{x2716}@ Statement expected - start: 45, end: 47
@{x2716}@ Statement expected - start: 47, end: 48

```

