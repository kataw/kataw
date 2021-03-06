# Kataw parser test case

## Input

`````js
 var v = { * }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": " var v = { * }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
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
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 17303650,
                                            "name": {
                                                "kind": 196712,
                                                "text": "",
                                                "rawText": "",
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 12,
                                                "end": 12
                                            },
                                            "formalParameters": {
                                                "kind": 90,
                                                "formalParameterList": [],
                                                "trailingComma": false,
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 12,
                                                "end": 12
                                            },
                                            "isSetter": false,
                                            "isGetter": false,
                                            "contents": null,
                                            "decorators": null,
                                            "type": null,
                                            "accessModifier": null,
                                            "typeParameters": null,
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 12,
                                            "end": 12
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 12
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 14
                            },
                            "flags": 4,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 14
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 14
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 14
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 13,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

