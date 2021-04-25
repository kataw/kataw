# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: async function f(){ await \n x; }
## Input

`````js
async function f(){ await \n x; }
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
            "asyncKeyword": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 768,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 14,
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
                                "kind": 208,
                                "awaitToken": {
                                    "kind": 82032,
                                    "flags": 768,
                                    "start": 19,
                                    "end": 25
                                },
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "autofix": 0,
                                    "flags": 12,
                                    "start": 25,
                                    "end": 25
                                },
                                "flags": 256,
                                "start": 19,
                                "end": 25
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 25
                        }
                    ],
                    "multiline": false,
                    "flags": 256,
                    "start": 19,
                    "end": 25
                },
                "flags": 256,
                "start": 18,
                "end": 25
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 27,
                "end": 28
            },
            "flags": 128,
            "start": 27,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 28,
                "end": 30
            },
            "flags": 128,
            "start": 28,
            "end": 31
        }
    ],
    "isModule": false,
    "text": "async function f(){ await \\n x; }",
    "fileName": "__root__",
    "flags": 0,
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
@{x2716}@ Invalid hexadecimal escape sequence - start: 25, end: 26
@{x2716}@ Expression expected - start: 25, end: 27
@{x2716}@ Unexpected token. - start: 25, end: 27
@{x2716}@ Unexpected token. - start: 25, end: 27
@{x2716}@ Statement expected - start: 25, end: 27
@{x2716}@ Unexpected token. - start: 28, end: 30
@{x2716}@ Statement expected - start: 31, end: 33

```

