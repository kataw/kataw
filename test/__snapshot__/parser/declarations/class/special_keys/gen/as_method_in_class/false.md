# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/class/special_keys/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/class/special_keys/gen/as_method_in_class
> :: test: as method in class
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
class x {false(){}}
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
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "false",
                                    "rawText": "false",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 15,
                                    "end": 16
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 17,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "start": 16,
                                    "end": 18
                                },
                                "flags": 0,
                                "start": 14,
                                "end": 18
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 18
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 18
                },
                "flags": 7,
                "start": 32,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "class x {false(){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

class x {
  false() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

