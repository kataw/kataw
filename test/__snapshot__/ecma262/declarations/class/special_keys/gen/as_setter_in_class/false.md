# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/class/special_keys/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/class/special_keys/gen/as_setter_in_class
> :: test: as setter in class
> :: case: false
## Options

`````js
{}
`````
## Input

`````js
class x {set false(x){}}
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
                            "getKeyword": {
                                "kind": 16499,
                                "flags": 64,
                                "start": 9,
                                "end": 12
                            },
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "false",
                                    "rawText": "false",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 18
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 20
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 608,
                                    "start": 19,
                                    "end": 21
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 22,
                                        "end": 22
                                    },
                                    "flags": 32,
                                    "start": 21,
                                    "end": 23
                                },
                                "flags": 512,
                                "start": 18,
                                "end": 23
                            },
                            "flags": 512,
                            "start": 9,
                            "end": 23
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 23
                },
                "flags": 7,
                "start": 32,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "class x {set false(x){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

class x {
  set false(x) {}
}
```

### Diagnostics

```javascript
✔ No errors
```

