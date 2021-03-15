# Kataw parser test case

## Input

`````js
try {} catch (err) {
  let let;
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "try {} catch (err) {\n  let let;\n}",
    "filename": "",
    "statements": [
        {
            "kind": 2097375,
            "block": {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 5
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 6
            },
            "catchClause": {
                "kind": 2095,
                "catchParameter": {
                    "kind": 2097403,
                    "binding": {
                        "kind": 131102,
                        "text": "err",
                        "rawText": "err",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 14,
                        "end": 17
                    },
                    "type": null,
                    "initializer": null,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 17
                },
                "block": {
                    "kind": 2099237,
                    "block": {
                        "kind": 2084,
                        "statements": [
                            {
                                "kind": 142,
                                "isConst": false,
                                "binding": {
                                    "kind": 31,
                                    "bindingList": [
                                        {
                                            "kind": 16525,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "let",
                                                "rawText": "let",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 26,
                                                "end": 30
                                            },
                                            "exclamation": false,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 30
                                        }
                                    ],
                                    "flags": 8,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 26,
                                    "end": 30
                                },
                                "flags": 32776,
                                "intersects": false,
                                "transformFlags": 769,
                                "start": 20,
                                "end": 31
                            }
                        ],
                        "multiline": true,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 31
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 33
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 6,
                "end": 33
            },
            "finallyBlock": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 33
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
    "end": 33
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

