# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
z(x)?x:y;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "z(x)?x:y;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65592,
                    "shortCircuit": {
                        "kind": 66091,
                        "expression": {
                            "kind": 196712,
                            "text": "z",
                            "rawText": "z",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 1
                        },
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 3,
                            "elements": [
                                {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 3
                                }
                            ],
                            "trailingComma": false,
                            "transformFlags": 0,
                            "flags": 65536,
                            "intersects": false,
                            "start": 3,
                            "end": 4
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 4
                    },
                    "consequent": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 6
                    },
                    "alternate": {
                        "kind": 196712,
                        "text": "y",
                        "rawText": "y",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 8
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 9
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

