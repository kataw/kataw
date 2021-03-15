# Kataw parser test case

## Input

`````js
{`foo ${a} and ${b} and ${c} baz`}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "{`foo ${a} and ${b} and ${c} baz`}",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
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
                                        "start": 8,
                                        "end": 9
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 1,
                                    "end": 9
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
                                        "start": 17,
                                        "end": 18
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 9,
                                    "end": 18
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
                                        "start": 26,
                                        "end": 27
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 18,
                                    "end": 27
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
                                "start": 27,
                                "end": 33
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 1,
                            "end": 33
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 33
                    }
                ],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 1,
                "end": 33
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

