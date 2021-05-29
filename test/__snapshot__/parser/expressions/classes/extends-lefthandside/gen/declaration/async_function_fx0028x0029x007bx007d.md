# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: n
> :: test: declaration
> :: case: async function f(){}
## Input

`````js
class A extends async function f(){} {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": {
                    "kind": 279,
                    "extendsKeyword": {
                        "kind": 4194391,
                        "flags": 80,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "start": 15,
                            "end": 21
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "start": 21,
                            "end": 30
                        },
                        "generatorToken": null,
                        "name": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 30,
                            "end": 32
                        },
                        "formalParameters": {
                            "kind": 214,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 32,
                            "end": 34
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 35,
                                "end": 35
                            },
                            "flags": 32,
                            "start": 34,
                            "end": 36
                        },
                        "typeParameters": null,
                        "returnType": null,
                        "flags": 160,
                        "start": 15,
                        "end": 36
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 36
                },
                "body": {
                    "kind": 262,
                    "elements": [],
                    "flags": 32,
                    "start": 38,
                    "end": 38
                },
                "flags": 7,
                "start": 32,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "class A extends async function f(){} {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

class A  {}
```

### Diagnostics

```javascript
✔ No errors
```

