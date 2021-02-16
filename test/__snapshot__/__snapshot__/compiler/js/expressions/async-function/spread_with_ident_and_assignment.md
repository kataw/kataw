# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
[...x = y] = a;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "[...x = y] = a;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 67207686,
                        "elementList": {
                            "kind": 65605,
                            "elements": [
                                {
                                    "kind": 65740,
                                    "argument": {
                                        "kind": 65550,
                                        "left": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 4,
                                            "end": 5
                                        },
                                        "operator": "=",
                                        "right": {
                                            "kind": 196712,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 7,
                                            "end": 9
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 4,
                                        "end": 9
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 1,
                                    "end": 9
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 1,
                            "end": 9
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 0,
                        "end": 10
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 12,
                        "end": 14
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 14
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 15
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 15
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

