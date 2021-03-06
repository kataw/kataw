# Kataw parser test case

## Input

`````js
foo: bar: do { do continue foo; while(z); } while(z)
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "foo: bar: do { do continue foo; while(z); } while(z)",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097292,
                "label": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "statement": {
                    "kind": 2097292,
                    "label": {
                        "kind": 196712,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 8
                    },
                    "statement": {
                        "kind": 2097218,
                        "expression": {
                            "kind": 196712,
                            "text": "z",
                            "rawText": "z",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 50,
                            "end": 51
                        },
                        "statement": {
                            "kind": 2099237,
                            "block": {
                                "kind": 2084,
                                "statements": [
                                    {
                                        "kind": 2097218,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 38,
                                            "end": 39
                                        },
                                        "statement": {
                                            "kind": 2097212,
                                            "label": {
                                                "kind": 196712,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 30
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 31
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 41
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 41
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 43
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 52
                    },
                    "isWebCompat": true,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 52
                },
                "isWebCompat": true,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 52
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 52
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

