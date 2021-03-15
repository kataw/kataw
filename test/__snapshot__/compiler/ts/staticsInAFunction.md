# Kataw parser test case

## Input

`````js
function boo{
   static test()
   static test(name:string)
   static test(name?:any){}
}

`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function boo{\n   static test()\n   static test(name:string)\n   static test(name?:any){}\n}\n",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "boo",
                "rawText": "boo",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 8,
                "end": 12
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 1,
                "intersects": false,
                "transformFlags": 0,
                "start": 12,
                "end": 12
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "static",
                                "rawText": "static",
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 23
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 23
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 1,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 28
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 32768,
                                    "intersects": false,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 30
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 30
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "static",
                                "rawText": "static",
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 40
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 40
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 1,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 40,
                                    "end": 45
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 16473,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 4325406,
                                                "text": "name",
                                                "rawText": "name",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 46,
                                                "end": 50
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 51,
                                                "end": 57
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 46,
                                            "end": 57
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 32768,
                                    "intersects": false,
                                    "start": 50,
                                    "end": 58
                                },
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 58
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 40,
                            "end": 58
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 196712,
                                "text": "static",
                                "rawText": "static",
                                "flags": 32768,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 58,
                                "end": 68
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 58,
                            "end": 68
                        },
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 1073807915,
                                "expression": {
                                    "kind": 196712,
                                    "text": "test",
                                    "rawText": "test",
                                    "flags": 1,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 68,
                                    "end": 73
                                },
                                "typeArguments": null,
                                "argumentList": {
                                    "kind": 3,
                                    "elements": [
                                        {
                                            "kind": 16473,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 4325406,
                                                "text": "name",
                                                "rawText": "name",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 74,
                                                "end": 78
                                            },
                                            "isOptional": true,
                                            "type": {
                                                "kind": 4202498,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 80,
                                                "end": 83
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 74,
                                            "end": 83
                                        }
                                    ],
                                    "trailingComma": false,
                                    "transformFlags": 0,
                                    "flags": 0,
                                    "intersects": false,
                                    "start": 78,
                                    "end": 84
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 73,
                                "end": 84
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 84
                        },
                        {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 85,
                                "end": 85
                            },
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 84,
                            "end": 86
                        }
                    ],
                    "multiline": true,
                    "flags": 32768,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 86
                },
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 12,
                "end": 88
            },
            "typeParameters": null,
            "flags": 32768,
            "intersects": false,
            "transformFlags": 256,
            "start": 0,
            "end": 88
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 24,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 41,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 69,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 84,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 89
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

