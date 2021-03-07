# Kataw parser test case

## Input

`````js
enum E {
    A = 0,
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "enum E {\n    A = 0,\n}",
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
                                "text": "A",
                                "rawText": "A",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 14
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 0,
                                "rawText": "0",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 18
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 18
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 8,
                    "end": 19
                },
                "isConst": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 21
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 21
    },
    "jsx": false,
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

