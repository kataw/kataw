# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export var x, y
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export var x, y",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 76,
                "declaration": {
                    "kind": 2097397,
                    "declarationList": {
                        "kind": 244,
                        "declarations": [
                            {
                                "kind": 243,
                                "binding": {
                                    "kind": 131102,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 10,
                                    "end": 12
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": null,
                                "flags": 10,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 65536,
                                "end": 12
                            },
                            {
                                "kind": 243,
                                "binding": {
                                    "kind": 131102,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 13,
                                    "end": 15
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": null,
                                "flags": 13,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 65536,
                                "end": 15
                            }
                        ],
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 15
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 15
                },
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 15
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 15
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
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

