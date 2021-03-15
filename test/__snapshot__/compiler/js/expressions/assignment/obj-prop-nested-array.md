# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
result = { x: [y] } = { x: [321] };
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "result = { x: [y] } = { x: [321] };",
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
                            "kind": 67224232,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "right": {
                                            "kind": 67207686,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 196712,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 15,
                                                        "end": 16
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 16
                                            },
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 17
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 17
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 19
                        },
                        "operator": "=",
                        "right": {
                            "kind": 67224232,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "right": {
                                            "kind": 67207686,
                                            "elementList": {
                                                "kind": 65605,
                                                "elements": [
                                                    {
                                                        "kind": 4261540,
                                                        "text": 321,
                                                        "rawText": "321",
                                                        "flags": 65536,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 28,
                                                        "end": 31
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 28,
                                                "end": 31
                                            },
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 32
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 32
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 34
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 34
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 34
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 35
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 35
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

