# Kataw parser test case

## Input

`````js
declare enum E {
 e = 3.3 // Decimal
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "declare enum E {\n e = 3.3 // Decimal\n}",
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
                    "start": 12,
                    "end": 14
                },
                "members": {
                    "kind": 8265,
                    "enumMembersList": [
                        {
                            "kind": 8264,
                            "name": {
                                "kind": 196711,
                                "text": "e",
                                "rawText": "e",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 19
                            },
                            "initializer": {
                                "kind": 4261540,
                                "text": 3.3,
                                "rawText": "3.3",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 25
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 16,
                            "end": 25
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 16,
                    "end": 25
                },
                "isConst": false,
                "flags": 201326592,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 7,
                "end": 38
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 38
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 38
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

