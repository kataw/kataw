# Kataw parser test case

## Input

`````js
interface JSONSchema4 {
  a?: number
  extends?: string | string[]
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface JSONSchema4 {\n  a?: number\n  extends?: string | string[]\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "JSONSchema4",
                    "rawText": "JSONSchema4",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 21
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8380,
                            "name": {
                                "kind": 196711,
                                "text": "a",
                                "rawText": "a",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 27
                            },
                            "isOptional": true,
                            "accessModifier": null,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 29,
                                "end": 36
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 23,
                            "end": 36
                        },
                        {
                            "kind": 8380,
                            "name": {
                                "kind": 196711,
                                "text": "extends",
                                "rawText": "extends",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 36,
                                "end": 46
                            },
                            "isOptional": true,
                            "accessModifier": null,
                            "type": {
                                "kind": 8432,
                                "types": [
                                    {
                                        "kind": 4202702,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 48,
                                        "end": 55
                                    },
                                    {
                                        "kind": 8199,
                                        "elementType": {
                                            "kind": 4202702,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 57,
                                            "end": 64
                                        },
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 57,
                                        "end": 68
                                    }
                                ],
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 55,
                                "end": 66
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 36,
                            "end": 66
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 23,
                    "end": 66
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 68
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 68
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 68
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

