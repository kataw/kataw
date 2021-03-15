# Kataw parser test case

## Input

`````js
`foo${{}}baz`
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "`foo${{}}baz`",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66261,
                "spans": [
                    {
                        "kind": 66263,
                        "rawText": "foo",
                        "text": "foo",
                        "expression": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 7
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 8
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 0,
                        "end": 8
                    }
                ],
                "tail": {
                    "kind": 4260568,
                    "rawText": "baz",
                    "text": "baz",
                    "literal": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 8,
                    "end": 13
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 13
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 13
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
    "end": 13
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

