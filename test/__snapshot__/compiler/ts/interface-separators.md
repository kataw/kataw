# Kataw parser test case

## Input

`````js
interface Comma { x: number, y: number }
interface Semi { x: number; y: number }
interface Newline {
    x: number
    y: number
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "interface Comma { x: number, y: number }\ninterface Semi { x: number; y: number }\ninterface Newline {\n    x: number\n    y: number\n}",
    "filename": "",
    "statements": [
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "Comma",
                "rawText": "Comma",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 9,
                "end": 15
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 20,
                            "end": 27
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 17,
                        "end": 28
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 28,
                            "end": 30
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 31,
                            "end": 38
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 28,
                        "end": 38
                    }
                ],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 17,
                "end": 38
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 0,
            "end": 40
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "Semi",
                "rawText": "Semi",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 50,
                "end": 55
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 57,
                            "end": 59
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 60,
                            "end": 67
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 57,
                        "end": 68
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 68,
                            "end": 70
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 71,
                            "end": 78
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 68,
                        "end": 78
                    }
                ],
                "multiline": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 57,
                "end": 78
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 40,
            "end": 80
        },
        {
            "kind": 8311,
            "name": {
                "kind": 196712,
                "text": "Newline",
                "rawText": "Newline",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 90,
                "end": 98
            },
            "typeParameters": null,
            "heritageClauses": null,
            "objectTypeMembers": {
                "kind": 536871081,
                "members": [
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "x",
                            "rawText": "x",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 100,
                            "end": 106
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 107,
                            "end": 114
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 100,
                        "end": 114
                    },
                    {
                        "kind": 8380,
                        "name": {
                            "kind": 196711,
                            "text": "y",
                            "rawText": "y",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 114,
                            "end": 120
                        },
                        "isOptional": false,
                        "accessModifier": null,
                        "type": {
                            "kind": 4202657,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 121,
                            "end": 128
                        },
                        "isStatic": false,
                        "isReadOnly": false,
                        "initializer": null,
                        "flags": 32768,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 114,
                        "end": 128
                    }
                ],
                "multiline": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 100,
                "end": 128
            },
            "flags": 32768,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 80,
            "end": 130
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
    "end": 130
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

