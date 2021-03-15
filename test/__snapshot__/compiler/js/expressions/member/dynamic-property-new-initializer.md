# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
[new x()[y] = a + b] = z
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "[new x()[y] = a + b] = z",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 67207686,
                        "elementList": {
                            "kind": 65605,
                            "elements": [
                                {
                                    "kind": 65550,
                                    "left": {
                                        "kind": 66116,
                                        "member": {
                                            "kind": 66204,
                                            "expression": {
                                                "kind": 196712,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 4,
                                                "end": 6
                                            },
                                            "typeArguments": null,
                                            "argumentList": {
                                                "kind": 3,
                                                "elements": [],
                                                "trailingComma": false,
                                                "transformFlags": 0,
                                                "flags": 0,
                                                "intersects": false,
                                                "start": 7,
                                                "end": 7
                                            },
                                            "flags": 1,
                                            "intersects": false,
                                            "transformFlags": 32,
                                            "start": 0,
                                            "end": 8
                                        },
                                        "expression": {
                                            "kind": 196712,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 11
                                    },
                                    "operator": "=",
                                    "right": {
                                        "kind": 65563,
                                        "left": {
                                            "kind": 196712,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 15
                                        },
                                        "operator": "+",
                                        "right": {
                                            "kind": 196712,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 19
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 19
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 19
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 19
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 20
                    },
                    "operator": "=",
                    "right": {
                        "kind": 196712,
                        "text": "z",
                        "rawText": "z",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 24
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 24
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 24
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

