# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
export default (function log() {} as typeof console.log)
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export default (function log() {} as typeof console.log)",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 77,
                "declaration": {
                    "kind": 66224,
                    "expression": {
                        "kind": 73738,
                        "expression": {
                            "kind": 8456285,
                            "name": {
                                "kind": 131102,
                                "text": "log",
                                "rawText": "log",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 24,
                                "end": 28
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 29,
                                "end": 30
                            },
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 32
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 33
                            },
                            "typeParameters": null,
                            "type": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 33
                        },
                        "type": {
                            "kind": 8427,
                            "exprName": {
                                "kind": 8383,
                                "left": {
                                    "kind": 196711,
                                    "text": "console",
                                    "rawText": "console",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 43,
                                    "end": 51
                                },
                                "right": {
                                    "kind": 196711,
                                    "text": "log",
                                    "rawText": "log",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 52,
                                    "end": 55
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 43,
                                "end": 55
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 36,
                            "end": 55
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 33,
                        "end": 55
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 14,
                    "end": 56
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 56
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
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

