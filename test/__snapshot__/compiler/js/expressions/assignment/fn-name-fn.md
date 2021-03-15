# Kataw parser test case

## Input

`````js
var xFn, fn;

xFn = function x() {};
fn = function() {};
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "var xFn, fn;\n\nxFn = function x() {};\nfn = function() {};",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "xFn",
                                "rawText": "xFn",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 7
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 7
                        },
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "fn",
                                "rawText": "fn",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 8,
                                "end": 11
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 8,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 11
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 11
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 12
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "xFn",
                        "rawText": "xFn",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 12,
                        "end": 17
                    },
                    "operator": "=",
                    "right": {
                        "kind": 8456285,
                        "name": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 28,
                            "end": 30
                        },
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 32
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 34,
                                "end": 34
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 35
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 35
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 35
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 12,
                "end": 36
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "fn",
                        "rawText": "fn",
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 39
                    },
                    "operator": "=",
                    "right": {
                        "kind": 8456285,
                        "name": null,
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 51,
                            "end": 52
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 54,
                                "end": 54
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 52,
                            "end": 55
                        },
                        "typeParameters": null,
                        "type": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 41,
                        "end": 55
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 55
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 36,
                "end": 56
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 56
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

