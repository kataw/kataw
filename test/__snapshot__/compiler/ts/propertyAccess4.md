# Kataw parser test case

## Input

`````js
null.toBAZ();
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "null.toBAZ();",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66091,
                    "expression": {
                        "kind": 66232,
                        "member": {
                            "kind": 4260512,
                            "text": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 4
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "toBAZ",
                            "rawText": "toBAZ",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 10,
                        "period": {
                            "kind": 254,
                            "pos": 4,
                            "end": 5
                        }
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 3,
                        "elements": [],
                        "trailingComma": false,
                        "transformFlags": 0,
                        "flags": 0,
                        "intersects": false,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 13
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

