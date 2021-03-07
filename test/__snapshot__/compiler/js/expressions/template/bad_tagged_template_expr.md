# Kataw parser test case

## Input

`````js
x`foo ${a b} bar`
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x`foo ${a b} bar`",
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
                        "text": "x",
                        "rawText": "x",
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
                            }
                        ],
                        "tail": {
                            "kind": 4260568,
                            "rawText": "} bar",
                            "text": "} bar",
                            "literal": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 9,
                            "end": 17
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 17
                    },
                    "optional": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 1,
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

