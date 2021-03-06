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
    "source": "\nenum E {\n    A = 0,\n}",
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
                    "start": 5,
                    "end": 7
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
                                "start": 9,
                                "end": 15
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 0,
                                "rawText": "0",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 19
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 9,
                            "end": 19
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 9,
                    "end": 20
                },
                "isConst": false,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 0,
                "end": 22
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 22
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

