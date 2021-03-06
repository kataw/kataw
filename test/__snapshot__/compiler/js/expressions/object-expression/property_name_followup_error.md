# Kataw parser test case

## Input

`````js
({foo += bar})
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({foo += bar})",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 196711,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 5
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 5
                        },
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 8
                    },
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 8,
                "end": 12
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 14
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 6,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression exprected. A compound assignment cannot follow an object literal.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 12,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Declaration or statement expected",
            "start": 13,
            "length": 0
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

