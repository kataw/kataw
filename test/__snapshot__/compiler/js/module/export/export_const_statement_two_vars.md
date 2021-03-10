# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export const x, y
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export const x, y",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 76,
                "declaration": {
                    "kind": 142,
                    "isConst": true,
                    "binding": {
                        "kind": 31,
                        "bindingList": [
                            {
                                "kind": 141,
                                "binding": {
                                    "kind": 131102,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 12,
                                    "end": 14
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 14
                            },
                            {
                                "kind": 141,
                                "binding": {
                                    "kind": 131102,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 15,
                                    "end": 17
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 17
                            }
                        ],
                        "flags": 65552,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 17
                    },
                    "flags": 65552,
                    "intersects": false,
                    "transformFlags": 769,
                    "start": 0,
                    "end": 17
                },
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 17
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
