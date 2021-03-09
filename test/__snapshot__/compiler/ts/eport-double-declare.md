# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
export declare declare var name;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export declare declare var name;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "declare",
                    "rawText": "declare",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 14
                },
                "flags": 32,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 14
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "name",
                                "rawText": "name",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 26,
                                "end": 31
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 26,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 65536,
                            "end": 31
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 31
                },
                "flags": 201392128,
                "intersects": false,
                "transformFlags": 0,
                "start": 22,
                "end": 32
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 32
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 15,
            "length": 0
        }
    ],
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

