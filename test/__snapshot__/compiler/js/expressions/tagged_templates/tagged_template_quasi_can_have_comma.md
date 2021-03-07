# Kataw parser test case

## Input

`````js
y`${y,0}`
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "y`${y,0}`",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66260,
                    "member": {
                        "kind": 196712,
                        "text": "y",
                        "rawText": "y",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "typeArguments": null,
                    "template": {
                        "kind": 66261,
                        "spans": [
                            {
                                "kind": 66263,
                                "rawText": "",
                                "text": "",
                                "expression": {
                                    "kind": 65590,
                                    "expressions": [
                                        {
                                            "kind": 196712,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 5
                                        },
                                        {
                                            "kind": 4261540,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 7
                                        }
                                    ],
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 7
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1,
                                "start": 1,
                                "end": 7
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
                            "start": 7,
                            "end": 9
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 9
                    },
                    "optional": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 1,
                    "end": 9
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 9
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 9
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 9
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

