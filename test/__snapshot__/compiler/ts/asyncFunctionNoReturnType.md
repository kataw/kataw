# Kataw parser test case

## Input

`````js
async () => {
    if (window)
        return;
}

`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "async () => {\n    if (window)\n        return;\n}\n",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65552,
                    "typeParameters": null,
                    "arrowParameters": {
                        "kind": 65545,
                        "elements": [],
                        "type": null,
                        "accessModifier": null,
                        "trailingComma": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 8
                    },
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [
                                {
                                    "kind": 2097257,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "window",
                                        "rawText": "window",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 22,
                                        "end": 28
                                    },
                                    "consequent": {
                                        "kind": 2097346,
                                        "expression": null,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 45
                                    },
                                    "alternate": null,
                                    "isWebCompat": true,
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 45
                                }
                            ],
                            "multiline": true,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 45
                        },
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 47
                    },
                    "flags": 536887296,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 47
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 47
            }
        ],
        "transformFlags": 0,
        "flags": 16384,
        "intersects": false,
        "start": 0,
        "end": 47
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

