# Kataw parser test case

## Input

`````js
interface I extends X.Y<Z> {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface I extends X.Y<Z> {}",
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
                "heritageClauses": {
                    "kind": 8294,
                    "clauses": [
                        {
                            "kind": 8293,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 8383,
                                    "left": {
                                        "kind": 196711,
                                        "text": "X",
                                        "rawText": "X",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 21
                                    },
                                    "right": {
                                        "kind": 196711,
                                        "text": "Y",
                                        "rawText": "Y",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 23
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 19,
                                    "end": 23
                                },
                                "typeArguments": {
                                    "kind": 8419,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 8428,
                                            "typeName": {
                                                "kind": 196711,
                                                "text": "Z",
                                                "rawText": "Z",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 25
                                            },
                                            "typeArguments": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 24,
                                            "end": 26
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 24,
                                    "end": 25
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 19,
                                "end": 28
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 19,
                            "end": 26
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 19,
                    "end": 26
                },
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 28,
                    "end": 28
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 29
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 29
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

