# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: n
> :: test: expression
> :: case: async *#arguments() {}
## Options

`````js
{}
`````
## Input

`````js
class C extends Base { async *#arguments() {} }
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
                "text": "C",
                "rawText": "C",
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
                        "kind": 134299649,
                        "text": "Base",
                        "rawText": "Base",
                        "flags": 96,
                        "start": 15,
                        "end": 20
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 20
                },
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "staticKeyword": null,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 22,
                                "end": 28
                            },
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 28,
                                "end": 30
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 67191035,
                                    "text": "#arguments",
                                    "rawText": "#arguments",
                                    "flags": 96,
                                    "start": 30,
                                    "end": 40
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 384,
                                    "start": 41,
                                    "end": 42
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 44,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "start": 42,
                                    "end": 45
                                },
                                "flags": 384,
                                "start": 40,
                                "end": 45
                            },
                            "flags": 384,
                            "start": 22,
                            "end": 45
                        }
                    ],
                    "flags": 32,
                    "start": 22,
                    "end": 45
                },
                "flags": 7,
                "start": 32,
                "end": 47
            },
            "flags": 16,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "class C extends Base { async *#arguments() {} }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

 class C {
    async *#arguments() {
    }
} 
```

### Diagnostics

```javascript
✔ No errors
```

