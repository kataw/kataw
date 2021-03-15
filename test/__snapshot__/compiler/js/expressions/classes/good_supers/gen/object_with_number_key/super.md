# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/classes/good_supers/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\classes\good_supers\gen\object_with_number_key
> :: test: object with number key
> :: case: super
## Input

`````js
class x extends y {
  constructor() {
    ({123: super})
  }
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class x extends y {\n  constructor() {\n    ({123: super})\n  }\n}",
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
                                                                    "kind": 4261540,
                                                                    "text": 123,
                                                                    "rawText": "123",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 44,
                                                                    "end": 47
                                                                },
                                                                "right": {
                                                                    "kind": 67175096,
                                                                    "member": {
                                                                        "kind": 4260561,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 48,
                                                                        "end": 54
                                                                    },
                                                                    "expression": {
                                                                        "kind": 196711,
                                                                        "text": "",
                                                                        "rawText": "",
                                                                        "flags": 1,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 54,
                                                                        "end": 54
                                                                    },
                                                                    "flags": 48,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 1,
                                                                    "end": 54
                                                                },
                                                                "accessModifier": null,
                                                                "decorators": null,
                                                                "flags": 1,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 44,
                                                                "end": 54
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 1,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 44,
                                                        "end": 54
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 43,
                                                    "end": 55
                                                },
                                                "flags": 32768,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 56
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 56
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 56
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 60
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 60
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 19,
                        "end": 60
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 19,
                "end": 62
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 62
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Super must be followed by an argument list or member access",
            "start": 54,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 62
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

