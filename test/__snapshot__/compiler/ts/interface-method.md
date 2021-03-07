# Kataw parser test case

## Input

`````js
interface I {
    m();
    m(x?: number, ...y: number[]): void;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface I {\n    m();\n    m(x?: number, ...y: number[]): void;\n}",
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
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "m",
                                "rawText": "m",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 19
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
                            "accessModifier": null,
                            "typeParameters": null,
                            "parameters": {
                                "kind": 8367,
                                "parameterList": [],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 20,
                                "end": 20
                            },
                            "returnType": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 13,
                            "end": 22
                        },
                        {
                            "kind": 8339,
                            "name": {
                                "kind": 196711,
                                "text": "m",
                                "rawText": "m",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 28
                            },
                            "isStatic": false,
                            "isReadOnly": false,
                            "isOptional": false,
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
                                            "start": 29,
                                            "end": 30
                                        },
                                        "isOptional": true,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 32,
                                            "end": 39
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 29,
                                        "end": 39
                                    },
                                    {
                                        "kind": 8366,
                                        "ellipsis": true,
                                        "binding": {
                                            "kind": 131102,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 1025,
                                            "start": 44,
                                            "end": 45
                                        },
                                        "isOptional": false,
                                        "type": {
                                            "kind": 8199,
                                            "elementType": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 46,
                                                "end": 53
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 46,
                                            "end": 56
                                        },
                                        "initializer": null,
                                        "accessModifier": null,
                                        "isReadOnly": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 4097,
                                        "start": 40,
                                        "end": 55
                                    }
                                ],
                                "trailingcomma": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 29,
                                "end": 55
                            },
                            "returnType": {
                                "kind": 4202742,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 57,
                                "end": 62
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 22,
                            "end": 63
                        }
                    ],
                    "multiline": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 13,
                    "end": 63
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 65
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 65
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 65
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

