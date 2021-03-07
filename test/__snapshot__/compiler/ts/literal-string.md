# Kataw parser test case

## Input

`````js
let x: "foo";
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "let x: \"foo\";",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 142,
                "isConst": false,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 5
                            },
                            "exclamation": false,
                            "type": {
                                "kind": 8400,
                                "value": "foo",
                                "rawValue": "foo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 6,
                                "end": 12
                            },
                            "initializer": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 12
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 12
                },
                "flags": 16,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 13
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 13
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

