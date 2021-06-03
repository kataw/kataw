# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/object-literal/good_supers/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\object-literal\good_supers\gen\object_with_string_key
> :: test: object with string key
> :: case: super.cool
## Input

`````js
class x extends y {
  constructor() {
    ({"foo": super.cool})
  }
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
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "start": 15,
                    "end": 17
                },
                "body": {
                    "kind": 262,
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
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 34,
                                    "end": 35
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 121,
                                                    "expression": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "generatorToken": null,
                                                                    "left": {
                                                                        "kind": 201392131,
                                                                        "text": "foo",
                                                                        "rawText": "\"foo\"",
                                                                        "flags": 96,
                                                                        "start": 44,
                                                                        "end": 49
                                                                    },
                                                                    "right": {
                                                                        "kind": 129,
                                                                        "member": {
                                                                            "kind": 225,
                                                                            "superKeyword": {
                                                                                "kind": 4259935,
                                                                                "flags": 96,
                                                                                "start": 50,
                                                                                "end": 56
                                                                            },
                                                                            "flags": 96,
                                                                            "start": 50,
                                                                            "end": 56
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "cool",
                                                                            "rawText": "cool",
                                                                            "flags": 96,
                                                                            "start": 57,
                                                                            "end": 61
                                                                        },
                                                                        "flags": 536870944,
                                                                        "start": 44,
                                                                        "end": 61
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 44,
                                                                    "end": 61
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 16,
                                                            "start": 44,
                                                            "end": 61
                                                        },
                                                        "flags": 48,
                                                        "start": 43,
                                                        "end": 62
                                                    },
                                                    "flags": 32,
                                                    "start": 37,
                                                    "end": 63
                                                },
                                                "flags": 16,
                                                "start": 37,
                                                "end": 63
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 37,
                                        "end": 63
                                    },
                                    "flags": 32,
                                    "start": 35,
                                    "end": 67
                                },
                                "flags": 0,
                                "start": 33,
                                "end": 67
                            },
                            "flags": 0,
                            "start": 19,
                            "end": 67
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 67
                },
                "flags": 7,
                "start": 32,
                "end": 69
            },
            "flags": 16,
            "start": 0,
            "end": 69
        }
    ],
    "isModule": false,
    "source": "class x extends y {\n  constructor() {\n    ({\"foo\": super.cool})\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 69
}
```

### Printed

```javascript

class x  {
  constructor() {
    ({ "\"foo\"": super.cool });
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

