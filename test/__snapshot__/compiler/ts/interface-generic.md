# Kataw parser test case

## Input

`````js
interface I<T extends object = { x: number }> {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface I<T extends object = { x: number }> {}",
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
                "typeParameters": {
                    "kind": 8425,
                    "typeParameterList": [
                        {
                            "kind": 8424,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 13
                            },
                            "constraint": {
                                "kind": 4202663,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 21,
                                "end": 28
                            },
                            "defaultType": {
                                "kind": 8422,
                                "objectTypeMembers": {
                                    "kind": 169,
                                    "members": [
                                        {
                                            "kind": 8380,
                                            "name": {
                                                "kind": 196711,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 34
                                            },
                                            "isOptional": false,
                                            "accessModifier": null,
                                            "type": {
                                                "kind": 4202657,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 35,
                                                "end": 42
                                            },
                                            "isStatic": false,
                                            "isReadOnly": false,
                                            "initializer": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 32,
                                            "end": 42
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 32,
                                    "end": 44
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 30,
                                "end": 44
                            },
                            "expression": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 12,
                            "end": 44
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 12,
                    "end": 44
                },
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 47,
                    "end": 47
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 48
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 48
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

