# Kataw parser test case

## Input

`````js
interface I {
    (x: number): void;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface I {\n    (x: number): void;\n}",
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
                            "kind": 8236,
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
                                            "start": 19,
                                            "end": 20
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 21,
                                            "end": 28
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 19,
                                        "end": 28
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 19,
                                "end": 28
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 30,
                                "end": 35
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 13,
                            "end": 36
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 13,
                    "end": 36
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 38
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 38
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

