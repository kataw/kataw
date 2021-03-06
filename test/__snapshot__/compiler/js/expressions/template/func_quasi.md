# Kataw parser test case

## Input

`````js
`${function(){}}`
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "`${function(){}}`",
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
                            "rawText": "",
                            "text": "",
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
                                    "start": 12,
                                    "end": 13
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
                                        "start": 14,
                                        "end": 14
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 13,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "type": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 15
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 0,
                            "end": 15
                        }
                    ],
                    "tail": {
                        "kind": 4260568,
                        "rawText": "",
                        "text": "",
                        "literal": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 15,
                        "end": 17
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 17
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 17
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 17
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

