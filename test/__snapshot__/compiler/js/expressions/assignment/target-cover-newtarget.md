# Kataw parser test case

## Input

`````js
function f() {
  (new.target) = 1;
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function f() {\n  (new.target) = 1;\n}",
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
                                    "kind": 65550,
                                    "left": {
                                        "kind": 66224,
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
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 29
                                    },
                                    "operator": "=",
                                    "right": {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 33
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 33
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 34
                            }
                        ],
                        "multiline": true,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 34
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 36
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 36
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 36
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 36
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

