# Kataw parser test case

## Input

`````js
foo`x${a}y${b}z`
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "foo`x${a}y${b}z`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66260,
                "member": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "typeArguments": null,
                "template": {
                    "kind": 66261,
                    "spans": [
                        {
                            "kind": 66263,
                            "rawText": "x",
                            "text": "x",
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
                            "start": 3,
                            "end": 8
                        },
                        {
                            "kind": 66263,
                            "rawText": "y",
                            "text": "y",
                            "expression": {
                                "kind": 196712,
                                "text": "b",
                                "rawText": "b",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 13
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 8,
                            "end": 13
                        }
                    ],
                    "tail": {
                        "kind": 4260568,
                        "rawText": "z",
                        "text": "z",
                        "literal": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 13,
                        "end": 16
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 3,
                    "end": 16
                },
                "optional": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 3,
                "end": 16
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 16
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
    "end": 16
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

