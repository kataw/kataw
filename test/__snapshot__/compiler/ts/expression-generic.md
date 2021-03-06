# Kataw parser test case

## Input

`````js
(class<T> {});
(class C<T> {});

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class<T> {});\n(class C<T> {});\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 82483,
                        "name": null,
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
                                        "start": 7,
                                        "end": 8
                                    },
                                    "constraint": null,
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 7,
                                    "end": 8
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 7,
                            "end": 8
                        },
                        "classHeritage": null,
                        "implementClauses": null,
                        "members": {
                            "kind": 50,
                            "elements": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 11,
                            "end": 12
                        },
                        "decorators": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 12
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 13
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 82483,
                        "name": {
                            "kind": 131102,
                            "text": "C",
                            "rawText": "C",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 21,
                            "end": 23
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
                                        "start": 24,
                                        "end": 25
                                    },
                                    "constraint": null,
                                    "defaultType": null,
                                    "expression": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 24,
                                    "end": 25
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 24,
                            "end": 25
                        },
                        "classHeritage": null,
                        "implementClauses": null,
                        "members": {
                            "kind": 50,
                            "elements": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 28,
                            "end": 29
                        },
                        "decorators": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 16,
                        "end": 29
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 30
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 14,
                "end": 31
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 31
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

