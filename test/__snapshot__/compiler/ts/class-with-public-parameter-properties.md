# Kataw parser test case

## Input

`````js
class Foo {
  constructor(public firstName: string,
              public readonly lastName: string,
              public age: number = 30,
              public readonly student: boolean = false) {}
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class Foo {\n  constructor(public firstName: string,\n              public readonly lastName: string,\n              public age: number = 30,\n              public readonly student: boolean = false) {}\n}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "classHeritage": null,
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
                                "start": 11,
                                "end": 25
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "firstName",
                                            "rawText": "firstName",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 32,
                                            "end": 42
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 43,
                                            "end": 50
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": {
                                            "kind": 4194494,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 26,
                                            "end": 32
                                        },
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097153,
                                        "start": 26,
                                        "end": 50
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "lastName",
                                            "rawText": "lastName",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 81,
                                            "end": 90
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 91,
                                            "end": 98
                                        },
                                        "initializer": null,
                                        "decorators": null,
                                        "accessModifier": {
                                            "kind": 4194494,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 51,
                                            "end": 72
                                        },
                                        "isReadOnly": true,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097153,
                                        "start": 51,
                                        "end": 98
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "age",
                                            "rawText": "age",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 120,
                                            "end": 124
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 125,
                                            "end": 132
                                        },
                                        "initializer": {
                                            "kind": 4261540,
                                            "text": 30,
                                            "rawText": "30",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 134,
                                            "end": 137
                                        },
                                        "decorators": null,
                                        "accessModifier": {
                                            "kind": 4194494,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 99,
                                            "end": 120
                                        },
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097153,
                                        "start": 99,
                                        "end": 137
                                    },
                                    {
                                        "kind": 16473,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "student",
                                            "rawText": "student",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 168,
                                            "end": 176
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4268070,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 177,
                                            "end": 185
                                        },
                                        "initializer": {
                                            "kind": 4260391,
                                            "text": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 187,
                                            "end": 193
                                        },
                                        "decorators": null,
                                        "accessModifier": {
                                            "kind": 4194494,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 138,
                                            "end": 159
                                        },
                                        "isReadOnly": true,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097153,
                                        "start": 138,
                                        "end": 193
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 194
                            },
                            "isSetter": false,
                            "isGetter": false,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 196,
                                    "end": 196
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 194,
                                "end": 197
                            },
                            "decorators": null,
                            "type": null,
                            "accessModifier": null,
                            "typeParameters": null,
                            "flags": 524288,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 197
                        },
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 11,
                        "end": 197
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 11,
                "end": 199
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 199
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
    "end": 199
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

