# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: c
> :: test: inside a generator func
> :: case: functi\u006fn
## Input

`````js
function *f(){
  functi\u006fn = x
}
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
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 8,
                "start": 512,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 768,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 256,
                "start": 11,
                "end": 13
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
                                "flags": 14,
                                "start": 327681,
                                "end": 30
                            },
                            "generatorToken": null,
                            "name": {
                                "kind": 16637,
                                "text": "",
                                "flags": 12,
                                "start": 30,
                                "end": 30
                            },
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 30,
                                "end": 30
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 256,
                                "start": 30,
                                "end": 30
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 327809,
                            "start": 14,
                            "end": 30
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 14,
                    "end": 30
                },
                "flags": 256,
                "start": 13,
                "end": 30
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 2176,
            "start": 0,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 32,
                "end": 34
            },
            "flags": 128,
            "start": 32,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "function *f(){\n  functi\\u006fn = x\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 30, end: 32
✖ Unexpected token. - start: 30, end: 32
✖ Statement expected - start: 30, end: 32
✖ Statement expected - start: 34, end: 36

```

