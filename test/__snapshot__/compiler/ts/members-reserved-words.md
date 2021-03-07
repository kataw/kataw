# Kataw parser test case

## Input

`````js
enum E {
    const,
    default
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "enum E {\n    const,\n    default\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 8263,
                "name": {
                    "kind": 196712,
                    "text": "E",
                    "rawText": "E",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 6
                },
                "members": {
                    "kind": 8265,
                    "enumMembersList": [
                        {
                            "kind": 8264,
                            "name": {
                                "kind": 196711,
                                "text": "const",
                                "rawText": "const",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 18
                            },
                            "initializer": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 18
                        },
                        {
                            "kind": 8264,
                            "name": {
                                "kind": 196711,
                                "text": "default",
                                "rawText": "default",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 31
                            },
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 19,
                            "end": 31
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 8,
                    "end": 31
                },
                "isConst": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 33
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 33
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

