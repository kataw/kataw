# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export let [...x] = y
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export let [...x] = y",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 76,
                "declaration": {
                    "kind": 142,
                    "isConst": false,
                    "binding": {
                        "kind": 31,
                        "bindingList": [
                            {
                                "kind": 141,
                                "binding": {
                                    "kind": 33554437,
                                    "elementList": {
                                        "kind": 29,
                                        "elements": [
                                            {
                                                "kind": 134217756,
                                                "ellipsis": true,
                                                "left": {
                                                    "kind": 131102,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 65536,
                                                    "intersects": false,
                                                    "transformFlags": 1025,
                                                    "start": 15,
                                                    "end": 16
                                                },
                                                "right": null,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 4097,
                                                "start": 12,
                                                "end": 16
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 12,
                                        "end": 16
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 10,
                                    "end": 17
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 21
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 21
                            }
                        ],
                        "flags": 65552,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 21
                    },
                    "flags": 65552,
                    "intersects": false,
                    "transformFlags": 769,
                    "start": 0,
                    "end": 21
                },
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 21
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
