# Kataw parser test case

> Auto-generated tests to validate error recovery
>

## Input

### Cases

> `````js
> super
> `````

> `````js
> super()
> `````

> `````js
> super.cool
> `````

> `````js
> super[cool]
> `````

### Templates

#### object with string key

`````js
class x extends y {
  constructor() {
    ({"foo": #})
  }
}
`````

#### destructuring with string key

Note: super property is valid here, like any other property

`````js
class x extends y {
  constructor() {
    ({"foo": #} = x)
  }
}
`````

#### arrow with string key

`````js
class x extends y {
  constructor() {
    ({"foo": #}) => x
  }
}
`````

#### object with number key

`````js
class x extends y {
  constructor() {
    ({123: #})
  }
}
`````

#### destructuring with number key

Note: super property is valid here, like any other property

`````js
class x extends y {
  constructor() {
    ({123: #} = x)
  }
}
`````

#### arrow with number key

`````js
class x extends y {
  constructor() {
    ({123: #}) => x
  }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class x extends y {\n  constructor() {\n    ({\"foo\": #})\n  }\n}",
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
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 44,
                                                                    "end": 49
                                                                },
                                                                "right": {
                                                                    "kind": 196712,
                                                                    "text": "#",
                                                                    "rawText": "foo",
                                                                    "flags": 0,
                                                                    "symbol": null,
                                                                    "transformFlags": 0,
                                                                    "start": 50,
                                                                    "end": 52
                                                                },
                                                                "accessModifier": null,
                                                                "decorators": null,
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 44,
                                                                "end": 52
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 44,
                                                        "end": 52
                                                    },
                                                    "flags": 0,
                                                    "symbol": null,
                                                    "transformFlags": 0,
                                                    "start": 43,
                                                    "end": 53
                                                },
                                                "flags": 32768,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 37,
                                                "end": 54
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 54
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32768,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 37,
                                    "end": 54
                                },
                                "flags": 32768,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 35,
                                "end": 58
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 33,
                            "end": 58
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 1,
                        "start": 19,
                        "end": 58
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 19,
                "end": 60
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 52,
            "length": 1
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

