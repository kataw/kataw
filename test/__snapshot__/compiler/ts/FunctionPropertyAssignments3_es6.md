# Kataw parser test case

## Input

`````js
 var v = { *{ } }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": " var v = { *{ } }",
    "filename": "",
    "statements": [
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "v",
                            "rawText": "v",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 4,
                            "end": 6
                        },
                        "exclamation": false,
                        "type": null,
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 17320034,
                                        "name": {
                                            "kind": 196712,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 1,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 12,
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
                                                "start": 13,
                                                "end": 13
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 15
                                        },
                                        "decorators": null,
                                        "type": null,
                                        "accessModifier": null,
                                        "typeParameters": null,
                                        "flags": 1,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 12,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 15
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 17
                        },
                        "flags": 4,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 17
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 17
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 12,
            "length": 0
        }
    ],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

