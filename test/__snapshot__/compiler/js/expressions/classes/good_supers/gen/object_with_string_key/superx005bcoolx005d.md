# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/good_supers/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\good_supers\gen\object_with_string_key
> :: test: object with string key
> :: case: super[cool]
## Input

`````js
class x extends y {
  constructor() {
    ({"foo": super[cool]})
  }
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class x extends y {\n  constructor() {\n    ({\"foo\": super[cool]})\n  }\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "x",
                "rawText": "x",
                "flags": 0,
                "intersects": false,
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
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
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
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 33
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
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
                                                "kind": 66224,
                                                "expression": {
                                                    "kind": 98984,
                                                    "propertyList": {
                                                        "kind": 65722,
                                                        "properties": [
                                                            {
                                                                "kind": 65721,
                                                                "left": {
                                                                    "kind": 4261583,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 44,
                                                                    "end": 49
                                                                },
                                                                "right": {
                                                                    "kind": 67174980,
                                                                    "member": {
                                                                        "kind": 4260561,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 50,
                                                                        "end": 56
                                                                    },
                                                                    "expression": {
                                                                        "kind": 196712,
                                                                        "text": "cool",
                                                                        "rawText": "cool",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 57,
                                                                        "end": 61
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 56,
                                                                    "end": 62
                                                                },
                                                                "accessModifier": null,
                                                                "decorators": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 44,
                                                                "end": 62
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 44,
                                                        "end": 62
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 43,
                                                    "end": 63
                                                },
                                                "flags": 32768,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 64
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 64
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 64
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 68
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 68
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 19,
                        "end": 68
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 19,
                "end": 70
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 70
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 70
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

