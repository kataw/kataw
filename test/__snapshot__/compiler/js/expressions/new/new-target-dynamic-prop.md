# Kataw parser test case

## Input

`````js
function f(){ x({[new.target]:y}) }
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function f(){ x({[new.target]:y}) }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 10
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
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
                                    "kind": 66091,
                                    "expression": {
                                        "kind": 196712,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "typeArguments": null,
                                    "argumentList": {
                                        "kind": 3,
                                        "elements": [
                                            {
                                                "kind": 67224232,
                                                "propertyList": {
                                                    "kind": 65722,
                                                    "properties": [
                                                        {
                                                            "kind": 65721,
                                                            "left": {
                                                                "kind": 65591,
                                                                "expression": {
                                                                    "kind": 4194973,
                                                                    "name": {
                                                                        "kind": 196711,
                                                                        "text": "target",
                                                                        "rawText": "target",
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 22,
                                                                        "end": 28
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1,
                                                                    "start": 18,
                                                                    "end": 28
                                                                },
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 131073,
                                                                "start": 17,
                                                                "end": 29
                                                            },
                                                            "right": {
                                                                "kind": 196712,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 0,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "start": 30,
                                                                "end": 31
                                                            },
                                                            "accessModifier": null,
                                                            "decorators": null,
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 0,
                                                            "start": 17,
                                                            "end": 31
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "multiline": false,
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 17,
                                                    "end": 31
                                                },
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 32
                                            }
                                        ],
                                        "trailingComma": false,
                                        "transformFlags": 0,
                                        "flags": 0,
                                        "intersects": false,
                                        "start": 17,
                                        "end": 33
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 33
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 33
                            }
                        ],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 33
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 35
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 35
            }
        ],
        "transformFlags": 0,
        "flags": 0,
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

