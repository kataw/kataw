# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/classes/special_keys/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/classes/special_keys/gen/as_generator_in_class
> :: test: as generator in class
> :: case: super
## Options

`````js
{}
`````
## Input

`````js
class x {* super(){}}
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
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 9,
                                "end": 10
                            },
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "super",
                                    "rawText": "super",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 16
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 17,
                                    "end": 18
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 19,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 18,
                                    "end": 20
                                },
                                "flags": 0,
                                "start": 16,
                                "end": 20
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 20
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 20
                },
                "flags": 7,
                "start": 32,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "class x {* super(){}}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

class x {
  super() {}
}
```

### Diagnostics

```javascript
✔ No errors
```

