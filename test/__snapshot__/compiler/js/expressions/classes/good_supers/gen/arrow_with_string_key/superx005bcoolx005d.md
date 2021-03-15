# Auto-generated test cases ( Kataw )
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/js/expressions/classes/good_supers/autogen.md
- Path: kataw15/test\__snapshot__\compiler\js\expressions\classes\good_supers\gen\arrow_with_string_key
> :: test: arrow with string key
> :: case: super[cool]
## Input

`````js
class x extends y {
  constructor() {
    ({"foo": super[cool]}) => x
  }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class x extends y {\n  constructor() {\n    ({\"foo\": super[cool]}) => x\n  }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 15,
                "end": 17
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 49,
                        "isStatic": false,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "method": {
                            "kind": 16844946,
                            "name": {
                                "kind": 196711,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 33
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 35
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [
                                        {
                                            "kind": 2097233,
                                            "expression": {
                                                "kind": 83976,
                                                "typeParameters": null,
                                                "arrowParameters": {
                                                    "kind": 81929,
                                                    "elements": [
                                                        {
                                                            "kind": 16473,
                                                            "ellipsis": false,
                                                            "binding": {
                                                                "kind": 33554598,
                                                                "propertyList": {
                                                                    "kind": 33,
                                                                    "properties": [
                                                                        {
                                                                            "kind": 16412,
                                                                            "left": {
                                                                                "kind": 4261583,
                                                                                "text": "foo",
                                                                                "rawText": "foo",
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 44,
                                                                                "end": 49
                                                                            },
                                                                            "right": {
                                                                                "kind": 67174980,
                                                                                "member": {
                                                                                    "kind": 4260561,
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 50,
                                                                                    "end": 56
                                                                                },
                                                                                "expression": {
                                                                                    "kind": 196712,
                                                                                    "text": "cool",
                                                                                    "rawText": "cool",
                                                                                    "flags": 0,
                                                                                    "symbol": null,
                                                                                    "transformFlags": 0,
                                                                                    "start": 57,
                                                                                    "end": 61
                                                                                },
                                                                                "flags": 0,
                                                                                "symbol": null,
                                                                                "transformFlags": 0,
                                                                                "start": 56,
                                                                                "end": 62
                                                                            },
                                                                            "accessModifier": null,
                                                                            "decorators": null,
                                                                            "flags": 0,
                                                                            "symbol": null,
                                                                            "transformFlags": 0,
                                                                            "start": 44,
                                                                            "end": 62
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "multiline": false,
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 44,
                                                                    "end": 62
                                                                },
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 43,
                                                                "end": 63
                                                            },
                                                            "isOptional": false,
                                                            "type": null,
                                                            "initializer": null,
                                                            "decorators": null,
                                                            "accessModifier": null,
                                                            "isReadOnly": false,
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 1,
                                                            "start": 37,
                                                            "end": 64
                                                        }
                                                    ],
                                                    "type": null,
                                                    "accessModifier": null,
                                                    "trailingComma": false,
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 37,
                                                    "end": 64
                                                },
                                                "contents": {
                                                    "kind": 196712,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 67,
                                                    "end": 69
                                                },
                                                "flags": 1073774592,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 69
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 69
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 69
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 73
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 73
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 19,
                        "end": 73
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 19,
                "end": 75
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 75
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

