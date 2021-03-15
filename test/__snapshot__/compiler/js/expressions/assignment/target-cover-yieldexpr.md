# Kataw parser test case

## Input

`````js
function* g() {
  (yield) = 1;
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function* g() {\n  (yield) = 1;\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
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
                                        "kind": 66224,
                                        "expression": {
                                            "kind": 65785,
                                            "delegate": false,
                                            "expression": null,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 16393,
                                            "start": 15,
                                            "end": 24
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 25
                                    },
                                    "operator": "=",
                                    "right": {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 29
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 15,
                                    "end": 29
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 30
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 30
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 32
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 384,
                "start": 0,
                "end": 32
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 32
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 32
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

