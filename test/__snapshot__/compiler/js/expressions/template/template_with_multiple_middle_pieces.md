# Kataw parser test case

## Input

`````js
`foo ${a} and ${b} and ${c} baz`
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "`foo ${a} and ${b} and ${c} baz`",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66261,
                    "spans": [
                        {
                            "kind": 66263,
                            "rawText": "foo ",
                            "text": "foo ",
                            "expression": {
                                "kind": 196712,
                                "text": "a",
                                "rawText": "a",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 8
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 0,
                            "end": 8
                        },
                        {
                            "kind": 66263,
                            "rawText": " and ",
                            "text": " and ",
                            "expression": {
                                "kind": 196712,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 17
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 8,
                            "end": 17
                        },
                        {
                            "kind": 66263,
                            "rawText": " and ",
                            "text": " and ",
                            "expression": {
                                "kind": 196712,
                                "text": "c",
                                "rawText": "c",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 26
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 17,
                            "end": 26
                        }
                    ],
                    "tail": {
                        "kind": 4260568,
                        "rawText": " baz",
                        "text": " baz",
                        "literal": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 26,
                        "end": 32
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 32
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 32
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 32
    },
    "jsx": false,
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

