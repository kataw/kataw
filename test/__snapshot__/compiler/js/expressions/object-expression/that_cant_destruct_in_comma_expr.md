# Kataw parser test case

## Input

`````js
x, {x: foo + y, bar} = doo
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "x, {x: foo + y, bar} = doo",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 196712,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 1
                        },
                        {
                            "kind": 65550,
                            "left": {
                                "kind": 67224232,
                                "propertyList": {
                                    "kind": 65722,
                                    "properties": [
                                        {
                                            "kind": 65721,
                                            "left": {
                                                "kind": 196711,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 4,
                                                "end": 5
                                            },
                                            "right": {
                                                "kind": 65563,
                                                "left": {
                                                    "kind": 196712,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 6,
                                                    "end": 10
                                                },
                                                "operator": "+",
                                                "right": {
                                                    "kind": 196712,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 14
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 14
                                            },
                                            "accessModifier": null,
                                            "decorators": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 14
                                        },
                                        {
                                            "kind": 196712,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 19
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 20
                            },
                            "operator": "=",
                            "right": {
                                "kind": 196712,
                                "text": "doo",
                                "rawText": "doo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 26
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 26
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 26
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 26
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 26
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

