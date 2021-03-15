# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
result = [ arrow = () => {} ] = vals;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "result = [ arrow = () => {} ] = vals;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "result",
                        "rawText": "result",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 6
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65550,
                        "left": {
                            "kind": 67207686,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 65550,
                                        "left": {
                                            "kind": 196712,
                                            "text": "arrow",
                                            "rawText": "arrow",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 16
                                        },
                                        "operator": "=",
                                        "right": {
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
                                                "start": 18,
                                                "end": 18
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
                                                    "start": 26,
                                                    "end": 26
                                                },
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 27
                                            },
                                            "flags": 536936448,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 27
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 27
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 29
                        },
                        "operator": "=",
                        "right": {
                            "kind": 196712,
                            "text": "vals",
                            "rawText": "vals",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 36
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 36
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 36
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 37
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 37
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

