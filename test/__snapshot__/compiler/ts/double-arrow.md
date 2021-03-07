# Kataw parser test case

## Input

`````js
const fn1 = () => {
  return;
} /* foo */;

const fn2 = () => {
  return;
}

// foo
;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "const fn1 = () => {\n  return;\n} /* foo */;\n\nconst fn2 = () => {\n  return;\n}\n\n// foo\n;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "fn1",
                                "rawText": "fn1",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 5,
                                "end": 9
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67592,
                                "typeParameters": null,
                                "arrowParameters": {
                                    "kind": 65545,
                                    "elements": [],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 11
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": null,
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 19,
                                                "end": 29
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 29
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 31
                                },
                                "flags": 536870912,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 31
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 31
                        }
                    ],
                    "flags": 16,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 31
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "start": 0,
                "end": 42
            },
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "fn2",
                                "rawText": "fn2",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 49,
                                "end": 53
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67592,
                                "typeParameters": null,
                                "arrowParameters": {
                                    "kind": 65545,
                                    "elements": [],
                                    "type": null,
                                    "accessModifier": null,
                                    "trailingComma": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 55,
                                    "end": 55
                                },
                                "contents": {
                                    "kind": 91,
                                    "functionStatementList": {
                                        "kind": 94,
                                        "statements": [
                                            {
                                                "kind": 2097346,
                                                "expression": null,
                                                "flags": 16384,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 63,
                                                "end": 73
                                            }
                                        ],
                                        "multiline": true,
                                        "flags": 16384,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 63,
                                        "end": 73
                                    },
                                    "flags": 16384,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 61,
                                    "end": 75
                                },
                                "flags": 536887296,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 55,
                                "end": 75
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 49,
                            "end": 75
                        }
                    ],
                    "flags": 16400,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 75
                },
                "flags": 16400,
                "intersects": false,
                "transformFlags": 769,
                "start": 42,
                "end": 85
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 85
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 85
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

