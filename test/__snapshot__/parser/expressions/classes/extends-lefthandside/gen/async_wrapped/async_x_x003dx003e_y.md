# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: d
> :: test: async wrapped
> :: case: async
>          x => y
## Input

`````js
async function p(){
  class C extends async
x => y {}
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
                "text": "p",
                "rawText": "p",
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
                            "kind": 178,
                            "declareKeyword": null,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 768,
                                "start": 19,
                                "end": 27
                            },
                            "name": {
                                "kind": 134299649,
                                "text": "C",
                                "rawText": "C",
                                "flags": 768,
                                "start": 27,
                                "end": 29
                            },
                            "typeParameters": null,
                            "classHeritage": {
                                "kind": 279,
                                "extendsToken": {
                                    "kind": 4194391,
                                    "flags": 768,
                                    "start": 29,
                                    "end": 37
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 768,
                                    "start": 37,
                                    "end": 43
                                },
                                "typeParameter": null,
                                "flags": 128,
                                "start": 37,
                                "end": 43
                            },
                            "members": {
                                "kind": 277,
                                "elements": [],
                                "flags": 256,
                                "start": 19,
                                "end": 19
                            },
                            "flags": 128,
                            "start": 19,
                            "end": 43
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 768,
                                    "start": 45,
                                    "end": 48
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 43,
                                    "end": 45
                                },
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 768,
                                    "start": 48,
                                    "end": 50
                                },
                                "flags": 256,
                                "start": 43,
                                "end": 50
                            },
                            "flags": 128,
                            "start": 43,
                            "end": 50
                        },
                        {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [],
                                "multiLine": false,
                                "flags": 128,
                                "start": 52,
                                "end": 52
                            },
                            "flags": 128,
                            "start": 50,
                            "end": 53
                        }
                    ],
                    "multiline": true,
                    "flags": 256,
                    "start": 19,
                    "end": 53
                },
                "flags": 256,
                "start": 18,
                "end": 55
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 1152,
            "start": 0,
            "end": 55
        }
    ],
    "isModule": false,
    "text": "async function p(){\n  class C extends async\nx => y {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 43,
            "end": 45
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 50,
            "end": 52
        }
    ],
    "start": 0,
    "end": 55
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

