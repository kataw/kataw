# Kataw parser test case

## Input

`````js
interface I {
    new (x: number): void;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface I {\n    new (x: number): void;\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8311,
                "name": {
                    "kind": 196712,
                    "text": "I",
                    "rawText": "I",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [
                        {
                            "kind": 8250,
                            "isReadOnly": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [
                                    {
                                        "kind": 8366,
                                        "ellipsis": false,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 23,
                                            "end": 24
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 25,
                                            "end": 32
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 23,
                                        "end": 32
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 23,
                                "end": 32
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 34,
                                "end": 39
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 21,
                            "end": 40
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 13,
                    "end": 40
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 42
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 42
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

