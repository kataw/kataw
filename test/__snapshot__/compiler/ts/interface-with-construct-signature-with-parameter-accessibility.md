# Kataw parser test case

## Input

`````js
interface Test {
    new (public x, private y);
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface Test {\n    new (public x, private y);\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "Test",
                "rawText": "Test",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
                "end": 14
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8250,
                        "isReadOnly": false,
                        "accessModifier": null,
                        "typeParameters": null,
                        "parameters": {
                            "kind": 134226095,
                            "parameterList": [
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 32,
                                        "end": 34
                                    },
                                    "isOptional": false,
                                    "type": null,
                                    "initializer": null,
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
                                    "transformFlags": 1,
                                    "start": 26,
                                    "end": 34
                                },
                                {
                                    "kind": 134226094,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1025,
                                        "start": 43,
                                        "end": 45
                                    },
                                    "isOptional": false,
                                    "type": null,
                                    "initializer": null,
                                    "accessModifier": {
                                        "kind": 4194485,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 35,
                                        "end": 43
                                    },
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 35,
                                    "end": 45
                                }
                            ],
                            "trailingcomma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 26,
                            "end": 45
                        },
                        "returnType": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 24,
                        "end": 47
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 16,
                "end": 47
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 49
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
    "end": 49
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

