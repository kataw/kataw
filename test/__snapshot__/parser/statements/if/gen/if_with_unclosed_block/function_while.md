# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: function while
## Input

`````js
else {} if(x) { function while
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
                "statements": [],
                "flags": 16,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "start": 4,
            "end": 7
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 7,
                "end": 10
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 11,
                "end": 12
            },
            "consequent": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 176,
                            "declareKeyword": null,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 15,
                                "end": 24
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 16637,
                                "text": "",
                                "flags": 68,
                                "start": 24,
                                "end": 24
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 24,
                                "end": 24
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 24,
                                    "end": 24
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 24
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 16,
                            "start": 15,
                            "end": 24
                        },
                        {
                            "kind": 154,
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 0,
                                "start": 24,
                                "end": 30
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 68,
                                "start": 30,
                                "end": 30
                            },
                            "statement": {
                                "kind": 120,
                                "expression": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 68,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 16,
                                "start": 30,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 30
                        }
                    ],
                    "flags": 16,
                    "start": 15,
                    "end": 30
                },
                "flags": 16,
                "start": 13,
                "end": 30
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 7,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "else {} if(x) { function while",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 0, end: 4
✖ Binding identifier expected - start: 24, end: 30
✖ Unexpected token. - start: 24, end: 30
✖ Expression expected - start: 30, end: 30
✖ Expression expected - start: 30, end: 30

```

