# Kataw parser test case

## Input

`````js
`foo${`foo${bar}baz`}baz`
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "`foo${`foo${bar}baz`}baz`",
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
                            "rawText": "foo",
                            "text": "foo",
                            "expression": {
                                "kind": 66261,
                                "spans": [
                                    {
                                        "kind": 66263,
                                        "rawText": "foo",
                                        "text": "foo",
                                        "expression": {
                                            "kind": 196712,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 15
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 6,
                                        "end": 15
                                    }
                                ],
                                "tail": {
                                    "kind": 4260568,
                                    "rawText": "baz",
                                    "text": "baz",
                                    "literal": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 15,
                                    "end": 20
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 6,
                                "end": 20
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 0,
                            "end": 20
                        }
                    ],
                    "tail": {
                        "kind": 4260568,
                        "rawText": "baz",
                        "text": "baz",
                        "literal": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 20,
                        "end": 25
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 25
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 25
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 25
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

