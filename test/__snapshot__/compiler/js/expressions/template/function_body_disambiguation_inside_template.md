# Kataw parser test case

## Input

`````js
`a ${function(){}} b`
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "`a ${function(){}} b`",
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
                            "rawText": "a ",
                            "text": "a ",
                            "expression": {
                                "kind": 8456285,
                                "name": null,
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 15
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 16
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 17
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 17
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 0,
                            "end": 17
                        }
                    ],
                    "tail": {
                        "kind": 4260568,
                        "rawText": " b",
                        "text": " b",
                        "literal": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 17,
                        "end": 21
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 21
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
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

