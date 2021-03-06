# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
declare var x: any;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "declare var x: any;",
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
                                "start": 11,
                                "end": 13
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 4202498,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 14,
                                "end": 18
                            },
                            "initializer": null,
                            "flags": 11,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 65536,
                            "end": 18
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 18
                },
                "flags": 201392128,
                "intersects": false,
                "transformFlags": 0,
                "start": 7,
                "end": 19
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 19
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

