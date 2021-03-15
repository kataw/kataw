# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
result = { x: { y } } = { x: { y: 2 } };
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "result = { x: { y } } = { x: { y: 2 } };",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "result",
                        "rawText": "result",
                        "flags": 0,
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
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 12
                                        },
                                        "right": {
                                            "kind": 67224232,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [
                                                    {
                                                        "kind": 196712,
                                                        "text": "y",
                                                        "rawText": "y",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 15,
                                                        "end": 17
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 17
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 19
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 19
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 19
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 21
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
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 25,
                                            "end": 27
                                        },
                                        "right": {
                                            "kind": 67224232,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [
                                                    {
                                                        "kind": 65721,
                                                        "left": {
                                                            "kind": 196711,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 30,
                                                            "end": 32
                                                        },
                                                        "right": {
                                                            "kind": 4261540,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 35
                                                        },
                                                        "accessModifier": null,
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 30,
                                                        "end": 35
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 30,
                                                "end": 35
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 28,
                                            "end": 37
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 37
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 37
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 23,
                            "end": 39
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 39
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 39
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 40
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 40
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

