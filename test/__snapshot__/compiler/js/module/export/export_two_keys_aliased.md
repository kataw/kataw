# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var x,y; export {x as a, y as b}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "var x,y; export {x as a, y as b}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
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
                                "start": 3,
                                "end": 5
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 65536,
                            "end": 5
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
                                "start": 6,
                                "end": 7
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 6,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 65536,
                            "end": 7
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 7
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            {
                "kind": 76,
                "declaration": null,
                "namedExports": {
                    "kind": 152,
                    "exportsList": {
                        "kind": 80,
                        "specifiers": [
                            {
                                "kind": 79,
                                "moduleExportName": null,
                                "name": {
                                    "kind": 196711,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 18
                                },
                                "binding": {
                                    "kind": 196711,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 23
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 23
                            },
                            {
                                "kind": 79,
                                "moduleExportName": null,
                                "name": {
                                    "kind": 196711,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 26
                                },
                                "binding": {
                                    "kind": 196711,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 31
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 31
                            }
                        ],
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 31
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 32
                },
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 8,
                "end": 32
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 32
    },
    "jsx": true,
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

