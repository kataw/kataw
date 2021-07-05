# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/class/special_keys/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/class/special_keys/gen/as_generator_in_class
> :: test: as generator in class
> :: case: null
## Options

`````js
{}
`````
## Input

`````js
class x {* null(){}}
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 9,
                                "end": 10
                            },
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "null",
                                    "rawText": "null",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 16,
                                    "end": 17
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 18,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 19
                                },
                                "flags": 0,
                                "start": 15,
                                "end": 19
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 19
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 19
                },
                "flags": 7,
                "start": 32,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "class x {* null(){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

class x {
  * null() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

