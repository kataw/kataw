# Kataw parser test case

## Input

`````js
declare function f([]?, {})
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "declare function f([]?, {})",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 16,
                "end": 18
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554437,
                            "elementList": {
                                "kind": 29,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 20,
                                "end": 20
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 19,
                            "end": 21
                        },
                        "isOptional": true,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 19,
                        "end": 22
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 33554598,
                            "propertyList": {
                                "kind": 33,
                                "properties": [],
                                "multiline": false,
                                "trailingComma": false,
                                "transformFlags": 1025,
                                "flags": 0,
                                "intersects": false,
                                "start": 25,
                                "end": 25
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 23,
                            "end": 26
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 23,
                        "end": 26
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 19,
                "end": 27
            },
            "type": null,
            "contents": null,
            "typeParameters": null,
            "flags": 402653184,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 7,
            "end": 27
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
    "end": 27
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

