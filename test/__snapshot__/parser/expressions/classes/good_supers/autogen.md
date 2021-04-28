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
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "typeParameter": null,
                "flags": 128,
                "start": 15,
                "end": 17
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
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
                                "flags": 768,
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
                            "type": null,
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
                                                                "left": {
                                                                    "kind": 67109115,
                                                                    "text": "#",
                                                                    "flags": 768,
                                                                    "start": 50,
                                                                    "end": 52
                                                                },
                                                                "right": {
                                                                    "kind": 201392131,
                                                                    "text": "foo",
                                                                    "rawText": "foo",
                                                                    "flags": 768,
                                                                    "start": 44,
                                                                    "end": 49
                                                                },
                                                                "flags": 256,
                                                                "start": 44,
                                                                "end": 52
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "start": 44,
                                                        "end": 52
                                                    },
                                                    "flags": 256,
                                                    "start": 43,
                                                    "end": 53
                                                },
                                                "flags": 256,
                                                "start": 37,
                                                "end": 54
                                            },
                                            "flags": 128,
                                            "start": 37,
                                            "end": 54
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 54
                                },
                                "flags": 256,
                                "start": 35,
                                "end": 58
                            },
                            "flags": 0,
                            "start": 33,
                            "end": 58
                        },
                        "flags": 0,
                        "start": 19,
                        "end": 58
                    }
                ],
                "flags": 256,
                "start": 19,
                "end": 60
            },
            "flags": 128,
            "start": 0,
            "end": 60
        }
    ],
    "isModule": false,
    "text": "class x extends y {\n  constructor() {\n    ({\"foo\": #})\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid character - start: 50, end: 52

```

