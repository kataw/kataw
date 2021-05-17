# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: generator wrapped
> :: case: fooo[bar]
## Input

`````js
function *P(){
  class D extends fooo[bar] {}
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
                "flags": 0,
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
                                "flags": 1,
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
                                        "flags": 0,
                                        "start": 24,
                                        "end": 32
                                    },
                                    "expression": {
                                        "kind": 536871042,
                                        "member": {
                                            "kind": 134299649,
                                            "text": "fooo",
                                            "rawText": "fooo",
                                            "flags": 96,
                                            "start": 32,
                                            "end": 37
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 96,
                                            "start": 38,
                                            "end": 41
                                        },
                                        "flags": 32,
                                        "start": 32,
                                        "end": 42
                                    },
                                    "typeParameter": null,
                                    "flags": 16,
                                    "start": 32,
                                    "end": 42
                                },
                                "body": {
                                    "kind": 262,
                                    "elements": [],
                                    "flags": 32,
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 45
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 45
                        }
                    ],
                    "flags": 33,
                    "start": 14,
                    "end": 45
                },
                "flags": 32,
                "start": 13,
                "end": 47
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "function *P(){\n  class D extends fooo[bar] {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
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

