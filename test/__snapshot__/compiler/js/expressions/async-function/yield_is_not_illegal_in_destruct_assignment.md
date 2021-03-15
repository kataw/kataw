# Kataw parser test case

## Input

`````js
function* g() {   [...{ x = yield }] = y   }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function* g() {   [...{ x = yield }] = y   }",
    "filename": "",
    "statements": [
        {
            "kind": 788576,
            "name": {
                "kind": 131102,
                "text": "g",
                "rawText": "g",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 9,
                "end": 11
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 12,
                "end": 13
            },
            "type": null,
            "contents": {
                "kind": 91,
                "functionStatementList": {
                    "kind": 94,
                    "statements": [
                        {
                            "kind": 2097233,
                            "expression": {
                                "kind": 65550,
                                "left": {
                                    "kind": 98822,
                                    "elementList": {
                                        "kind": 65605,
                                        "elements": [
                                            {
                                                "kind": 65740,
                                                "argument": {
                                                    "kind": 98984,
                                                    "propertyList": {
                                                        "kind": 65722,
                                                        "properties": [
                                                            {
                                                                "kind": 65597,
                                                                "left": {
                                                                    "kind": 196712,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 0,
                                                                    "start": 23,
                                                                    "end": 25
                                                                },
                                                                "isOptional": false,
                                                                "exclamation": false,
                                                                "right": {
                                                                    "kind": 65785,
                                                                    "delegate": false,
                                                                    "expression": null,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 16393,
                                                                    "start": 27,
                                                                    "end": 33
                                                                },
                                                                "accessModifier": null,
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 1,
                                                                "start": 23,
                                                                "end": 33
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 23,
                                                        "end": 33
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 22,
                                                    "end": 35
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2,
                                                "start": 19,
                                                "end": 35
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 35
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 36
                                },
                                "operator": "=",
                                "right": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 40
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 40
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 40
                        }
                    ],
                    "multiline": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 40
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 44
            },
            "typeParameters": null,
            "flags": 0,
            "intersects": false,
            "transformFlags": 384,
            "start": 0,
            "end": 44
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
    "end": 44
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

