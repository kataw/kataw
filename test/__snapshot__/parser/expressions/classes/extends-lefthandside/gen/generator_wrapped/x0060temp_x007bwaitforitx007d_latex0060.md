# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: d
> :: test: generator wrapped
> :: case: `temp {waitforit} late`
## Input

`````js
function *P(){
  class D extends `temp {waitforit} late` {}
}
`````
## Output

### CST

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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "P",
                "rawText": "P",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
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
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 81,
                                "start": 14,
                                "end": 22
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "D",
                                "rawText": "D",
                                "flags": 96,
                                "start": 22,
                                "end": 24
                            },
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": {
                                    "kind": 279,
                                    "extendsKeyword": {
                                        "kind": 4194391,
                                        "flags": 80,
                                        "start": 24,
                                        "end": 32
                                    },
                                    "expression": {
                                        "kind": 458761,
                                        "text": "temp {waitforit} late",
                                        "rawText": "temp {waitforit} late",
                                        "flags": 134217824,
                                        "start": 32,
                                        "end": 56
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 32,
                                    "end": 56
                                },
                                "body": {
                                    "kind": 262,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 58,
                                    "end": 58
                                },
                                "flags": 24,
                                "start": 32,
                                "end": 59
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 59
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 59
                },
                "flags": 32,
                "start": 13,
                "end": 61
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 61
        }
    ],
    "isModule": false,
    "source": "function *P(){\n  class D extends `temp {waitforit} late` {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 61
}
```

### Printed

```javascript

function * P() {
  class D  {}
}
```

### Diagnostics

```javascript
✔ No errors
```

