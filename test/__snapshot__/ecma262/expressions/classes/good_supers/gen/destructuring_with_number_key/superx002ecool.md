# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/good_supers/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/good_supers/gen/destructuring_with_number_key
> :: test: destructuring with number key
> :: case: super.cool
## Options

`````js
{}
`````
## Input

`````js
class x extends y {
  constructor() {
    ({123: super.cool} = x)
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
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
                        "transformFlags": 0,
                        "start": 7,
                        "end": 15
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    },
                    "typeParameter": null,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
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
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "constructor",
                                    "rawText": "constructor",
                                    "flags": 97,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 2048,
                                    "transformFlags": 0,
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
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 219,
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 201392130,
                                                                            "text": 123,
                                                                            "rawText": "123",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 44,
                                                                            "end": 47
                                                                        },
                                                                        "right": {
                                                                            "kind": 129,
                                                                            "member": {
                                                                                "kind": 4259935,
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 48,
                                                                                "end": 54
                                                                            },
                                                                            "expression": {
                                                                                "kind": 134299649,
                                                                                "text": "cool",
                                                                                "rawText": "cool",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 55,
                                                                                "end": 59
                                                                            },
                                                                            "flags": 96,
                                                                            "transformFlags": 2,
                                                                            "start": 44,
                                                                            "end": 59
                                                                        },
                                                                        "flags": 32,
                                                                        "transformFlags": 128,
                                                                        "start": 44,
                                                                        "end": 59
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 16,
                                                                "transformFlags": 0,
                                                                "start": 44,
                                                                "end": 59
                                                            },
                                                            "flags": 48,
                                                            "transformFlags": 8,
                                                            "start": 43,
                                                            "end": 60
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 60,
                                                            "end": 62
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 62,
                                                            "end": 64
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 128,
                                                        "start": 43,
                                                        "end": 64
                                                    },
                                                    "flags": 37,
                                                    "transformFlags": 0,
                                                    "start": 35,
                                                    "end": 65
                                                },
                                                "flags": 16,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 65
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 65
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 69
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 69
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 69
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 69
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 71
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 71
        }
    ],
    "isModule": false,
    "source": "class x extends y {\n  constructor() {\n    ({123: super.cool} = x)\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 71
}
```

### Printed

```javascript

class x  extends y {
  constructor() {
    ({ 123: super.cool } = x);
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

