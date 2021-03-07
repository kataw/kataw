# Kataw parser test case

## Input

`````js
s = {"foo": yield a = x} = x
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "s = {\"foo\": yield a = x} = x",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "s",
                        "rawText": "s",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65550,
                        "left": {
                            "kind": 67224232,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 4261583,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 196712,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 17
                                    },
                                    {
                                        "kind": 65597,
                                        "left": {
                                            "kind": 196712,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 2,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "isOptional": false,
                                        "exclamation": false,
                                        "right": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "accessModifier": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 17,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 23
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 24
                        },
                        "operator": "=",
                        "right": {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 28
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 28
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 28
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 28
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 28
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 18,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

