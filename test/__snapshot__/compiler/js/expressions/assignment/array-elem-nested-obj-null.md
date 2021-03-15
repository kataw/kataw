# Kataw parser test case

## Input

`````js
 0, [{ x }] = [null];
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": " 0, [{ x }] = [null];",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 4261540,
                            "text": 0,
                            "rawText": "0",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 2
                        },
                        {
                            "kind": 65550,
                            "left": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 67224232,
                                            "propertyList": {
                                                "kind": 65722,
                                                "properties": [
                                                    {
                                                        "kind": 196712,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 6,
                                                        "end": 8
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 6,
                                                "end": 8
                                            },
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 10
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 10
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 11
                            },
                            "operator": "=",
                            "right": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [
                                        {
                                            "kind": 4260512,
                                            "text": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 19
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 19
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 20
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 20
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 20
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 21
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

