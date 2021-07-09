# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/object-literal/good_supers/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/object-literal/good_supers/gen/arrow_with_string_key
> :: test: arrow with string key
> :: case: super
## Options

`````js
{}
`````
## Input

`````js
class x extends y {
  constructor() {
    ({"foo": super}) => x
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
                                                    "kind": 271,
                                                    "asyncKeyword": null,
                                                    "typeParameters": null,
                                                    "arrowPatameterList": {
                                                        "kind": 342,
                                                        "parameters": [
                                                            {
                                                                "kind": 212,
                                                                "propertyList": {
                                                                    "kind": 213,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 329,
                                                                            "key": {
                                                                                "kind": 201392131,
                                                                                "text": "foo",
                                                                                "rawText": "\"foo\"",
                                                                                "flags": 96,
                                                                                "transformFlags": 0,
                                                                                "start": 44,
                                                                                "end": 49
                                                                            },
                                                                            "value": {
                                                                                "kind": 129,
                                                                                "member": {
                                                                                    "kind": 4259935,
                                                                                    "flags": 96,
                                                                                    "transformFlags": 0,
                                                                                    "start": 50,
                                                                                    "end": 56
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 16637,
                                                                                    "text": "",
                                                                                    "rawText": "",
                                                                                    "flags": 64,
                                                                                    "transformFlags": 0,
                                                                                    "start": 56,
                                                                                    "end": 56
                                                                                },
                                                                                "flags": 32,
                                                                                "transformFlags": 2,
                                                                                "start": 50,
                                                                                "end": 56
                                                                            },
                                                                            "initializer": null,
                                                                            "flags": 32,
                                                                            "transformFlags": 0,
                                                                            "start": 44,
                                                                            "end": 56
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "transformFlags": 0,
                                                                    "start": 44,
                                                                    "end": 56
                                                                },
                                                                "flags": 48,
                                                                "transformFlags": 0,
                                                                "start": 43,
                                                                "end": 57
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 35,
                                                        "transformFlags": 0,
                                                        "start": 43,
                                                        "end": 58
                                                    },
                                                    "returnType": null,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 64,
                                                        "transformFlags": 0,
                                                        "start": 58,
                                                        "end": 61
                                                    },
                                                    "contents": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 61,
                                                        "end": 63
                                                    },
                                                    "flags": 35,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 63
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 37,
                                                "end": 63
                                            }
                                        ],
                                        "flags": 33,
                                        "transformFlags": 0,
                                        "start": 37,
                                        "end": 63
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 35,
                                    "end": 67
                                },
                                "flags": 2048,
                                "transformFlags": 0,
                                "start": 33,
                                "end": 67
                            },
                            "flags": 2048,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 67
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 67
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 69
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 69
        }
    ],
    "isModule": false,
    "source": "class x extends y {\n  constructor() {\n    ({\"foo\": super}) => x\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 69
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'super' must be followed by an argument list or member access. - start: 50, end: 57
✖ Dot property must be an identifier - start: 56, end: 57
✖ The left hand side of the arrow is not destructible  - start: 58, end: 61

```

